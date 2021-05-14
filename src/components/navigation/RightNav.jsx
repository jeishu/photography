import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    padding-left: 1rem;
    @media (max-width: 768px) {
        transform: ${({ open }) => open ? "translatex(0)" : "translateX(100%)"}; 
    }
`;

const RightNav = ({ open }) => {
    const location = useLocation();

    return (
        <Ul open={open}>
            <li className="label">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    HOME
                </Link>
            </li>
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
        </Ul>
    )
}

export default RightNav;
