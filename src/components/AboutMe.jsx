import React, {useState, useEffect} from 'react';
import {baseUrl, id, tags} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/v1/${tags}/${id}`)
            .then(res => res.json())
            .then(data => setAboutMe({
                name: data.name,
                gender: data.gender,
                skin_color: data.skin_color,
                hair_color: data.hair_color,
                eye_color: data.eye_color,
                height: data.height,
                image: data.image,
            }))
            .catch(err => console.error(err));
    }, []);

    if (!aboutMe) return (<p className="farGalaxy">
        <span className="spinner-border spinner-border-sm"></span>
        Loading...
    </p>)

    return (
        < div className="d-flex justify-content-between align-items-start">
        <div className="farGalaxy">
            <p>Name: {aboutMe.name}</p>
            <p>Gender: {aboutMe.gender}</p>
            <p>Skin Color: {aboutMe.skin_color}</p>
            <p>Hair Color: {aboutMe.hair_color}</p>
            <p>Eye Color: {aboutMe.eye_color}</p>
            <p>Height: {aboutMe.height}cm</p>
        </div>
            <img className="w-50"
                 src={`/${aboutMe.image}`} alt={aboutMe.name}/>

        </div>
    );
};

export default AboutMe;
