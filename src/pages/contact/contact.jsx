import React from "react";
import "./contact.css";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form className="mailing">
        <h1>Please Get In Touch</h1>
        <div>
          <input
            name="name"
            placeholder="Name"
            maxLength="30"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            maxLength="30"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            name="message"
            placeholder="Message"
            maxLength="500"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <br />
        </div>
        <input
          type="button"
          value="Submit"
          className="btn btn--submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }

  handleSubmit() {
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: this.state.name,
        email: this.state.email,
        messageHtml: this.state.message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email Received, Thank you!");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
}
