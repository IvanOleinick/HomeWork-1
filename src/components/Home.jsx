import React from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";

const Home = () => {
    return (
        <main className="clear-both">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>


    );
};

export default Home;