import React, {useState} from "react";
import "./Navbar.scss";
import Burger from './Burger';
import Logo from "../../img/jeremyzhu_photography-black.svg";

function NavTabs() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 55){
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <div className={navbar ? "nav-bar scroll" : "nav-bar"}>
            <img className="logo" src={Logo} alt={Logo} />
            <Burger />
        </div>
    );
}

export default NavTabs;
