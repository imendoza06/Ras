import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './Contact.css';
import Logo from "../Images/Logo.png";


class Contact extends React.Component {
    state = { name: "", email: "", issue: "", comment: "", faq: "" };

    handleNameInput = e => {
        this.setState({
            name: e.target.value
        });
    };
    handleEmailInput = e => {
        this.setState({
            email: e.target.value
        });
    };
    handleIssueChange = e => {
        this.setState({
            issue: e.target.value
        });
    };
    handleCommentInput = e => {
        this.setState({
            comment: e.target.value
        });
    };
    handleFaqChange = e => {
        this.setState({
            faq: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();

    };

    render() {
        const { name, email, issue, comment, faq } = this.state;
        const issues = ["", "Payment", "Booking", "Cancelation"];
        const questions = ["", "How does RAS work?"];
        return (
            <div id="cbacker">
                <div id="topbar">
                    <Link to={`/login`}><a class="hoverturn"><span data-title="Log In">Log In</span></a></Link>
                    <Link to={`/signup`}><a class="hoverturn"><span data-title="Sign Up">Sign Up</span></a></Link>
                </div>
                <div id="faq">
                    <h1> Frequenty Asked Questions </h1>
                    <h3> Click Below And You May Find The Answer To Your Problem</h3>
                    <select onChange={this.handleFaqChange}>
                        {questions.map(question => (
                            <option value={question}>{question}</option>
                        ))}
                    </select>
                    <br></br>
                    {faq !== "" ? (
                        <div>
                            <p> RAS is a simple booking system for studios. ETC ETC </p>
                        </div>
                    ) : (
                            ""
                        )}
                </div>
                <div id="contact">
                    <h1> Contact Us! </h1>
                    <form onSubmit={this.submitForm}>
                        <label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={this.handleNameInput}
                            />
                        </label>
                        <br></br>
                        <label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={this.handleEmailInput}
                            />
                        </label>
                        <br></br>
                        <select onChange={this.handleIssueChange}>
                            {issues.map(category => (
                                <option value={category}>{category}</option>
                            ))}
                        </select>
                        <br></br>
                        <textarea
                            rows="2"
                            cols="10"
                            name="comment"
                            placeholder="Comments"
                            value={comment}
                            onChange={this.handleCommentInput}>
                        </textarea>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div id="footer">
                    <Link to={`/about`}><a class="hoverturn"><span data-title="About Us">About Us</span></a></Link>
                    <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                    <p>RAS @ 2018</p>
                </div>
            </div>
        );
    }
}

export default Contact;