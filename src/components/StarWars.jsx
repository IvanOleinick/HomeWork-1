import React from 'react';
import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className="text-[1.7em] text-justify leading-[1.6]">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;