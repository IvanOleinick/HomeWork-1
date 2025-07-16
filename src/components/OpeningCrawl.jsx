import {useEffect, useState} from "react";
import {baseUrl, tag_films} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState('');

    useEffect(() => {
        const openingcrawl = sessionStorage.getItem('opening_crawl');
        if (openingcrawl) {
            setOpeningCrawl(openingcrawl);

        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${baseUrl}/v1/${tag_films}/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                });
        }

    }, [])


    if (openingCrawl) {
        return (
            <p className="text-[1.7em] text-justify leading-[1.6]">{openingCrawl}</p>
        )
    } else {
        return (
            <p className="farGalaxy">
                <p className="text-[1.7em] text-justify leading-[1.6]"></p>
                Loading...
            </p>
        )
    }


};

export default OpeningCrawl;