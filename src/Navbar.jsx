import React, { useEffect, useState } from "react";
import Scrollspy from 'react-scrollspy'

const LINKS = [
    'home',
    'about',
    'service',
    'experience',
    'portfolio',
    'price',
    'blog',
    'contact'
];

export function Navbar() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
        return () => {
            window.removeEventListener('scroll', null);
        }
    }, [])

    return (
        <div className={'navbar navbar-expand-lg bg-light navbar-light ' + (scroll > 0 ? 'navbar-sticky' : '')}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">DevFolio</a>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto d-inline-flex">
                        <Scrollspy items={LINKS} currentClass='active'>
                            {LINKS.map(link => {
                                return <li style={{ listStyleType: 'none' }}><a href={'#' + link} className="nav-item nav-link">{link}</a></li>;
                            })}
                        </Scrollspy>
                    </div>
                </div>
            </div>
        </div>
    );
}