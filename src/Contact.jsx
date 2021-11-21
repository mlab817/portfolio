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
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state));
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
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
                                    <form onSubmit={this.handleSubmit} id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <input value={this.state.name} type="text" className="form-control" id="name"
                                                   onChange={this.handleInput}
                                                   placeholder="Your Name"
                                                   name="name"
                                                   required="required"/>
                                                <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <input value={this.state.email}
                                                   onChange={this.handleInput}
                                                   name="email"
                                                   type="email"
                                                   className="form-control"
                                                   placeholder="Your Email"
                                                   required="required" />
                                                <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <input
                                                value={this.state.subject}
                                                onChange={this.handleInput}
                                                name="subject"
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                required="required" />
                                                <p className="help-block"></p>
                                        </div>
                                        <div className="control-group">
                                            <textarea
                                                style={{ resize: 'none' }}
                                                value={this.state.message}
                                                onChange={this.handleInput}
                                                name="message"
                                                className="form-control"
                                                placeholder="Message"
                                                required="required"></textarea>
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