import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import product1 from "../../../img/product/08032020/tea-bottle-regular.jpg";
import product2 from "../../../img/product/08032020/bottle-metal-amtheyst.jpg";
import product3 from "../../../img/product/08032020/allergy-clear-can.jpg";
import overTop1 from "../../../img/product/08032020/antiviral8.jpg";
import overTop2 from "../../../img/product/08032020/antiviral3.jpg";
import overTop3 from "../../../img/product/08032020/antiviral6.jpg";
import overTop4 from "../../../img/product/08032020/bath-bomb-1.jpg";
import overTop5 from "../../../img/product/08032020/bath-bomb-2.jpg";
import overTop6 from "../../../img/product/08032020/steady-mountain-1.jpg";

const options = {
    caption: { showCaption: false },
    buttons: {
        showDownloadButton: false,
        showAutoplayButton: false
    }
}

const BeeCave = () => {
    return (
        <div className="gallery-box">
            <h4 className="portfolio-title">Bee Cave Acupuncture 08/03/2020</h4>
            <SimpleReactLightbox >
                <SRLWrapper options={options}>
                    <div className="gallery">
                        <img src={product1} alt="thisisaphoto" className="picture" />
                        <img src={product2} alt="thisisaphoto" className="picture" />
                        <img src={product3} alt="thisisaphoto" className="picture" />
                        <img src={overTop1} alt="thisisaphoto" className="picture" />
                        <img src={overTop6} alt="thisisaphoto" className="picture" />
                        <img src={overTop3} alt="thisisaphoto" className="picture" />
                        <img src={overTop2} alt="thisisaphoto" className="picture" />
                        <img src={overTop4} alt="thisisaphoto" className="picture" />
                        <img src={overTop5} alt="thisisaphoto" className="picture" />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div >
    )
}

export default BeeCave;
