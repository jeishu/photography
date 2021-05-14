import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Portrait1 from "../../../img/portraits/02162019-magnolia/foto-11.jpg";
import Portrait2 from "../../../img/portraits/02162019-magnolia/foto-12.jpg";
import Portrait3 from "../../../img/portraits/02162019-magnolia/foto-16.jpg";
import Portrait4 from "../../../img/portraits/02162019-magnolia/foto-30.jpg";
import Portrait5 from "../../../img/portraits/02162019-magnolia/foto-31.jpg";
import Portrait6 from "../../../img/portraits/02162019-magnolia/foto-33.jpg";
import Portrait7 from "../../../img/portraits/02162019-magnolia/foto-34.jpg";
import Portrait8 from "../../../img/portraits/02162019-magnolia/foto-35.jpg";
import Portrait9 from "../../../img/portraits/02162019-magnolia/foto-36.jpg";
import Blue1 from "../../../img/portraits/03292019-bluebonnet/christy-foto-1.jpg";
import Blue2 from "../../../img/portraits/03292019-bluebonnet/christy-foto-2.jpg";
import Blue3 from "../../../img/portraits/03292019-bluebonnet/christy-foto-6.jpg";
import Blue4 from "../../../img/portraits/03292019-bluebonnet/christy-foto-7.jpg";
import Blue5 from "../../../img/portraits/03292019-bluebonnet/christy-foto-11.jpg";
import Blue6 from "../../../img/portraits/03292019-bluebonnet/christy-foto-12.jpg";
import Blue7 from "../../../img/portraits/03292019-bluebonnet/christy-foto-13.jpg";
import Blue8 from "../../../img/portraits/03292019-bluebonnet/christy-foto-16.jpg";
import Blue9 from "../../../img/portraits/03292019-bluebonnet/christy-foto-18.jpg";

const options = {
    caption: { showCaption: false },
    buttons: {
        showDownloadButton: false,
        showAutoplayButton: false
    }
}

export const Magnolia = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Magnolia Flowers 02/16/2019</h4>
            <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <div className="gallery">
                        <img src={Portrait1} alt={Portrait1} className="picture" />
                        <img src={Portrait2} alt={Portrait2} className="picture" />
                        <img src={Portrait3} alt={Portrait3} className="picture" />
                        {/* <img src={Portrait4} alt={Portrait4} className="picture" /> */}
                        <img src={Portrait5} alt={Portrait5} className="picture" />
                        <img src={Portrait6} alt={Portrait6} className="picture" />
                        <img src={Portrait7} alt={Portrait7} className="picture" />
                        <img src={Portrait8} alt={Portrait8} className="picture" />
                        {/* <img src={Portrait9} alt={Portrait9} className="picture" /> */}
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}

export const BlueBonnet = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Bluebonnet 03/29/2019</h4>
            <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <div className="gallery">
                        {/* <img src={Blue1} alt={Blue1} className="picture" /> */}
                        <img src={Blue2} alt={Blue2} className="picture" />
                        <img src={Blue3} alt={Blue3} className="picture" />
                        <img src={Blue4} alt={Blue4} className="picture" />
                        <img src={Blue5} alt={Blue5} className="picture" />
                        <img src={Blue6} alt={Blue6} className="picture" />
                        <img src={Blue7} alt={Blue7} className="picture" />
                        <img src={Blue8} alt={Blue8} className="picture" />
                        {/* <img src={Blue9} alt={Blue9} className="picture" /> */}
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}