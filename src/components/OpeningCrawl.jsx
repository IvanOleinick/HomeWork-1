import {useEffect, useState} from "react";
import {baseUrl, tag_films} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl,setOpeningCrawl] = useState('');

    useEffect(() => {
        const episode=Math.floor(Math.random()*6)+1;
        fetch(`${baseUrl}/v1/${tag_films}/${episode}`)
            .then(res => res.json())
        .then(data => setOpeningCrawl(data.opening_crawl))
        // return ()=> console.log('Opening Crawl was unmounted');
    },[])
    if(openingCrawl){
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        )
    }else {
        return (
            <p className="farGalaxy">
            <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        )
    }


};

export default OpeningCrawl;