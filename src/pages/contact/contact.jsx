import React from "react";

import EmailGood from "../../components/emailMsg/emailgood";
import EmailBad from "../../components/emailMsg/emailbad";
import EmailDefault from "../../components/emailMsg/emaildefault";
import axios from "axios";
import {
  Button,
  TextField,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

const enomObj = {
  true: <EmailGood />,
  false: <EmailBad />,
  null: <EmailDefault />,
};

function Enum({ state }) {
  return <div>{enomObj[state]}</div>;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      email: "",
      loading: false,
      errorCount: null,
      hideDialog: true,
      emailSuccess: null,

      errors: {
        name: "Enter your name",
        email: "Enter a valid Email",
        message: "Please leave a message",
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
      url: "/send",
      data: {
        name: this.state.name,
        email: this.state.email,
        messageHtml: this.state.message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        this.emailSuccess();
        this.resetForm();
      } else if (response.data.msg === "fail") {
        this.emailBad();
        this.resetForm();
      }
    });
  };

  handleChange(event) {
    event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    let { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length < 5 ? "Enter your name" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Enter a valid Email";
        break;
      case "message":
        errors.message =
          value.length < 5 ? "Please leave a longer message" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    let countErrors = (errors) => {
      let count = 0;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count + 1)
      );
      return count;
    };

    this.setState({
      errorCount: countErrors(this.state.errors),
      emailSuccess: null,
    });
  }

  emailSuccess() {
    this.setState({
      loading: false,
      emailSuccess: true,
    });
  }
  emailBad() {
    this.setState({
      loading: false,
      emailSuccess: false,
    });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      loading: false,
      errorCount: null,
      errors: {
        name: "Enter your name",
        email: "Enter a valid Email",
        message: "Please leave a message",
      },
    });
  }

  ifLoading() {
    let { errors } = this.state;

    if (this.state.loading) {
      return (
        <Box
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress sx={{ m: 20 }} color="primary"></CircularProgress>
        </Box>
      );
    } else
      return (
        <>
          <form className="mailing">
            <Box
              display="flex"
              sx={{ flexDirection: "column" }}
              height="100%"
              width="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Typography component="div">
                <Enum state={this.state.emailSuccess}></Enum>
              </Typography>

              <TextField
                className="textarea"
                style={{ padding: 1, margin: 15 }}
                sx={{ width: "30%", minWidth: 300, color: "info.dark" }}
                name="name"
                placeholder="Name"
                maxLength="30"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />

              {errors.name.length > 0 ? (
                <Typography
                  variant="h8"
                  sx={{ color: "warning.main" }}
                  className="error"
                >
                  {errors.name}
                </Typography>
              ) : (
                <br />
              )}

              <TextField
                style={{ padding: 1, margin: 15 }}
                sx={{ width: "30%", minWidth: 300 }}
                name="email"
                placeholder="Email"
                maxLength="30"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />

              {errors.email.length > 0 ? (
                <Typography
                  variant="h8"
                  sx={{ color: "warning.main" }}
                  className="error"
                >
                  {errors.email}
                </Typography>
              ) : (
                <br />
              )}

              <TextField
                sx={{ width: "30%", minWidth: 300, color: "info.dark" }}
                multiline
                id="filled-multiline-static"
                rows={4}
                style={{ padding: 1, margin: 15 }}
                name="message"
                placeholder="Message"
                maxLength="500"
                required
                value={this.state.message}
                onChange={this.handleChange}
              />

              {errors.message.length > 0 ? (
                <Typography
                  variant="h8"
                  sx={{ color: "warning.main" }}
                  className="error"
                >
                  {errors.message}
                </Typography>
              ) : (
                <br />
              )}

              {this.state.errorCount === 0 ? (
                <Button
                  isactive="false"
                  sx={{ width: "30%", minWidth: 300, color: "primary" }}
                  style={{ padding: 1, margin: 15 }}
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
                  style={{ padding: 1, margin: 15 }}
                  sx={{ width: "10%" }}
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
            </Box>
          </form>
        </>
      );
  }

  render() {
    return this.ifLoading();
  }
}
