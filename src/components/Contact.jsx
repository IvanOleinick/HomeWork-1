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
        <div className="container">
            <form onSubmit={e => e.preventDefault()}>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planets">Planets</label>
                <select className="planets" id="planets" name="planets">
                    {planets.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea className="message" id="subject" name="subject" placeholder="Write something.."></textarea>

                <input className="btn btn-danger mx-1" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Contact;
