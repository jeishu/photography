import React from "react";
import "./Navbar.scss";
import Burger from './Burger';
import Logo from "../../img/jeremyzhu_photography-black.svg";

function NavTabs() {

    return (
        <div className="nav-bar">
            <img className="logo" src={Logo} alt={Logo} />
            <Burger />
        </div>
    );
}

export default NavTabs;
