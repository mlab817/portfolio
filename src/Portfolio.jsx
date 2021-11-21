import React from "react";

const style = {
    visibility: 'visible',
    animationDelay: '0.1s',
    animationName: 'zoomIn'
}

const cardStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    visibility: 'visible',
    animationDelay: 0.2,
    animationName: 'fadeInUp',
    display: 'none'
}

export function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s"
                     style={style}>
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li className="">All</li>
                            <li className="">Web Design</li>
                            <li className="">Mobile Apps</li>
                            <li className="filter-active">Game Dev</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" style={{ position: 'relative', height: 322 }}>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
                         data-wow-delay="0.0s"
                         style={cardStyle}>
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-1.jpg" alt="Image" />
                            </div>
                            <div className="portfolio-text">
                                <h3>eCommerce Website</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}