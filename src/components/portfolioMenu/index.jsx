import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const PortfolioMenu = () => {
    const location = useLocation();

    return (
        <div className="portfolio-menu-container">
            <ul className="portfolio-menu">
                <li className="label">
                    <Link to="/portfolio/graduation" className={location.pathname === "/portfolio/graduation" ? "nav-link active" : "nav-link"}>
                        Graduation
                    </Link>
                </li>
                <li className="label">
                    <Link
                        to="/portfolio/portraits"
                        className={location.pathname === "/portfolio/portraits" ? "nav-link active" : "nav-link"}>
                        Portraits
                    </Link>
                </li>
                <li className="label">
                    <Link
                        to="/portfolio/product"
                        className={location.pathname === "/portfolio/product" ? "nav-link active" : "nav-link"}>
                        Products
                    </Link>
                </li>
                <li className="label">
                    <Link
                        to="/portfolio/misc"
                        className={location.pathname === "/portfolio/misc" ? "nav-link active" : "nav-link"}>
                        MISC
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default PortfolioMenu;
