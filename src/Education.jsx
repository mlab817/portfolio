import React from "react";

const EDUCATION = [
    {
        level: 'Graduate',
        course: 'Master in Development Economics',
        school: 'University of the Philippines Diliman',
        inclusivePeriod: '2016 - 2021',
        awards: ''
    },
    {
        level: 'Undergraduate',
        course: 'BS in Agricultural Economics',
        school: 'University of the Philippines Los Banos',
        inclusivePeriod: '2007 - 2011',
        awards: 'Cum Laude'
    },
    {
        level: 'High School',
        course: '',
        school: 'Tarlac College of Agriculture',
        inclusivePeriod: '2003 - 2007',
        awards: 'Salutatorian'
    },
    {
        level: 'Primary',
        course: '',
        school: 'Malacampa Elementary School',
        inclusivePeriod: '1997 - 2003',
        awards: 'Valedictorian'
    },
];

export function Education() {
    return (
        <div className="service" id="education">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s"
                        style={{ visibility: 'visible', animationDelay: 0.1 + 's', animationName: 'zoomIn'}}>
                    <p>My Resume</p>
                    <h2>Education</h2>
                </header>
                <div className="row">
                    {
                        EDUCATION.map((educ, key) => {
                            return (
                                <div className="col-lg-6 fadeInUp" key={key}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className="fa fa-laptop"></i>
                                        </div>
                                        <div className="service-text">
                                            <h3>{educ.level}</h3>
                                            <h4>{educ.course}</h4>
                                            <p>{educ.school}</p>
                                            <p>
                                                {educ.inclusivePeriod}
                                            </p>
                                            {
                                                educ.awards && <p>
                                                    <i className="fas fa-award mr-2"></i>
                                                    {educ.awards}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}