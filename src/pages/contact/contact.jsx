import React from "react";
import "./contact.css";
import axios from "axios";
import { Button, TextField, CircularProgress } from "@mui/material";
import {} from "@mui/base";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      loading: false,
      errorCount: null,
      errors: {
        name: "Please enter your name!",
        email: "Please enter a valid Email!",
        message: "Please leave me a message!",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    this.setState({
      loading: true,
    });

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
        this.setState({
          loading: false,
        });
        alert("Email Received, Thank you!");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  };

  handleChange(event) {
    event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length < 5 ? "Please enter your name!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Please enter a valid Email!";
        break;
      case "message":
        errors.message = value.length < 5 ? "Please leave me a message!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    const countErrors = (errors) => {
      let count = 0;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count + 1)
      );
      return count;
    };

    this.setState({ errorCount: countErrors(this.state.errors) });
  }

  ifLoading() {
    const { errors } = this.state;

    if (this.state.loading) {
      return (
        <div>
          <CircularProgress color="inherit"></CircularProgress>
        </div>
      );
    } else
      return (
        <div>
          <form className="mailing">
            {/* <h1>Please Get In Touch</h1> */}
            <div>
              <TextField
                style={{ width: 250, padding: 5, margin: 5 }}
                name="name"
                placeholder="Name"
                maxLength="30"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              {errors.name.length > 0 ? (
                <span className="error">{errors.name}</span>
              ) : (
                <span></span>
              )}
              <br />
              <TextField
                style={{ width: 250, padding: 5, margin: 5 }}
                name="email"
                placeholder="Email"
                maxLength="30"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              <span className="error">{errors.email}</span>
              <br />
              <TextField
                multiline
                id="filled-multiline-static"
                rows={4}
                style={{ width: 250, padding: 5, margin: 5 }}
                name="message"
                placeholder="Message"
                maxLength="500"
                required
                value={this.state.message}
                onChange={this.handleChange}
              />
              <br />
              <span className="error">{errors.message}</span>
              <br />
            </div>

            {this.state.errorCount === 0 ? (
              <Button
                style={{ padding: 5, margin: 5 }}
                variant="contained"
                type="button"
                value="Submit"
                className="btn btn--submit"
                onClick={this.handleSubmit}
              >
                SEND
              </Button>
            ) : (
              <Button
                style={{ padding: 5, margin: 5 }}
                variant="contained"
                type="button"
                value="Submit"
                className="btn btn--submit"
                disabled
                onClick={this.handleSubmit}
              >
                SEND
              </Button>
            )}
          </form>
          <br />
        </div>
      );
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      loading: false,
      errorCount: null,
      errors: {
        name: "Please enter your name!",
        email: "Please enter a valid Email!",
        message: "Please leave me a message!",
      },
    });
  }

  render() {
    return this.ifLoading();
  }
}
