import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <nav>
            <ul className="fixed top-1 left-12 flex gap-2">
                {navItems.map(item => <NavItem  itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;