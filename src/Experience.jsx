import React from "react";

const EXPERIENCES = [
    {
        period: 'Dec 2018 - Nov 2021',
        jobTitle: 'Planning Officer III',
        agency: 'Department of Agriculture Planning and Monitoring Service Investment Programming Division',
        description: 'As a senior planning staff'
    },
    {
        period: 'May 2015 - Dec 2018',
        jobTitle: 'Planning Officer II',
        agency: 'National Food Authority',
        description: 'As a junior planning staff'
    },
    {
        period: 'May 2014 - May 2015',
        jobTitle: 'Executive Assistant IV',
        agency: 'Department of Agriculture Office of the Secretary',
        description: ''
    },
    {
        period: 'Jan 2013 - May 2014',
        jobTitle: 'Consultant',
        agency: 'National Food Authority',
        description: 'As a consultant of the NFA Council Chairman, I was in charge of monitoring the status of the rice industry particularly supply and demand, prices, and trade.'
    },
    {
        period: 'Jan 2012 - Dec 2012',
        jobTitle: 'Project Evaluation Assistant II',
        agency: 'Department of Agriculture Office of the Secretary',
        description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.'
    },
    {
        period: 'Jul 2011 - Dec 2011',
        jobTitle: 'Project Development Officer I',
        agency: 'Department of Agriculture Office of the Secretary',
        description: 'Assigned to the Office of the Secretary, I was responsible for gathering, compiling and processing data needed by the Secretary for decision-making'
    }
];

export class Experience extends React.Component {
    render() {
        return (
            <div className="experience" id="experience">
                <div className="container">
                    <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s"
                            style={{ visibility: 'visible', animationDelay: 0.1 + 's', animationName: 'zoomIn'}}>
                        <p>My Resume</p>
                        <h2>Working Experience</h2>
                    </header>
                    <div className="timeline">
                        {
                            EXPERIENCES.map((exp, index) => {
                                return (
                                    <div key={index} className={ 'timeline-item wow slideInLeft ' + (index % 2 > 0 ? 'right' : 'left') } data-wow-delay="0.1s"
                                         style={{ visibility: 'visible', animationDelay: 0.1 + 's', animationName: 'slideInLeft'}}>
                                        <div className="timeline-text">
                                            <div className="timeline-date">{exp.period}</div>
                                            <h2>{exp.jobTitle}</h2>
                                            <h4>{exp.agency}</h4>
                                            <p>{exp.description}</p>
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
}