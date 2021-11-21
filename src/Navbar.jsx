import React, { useEffect, useState } from "react";

const LINKS = [
    'home',
    'about',
    'service',
    'experience',
    'education',
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
        <div className={'navbar navbar-expand-lg bg-light navbar-light ' + (scroll > 0 ? 'nav-sticky' : '')}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    The Dev Economist
                </a>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto d-inline-flex">
                        {LINKS.map((link, key) => {
                            const label = link[0].toUpperCase() + link.slice(1)
                            return <a key={key} href={'#' + link} className="nav-item nav-link">{label}</a>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}