import Friends from "./Friends.jsx";
import {arrayImages} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>
            {arrayImages.map((item, index) => {
                let extraClass = "";

                if (index === 6) extraClass = "bottomLeft";
                if (index === 8) extraClass = "bottomRight";

                return <Friends friend={item} className={extraClass} key={index}/>;
            })}
        </section>
    );
};

export default DreamTeam;