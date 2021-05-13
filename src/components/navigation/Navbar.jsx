import React from "react";
import "./Navbar.scss";
import Burger from './Burger';
import Logo from "../../img/jeremyzhu_photography-black.svg";

function NavTabs() {

    return (
        <div className="nav-bar">
            <a href="#" onClick={foo}><img className="logo" src={Logo} alt={Logo} /></a>
            <Burger />
        </div>
    );
}

export default NavTabs;
