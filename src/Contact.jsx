import React from "react";

const style = {
    visibility: 'visible',
    animationDelay: '0.1s',
    animationName: 'fadeInUp'
}

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            ...this.state.newMessage
        })
    }

    render() {
        return (
            <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact"
                 style={style}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                <div className="contact-form">
                                    <div id="success"></div>
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <input type="text" className="form-control" id="name"
                                                   placeholder="Your Name" required="required"
                                                   data-validation-required-message="Please enter your name" />
                                                <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Your Email" required="required"
                                                   data-validation-required-message="Please enter your email" />
                                                <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <input
                                                value={this.state.subject}
                                                onChange={this.handleInput}
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Subject"
                                                required="required"
                                                data-validation-required-message="Please enter a subject" />
                                                <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                placeholder="Message"
                                                required="required"
                                                data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block"></p>
                                        </div>
                                        <div>
                                            <button className="btn" type="submit" id="sendMessageButton">Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}