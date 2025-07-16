import React, {useEffect, useState} from 'react';
import {baseUrl, loadCachedData, saveData, tag_base, tag_planets} from "../utils/constants.js";


const Contact = () => {
    const [planets, setPlanets] = useState([]);
    const STORAGE_KEY = 'planets';

    useEffect(() => {
        const cachedPlanets = loadCachedData(STORAGE_KEY);
        if (cachedPlanets) {
            setPlanets(cachedPlanets);
            return;
        }

        fetch(`${baseUrl}/${tag_base}/${tag_planets}`)
            .then(res => res.json())
            .then(data => {
                const planetNames = data.map(planet => planet.name);
                setPlanets(planetNames);
                saveData(STORAGE_KEY, planetNames, 30);
            })
            .catch(err => console.error('Failed to fetch planets:', err));
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow space-y-4">
            <form onSubmit={e => e.preventDefault()} className="space-y-4">
                <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="planets" className="block text-sm font-medium text-gray-700">
                        Planets
                    </label>
                    <select
                        id="planets"
                        name="planets"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        {planets.map((name, index) => (
                            <option key={index} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                </div>

                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition"
                    />
                </div>
            </form>
        </div>

    );
};

export default Contact;
