import React, {useRef, useEffect} from "react";
import Typed from "typed.js";
import hero from './img/hero.png';

export function Hero() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Economist',
                'Planner',
                'Data Scientist',
                'Web Developer',
                'Front End Developer'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }

        typed.current = new Typed(el.current, options)

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Lester Bolotaolo</h1>
                                <h2 ref={el}></h2>
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