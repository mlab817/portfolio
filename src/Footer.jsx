import React from "react";

const style = {
    visibility: 'visible',
    animationDelay: 0.3,
    animationName: 'fadeIn'
}

const me = {
    name: 'Mark Lester Bolotaolo',
    address: '23 Molave Street Quirino 3A Quezon City Philippines 1102',
    phoneNumber: '+63956 268 8184',
    email: 'mlab817@gmail.com',
    siteName: 'The Dev Economist'
}

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer wow fadeIn" data-wow-delay="0.3s"
                 style={style}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="footer-info">
                            <h2>{me.name}</h2>
                            <h3>{me.address}</h3>
                            <div className="footer-menu">
                                <p>{me.phoneNumber}</p>
                                <p>{me.email}</p>
                            </div>
                            <div className="footer-social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-youtube"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="container copyright">
                        <p>© <a href="#">{me.siteName}</a>, All Right Reserved | Designed By <a
                            href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        );
    }
}