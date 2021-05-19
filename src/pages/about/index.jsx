import React from 'react';
import Footer from '../../components/footer/index';
import "./style.scss";
import ProfilePic from "../../img/profilepic.png"

const About = () => {
    return (
        <div className="page">
            <div className="general-section">
                <div className="about-container">
                    <div className="about-box">
                        <h3>Photographer / Web Developer</h3>
                        <img src={ProfilePic} alt={ProfilePic} />
                    </div>
                    <div className="about-info">
                        <p>Hi, my name is <span>Jeremy Zhu</span>. I am a photographer, web developer, food enthusiast, and an adventurer.</p>
                        <p>Picked up photography as a hobby during my junior year in college. Initially wanted to do landscape and food photography, but end up taking on portrait photography with my friends. Self-taught photography through various resources on the web (Mainly YouTube).</p>
                        <p>I graduated from the Univserity of Texas at Austin in 2019 with the Bachelors Degree in Asian Studies with a minor in Business. Soon took on the challenge of a coding bootcamp and graduated in 2021 with a certification on Full Stack Developer.</p>
                        <a rel="noreferrer" href="https://jeremyzhu.herokuapp.com/" target="_blank">My Web Dev Portfolio</a>
                    </div>
                    
                </div>
                <Footer />
            </div>
            
        </div>
    )
}

export default About;
