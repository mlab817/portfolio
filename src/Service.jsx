import React from "react";

const services = [
    {
        title: 'Technical Writing',
        description: ''
    },
    {
        title: 'Research',
        description: ''
    },
    {
        title: 'Web Development',
        description: '',
    },
    {
        title: 'Data Analysis',
        description: ''
    }
];

export function Service() {
    return (
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s"
                     style={{ visibility: 'visible', animationDelay: 0.1 + 's', animationName: 'zoomIn' }}>
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div className="row">
                    {
                        services.map((service, key) => {
                            return (
                                <div key={key} className="col-lg-6 wow fadeInUp" style={{ visibility: 'visible', animationDelay: 0, animationName: 'fadeInUp' }}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fa fa-laptop"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>{service.title}</h3>
                                            <p>
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}