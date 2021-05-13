import React from 'react';
import Grad1 from "../../../img/graduation/gphoto-oliver1.png";
import Grad2 from "../../../img/graduation/gphoto-oliver2.png";
import Grad3 from "../../../img/graduation/gphoto-oliver3.png";
import Grad4 from "../../../img/graduation/gphoto-ivy1.png";
import Grad5 from "../../../img/graduation/gphoto-ivy2.png";
import Grad6 from "../../../img/graduation/gphoto-ivy3.png";
import Grad7 from "../../../img/graduation/gphoto-ky1.png";
import Grad8 from "../../../img/graduation/gphoto-ky2.png";
import Grad9 from "../../../img/graduation/gphoto-ky3.png";
import Grad10 from "../../../img/graduation/gphoto-sky1.png";
import Grad11 from "../../../img/graduation/gphoto-sky2.png";
import Grad12 from "../../../img/graduation/gphoto-sky3.png";

export const Oliver = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Oliver 05/18/2019</h4>
            <div className="gallery">
                <img src={Grad1} alt={Grad1} className="picture" />
                <img src={Grad2} alt={Grad2} className="picture" />
                <img src={Grad3} alt={Grad3} className="picture" />
            </div>
        </div>
    )
}

export const Ivy = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Ivy 04/14/2020</h4>
            <div className="gallery">
                <img src={Grad4} alt={Grad4} className="picture" />
                <img src={Grad5} alt={Grad5} className="picture" />
                <img src={Grad6} alt={Grad6} className="picture" />
            </div>
        </div>
    )
}

export const Ky = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Ky 05/16/2020</h4>
            <div className="gallery">
                <img src={Grad7} alt={Grad7} className="picture" />
                <img src={Grad8} alt={Grad8} className="picture" />
                <img src={Grad9} alt={Grad9} className="picture" />
            </div>
        </div>
    )
}


export const Skyler = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Skyler 12/21/2020</h4>
            <div className="gallery">
                <img src={Grad10} alt={Grad10} className="picture" />
                <img src={Grad11} alt={Grad11} className="picture" />
                <img src={Grad12} alt={Grad12} className="picture" />
            </div>
        </div>
    )
}