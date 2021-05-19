import React from 'react';
import Footer from '../../components/footer';
import "./style.scss";
import Hero from "../../img/foto-1.jpg";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    return (
        <div className="page">
            <div className="general-section">
                <main>
                    <div className="hero">
                        <img src={Hero} alt="" />
                        <h1>Jeremy Zhu</h1>
                        <ul>
                            <li className="label">
                                <Link
                                    to="/about"
                                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                    ABOUT
                                </Link>
                            </li>
                            <li className="label">
                                <Link
                                    to="/portfolio"
                                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li className="label">
                                <Link
                                    to="/contact"
                                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
            <Footer />

        </div>
    )
}

export default Home;
