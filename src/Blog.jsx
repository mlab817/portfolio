import React from "react";
import src from './img/blog-2.jpg';

const style = {
    visibility: 'visible',
    animationDelay: '0.1s',
    animationName: 'fadeInUp'
}

export function Blog() {
    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s"
                     style={style}>
                    <p>From Blog</p>
                    <h2>Latest Articles</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.3s"
                             style={style}>
                            <div className="blog-img">
                                <img src={src} alt="Blog" />
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Apps Design</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat
                                    lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem
                                    ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}