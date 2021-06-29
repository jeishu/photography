import React from 'react';
import Footer from '../../components/footer';
import "./style.scss";
import PortfolioMenu from '../../components/portfolioMenu';
import {Oliver, Ivy, Ky, Skyler} from "../../components/gallery/graduationGallery/graduation"
import {Magnolia , BlueBonnet} from '../../components/gallery/portraitGallery/portraits';
import BeeCave from '../../components/gallery/productGallery/product';

// Home Page for Portfolio
export const Portfolio = () => {
    return (
        <div className="page">
            <div className="general-section portfolio-page">
                <PortfolioMenu />
                <h1>Portfolio</h1>
                <div className="portfolio-home">
                    <Ivy/>
                    <BlueBonnet/>
                    <BeeCave/>  
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

// Sub nav for portfolio page
export const Graduation = () => {
    return (
        <div className="page">
            <div className="general-section portfolio-page">
                <PortfolioMenu />
                <h1>Graduation</h1>
                <Oliver/>
                <Ivy/>
                <Ky/>
                <Skyler/>
            </div>
            <Footer />
        </div>
    )
}

export const Portraits = () => {
    return (
        <div className="page">
            <div className="general-section portfolio-page">
                <PortfolioMenu />
                <h1>Portraits</h1>
                <Magnolia />
                <BlueBonnet/>
            </div>
            <Footer />
        </div>
    )
}

export const Product = () => {
    return (
        <div className="page">
            <div className="general-section portfolio-page">
                <PortfolioMenu />
                <h1>Product</h1>
                <div className="gallery">
                    <BeeCave/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const MISC = () => {
    return (
        <div className="page">
            <div className="general-section portfolio-page">
                <PortfolioMenu />
                <h1>MISC</h1>
                <div className="gallery">
                </div>
            </div>
            <Footer />
        </div>
    )
}