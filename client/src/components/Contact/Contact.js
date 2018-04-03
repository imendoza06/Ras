import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import './Contact.css';

import Logowhite from "../Images/LogoWhite.png";
import Logo from "../Images/Logo.png";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", issue: "", comment: "", faq: "Choose A Question" }
  };

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
    const questions = ["Choose A Question", "What Is RAS?", "What Can I Do As A Host?", "What Can I Do As A User?", "Do I Have To Pay To Use Your Services?"];
    var answer = "";
    if (faq !== "Choose A Question") {
      if (faq === "What Is RAS?") {
        answer = "RAS, which stands for Rent A Studio, is a marketplace where users can find different types of studios and book then as well as a system that hosts can use to list their studio spaces."
      }
      else if (faq === "What Can I Do As A Host?") {
        answer = "A host can list their studio spaces and keep track of all the people who are booking them. Times in which the studio spaces are available can be editted."
      }
      else if (faq === "What Can I Do As A User?") {
        answer = "A user can look for studios by name or address and book seamlessly."
      }
      else if (faq === "Do I Have To Pay To Use Your Services?") {
        answer = "Whether you are a user or a host, RAS is free to use. The only payment would be when a user books a studio, there will be a 3% commission."
      }
    }

    return <div id="cbacker">
      {this.props.isLogged ?
        [
          (this.props.protype === "User"
            ?
            <div id="topbar">
              <div id="barlogo">
                <Link to={`/`}>
                  <img src={Logowhite} />
                </Link>
              </div>
              <Link to={`/logout`}>
                <a class="hoverturn">
                  <span data-title="Log Out">Log Out</span>
                </a>
              </Link>
              <Link to={`/userprofile`}>
                <a class="hoverturn">
                  <span data-title="My Account">My Account</span>
                </a>
              </Link>
            </div>
            : <div id="topbar">
              <div id="barlogo">
                <Link to={`/`}>
                  <img src={Logowhite} />
                </Link>
              </div>
              <Link to={`/logout`}>
                <a class="hoverturn">
                  <span data-title="Log Out">Log Out</span>
                </a>
              </Link>
              <Link to={`/hostprofile`}>
                <a class="hoverturn">
                  <span data-title="My Account">My Account</span>
                </a>
              </Link>
            </div>
          )
        ]
        :
        <div id="topbar">
          <div id="barlogo">
            <Link to={`/`}>
              <img src={Logowhite} />
            </Link>
          </div>
          <Link to={`/login`}>
            <a class="hoverturn">
              <span data-title="Log In">Log In</span>
            </a>
          </Link>
          <Link to={`/signup`}>
            <a class="hoverturn">
              <span data-title="Sign Up">Sign Up</span>
            </a>
          </Link>
        </div>
      }
      <div id="ccontent">
        <div id="faq">
          <h1> Frequenty Asked Questions </h1>
          <h3>
            {" "}
            Looking For An Answer To Your Questions?
                </h3>
          <select onChange={this.handleFaqChange}>
            {questions.map(question => (
              <option value={question}>{question}</option>
            ))}
          </select>
          <br />
          {faq !== "Choose A Question" ? <div>
            <p>{answer}</p>
          </div> : ""}
        </div>
        <div id="contact">
          <h1> Contact Us! </h1>
          <form onSubmit={this.submitForm}>
            <label>
              <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleNameInput} />
            </label>
            <br />
            <label>
              <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleEmailInput} />
            </label>
            <br />
            <select onChange={this.handleIssueChange}>
              {issues.map(category => (
                <option value={category}>{category}</option>
              ))}
            </select>
            <br />
            <textarea rows="2" cols="10" name="comment" placeholder="Comments" value={comment} onChange={this.handleCommentInput} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div id="footer">
        <Link to={`/about`}>
          <a class="hoverturn">
            <span data-title="About Us">About Us</span>
          </a>
        </Link>
        <p>RAS @ 2018</p>
      </div>
    </div>;
  }
}

export default Contact;