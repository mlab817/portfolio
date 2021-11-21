import React, { useEffect, useState} from "react";

export function BackToTop() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
        return () => {
            window.removeEventListener('scroll', null);
        }
    }, [])

    function handleClick(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return scroll > 200
            ? <a href="#" className="btn back-to-top" onClick={handleClick}>
                <i className="fa fa-chevron-up"></i>
            </a>
            : <></>;
}