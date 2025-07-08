import React, { useState, useEffect } from 'react';
import { baseUrl, id_person, tag_base, tag_peoples } from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/${tag_base}/${tag_peoples}/${id_person}`)
            .then(res => res.json())
            .then(data => setAboutMe({
                name: data.name,
                gender: data.gender,
                skin_color: data.skin_color,
                hair_color: data.hair_color,
                eye_color: data.eye_color,
                height: data.height,
                mass: data.mass,
                birth_year: data.birth_year,
                image: data.image,
            }))
            .catch(err => console.error(err));
    }, []);

    if (!aboutMe) {
        return (
            <p className="farGalaxy">
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        );
    }

    return (
        <div className="d-flex justify-content-between align-items-start">
            <div className="farGalaxy">
                {Object.entries(aboutMe).map(([key, value]) => {
                    if (key === "image") return null;

                    const label = key
                        .replace(/_/g, ' ')                     // заменяем "_" на пробел
                        .replace(/^\w/, c => c.toUpperCase()); // первая буква заглавная

                    return (
                        <p key={key}>
                            {label}: {value}
                        </p>
                    );
                })}
            </div>

            <img className="w-50" src={`/${aboutMe.image}`} alt={aboutMe.name} />
        </div>
    );
};

export default AboutMe;
