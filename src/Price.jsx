import React from "react";

const style = {
    visibility: 'visible',
    animationDelay: '0.1s',
    animationName: 'zoomIn'
}

export class Price extends React.Component {
    render() {
        return (
            <div className="banner wow zoomIn" data-wow-delay="0.1s"
                 style={style}>
                <div className="container">
                    <div className="section-header text-center">
                        <p>Reasonable Price</p>
                        <h2>Get A <span>Special</span> Price</h2>
                    </div>
                    <div className="container banner-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur
                            facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                            viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                        </p>
                        <a className="btn">Pricing Plan</a>
                    </div>
                </div>
            </div>
        );
    }
}