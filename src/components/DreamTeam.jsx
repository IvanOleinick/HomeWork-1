import Friends from "./Friends.jsx";
import {arrayImages} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-right row w-1/2 border rounded-b-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {arrayImages.map((item, index) => {
                let extraClass = "";

                if (index === 6) extraClass = "rounded-bl-2xl";
                if (index === 8) extraClass = "rounded-br-2xl";

                return <Friends friend={item} className={extraClass} key={index}/>;
            })}
        </section>
    );
};

export default DreamTeam;