import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Grad1 from "../../../img/graduation/gphoto-oliver1.jpg";
import Grad2 from "../../../img/graduation/gphoto-oliver2.jpg";
import Grad3 from "../../../img/graduation/gphoto-oliver3.jpg";
import Grad4 from "../../../img/graduation/gphoto-ivy1.jpg";
import Grad5 from "../../../img/graduation/gphoto-ivy2.jpg";
import Grad6 from "../../../img/graduation/gphoto-ivy3.jpg";
import Grad7 from "../../../img/graduation/gphoto-ky1.jpg";
import Grad8 from "../../../img/graduation/gphoto-ky2.jpg";
import Grad9 from "../../../img/graduation/gphoto-ky3.jpg";
import Grad10 from "../../../img/graduation/gphoto-sky1.jpg";
import Grad11 from "../../../img/graduation/gphoto-sky2.jpg";
import Grad12 from "../../../img/graduation/gphoto-sky3.jpg";

const options = {
    caption: { showCaption: false },
    buttons: {
        showDownloadButton: false,
        showAutoplayButton: false
    }
}

export const Oliver = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Oliver 05/18/2019</h4>
            <SimpleReactLightbox >
                <SRLWrapper options={options}>
                    <div className="gallery">

                        <img src={Grad1} alt="Oliver" className="picture" />
                        <img src={Grad2} alt="Oliver" className="picture" />
                        <img src={Grad3} alt="Oliver" className="picture" />

                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}

export const Ivy = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Ivy 04/14/2020</h4>
            <SimpleReactLightbox >
                <SRLWrapper options={options}>
                    <div className="gallery">

                        <img src={Grad4} alt="Ivy" className="picture" />
                        <img src={Grad5} alt="Ivy" className="picture" />
                        <img src={Grad6} alt="Ivy" className="picture" />

                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}

export const Ky = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Ky 05/16/2020</h4>
            <SimpleReactLightbox >
                <SRLWrapper options={options}>
                    <div className="gallery">

                        <img src={Grad7} alt="Ky" className="picture" />
                        <img src={Grad8} alt="Ky" className="picture" />
                        <img src={Grad9} alt="Ky" className="picture" />

                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}

export const Skyler = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Skyler 12/21/2020</h4>
            <SimpleReactLightbox >
                <SRLWrapper options={options}>
                    <div className="gallery">

                        <img src={Grad10} alt="Skyler" className="picture" />
                        <img src={Grad11} alt="Skyler" className="picture" />
                        <img src={Grad12} alt="Skyler" className="picture" />

                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    )
}