import Friends from "./Friends.jsx";
import {arrayImages} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>
            {arrayImages.map((item ,index)=> <Friends friend={item} key={index}/>)}

        </section>
    );
};

export default DreamTeam;