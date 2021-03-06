import React from 'react'
import Social from '../social/index.jsx';
import "./style.scss";

const Footer = () => {
    return (
        <div className="footer">
            <Social/>
            <p className="copyright">© Jeremy Zhu 2021</p>
        </div>
    )
}

export default Footer;
