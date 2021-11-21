import React from "react";
import hero from './img/hero.png';

export class Hero extends React.Component {
    render() {
        return (
            <div className="hero" id="home">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text">
                                    <p>I'm</p>
                                    <h1>Mark Lester Bolotaolo</h1>
                                    <h2></h2>
                                    <div className="typed-text">
                                        Web Designer, Web Developer, Front End Developer, Apps
                                        Designer, Apps Developer
                                    </div>
                                </div>
                                <div className="hero-btn">
                                    <a className="btn" href="">Hire Me</a>
                                    <a className="btn" href="#contact">Contact Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src={hero} alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}