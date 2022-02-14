import React from "react";
import axios from "axios";
import {
  Button,
  TextField,
  CircularProgress,
  Box,
  Card,
  Paper,
  Dialog,
} from "@mui/material";
import { minWidth } from "@mui/system";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.dialogClose = () => {
      this.setState({ hideDialog: false });
    };
    this.onOverlayClick = () => {
      this.setState({ hideDialog: false });
    };
    this.state = {
      name: "",
      message: "",
      email: "",
      loading: false,
      errorCount: null,
      hideDialog: true,
      errors: {
        name: "Enter your name",
        email: "Enter a valid Email",
        message: "Please leave a message",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick() {
    this.setState({ hideDialog: true });
    this.resetForm();
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
        // this.setState({ hideDialog: false, });
        this.setState({
          hideDialog: false,
          loading: false,
        });
      } else if (response.data.msg === "fail") {
        this.setState({
          loading: false,
          hideDialog: false,
        });
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
        <Box>
          <CircularProgress
            color="inherit"
            style={{ padding: 1, margin: 300 }}
          ></CircularProgress>
        </Box>
      );
    } else
      return (
        <>
          <Dialog
            width="250px"
            isModal={true}
            target="#dialog-target"
            visible={this.state.hideDialog}
            close={this.dialogClose}
            overlayClick={this.onOverlayClick}
          >
            This is a modal Dialog
          </Dialog>
          <Box
            display="flex"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              style={{ padding: 2, margin: 40, minWidth: 250 }}
              sx={{ width: "50%" }}
            >
              <form className="mailing">
                <Box
                  display="flex"
                  sx={{ flexDirection: "column" }}
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <h1>Get In Touch</h1>

                  <TextField
                    className="textarea"
                    style={{ padding: 1, margin: 20 }}
                    sx={{ width: "60%" }}
                    name="name"
                    placeholder="Name"
                    maxLength="30"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />

                  {errors.name.length > 0 ? (
                    <span className="error">{errors.name}</span>
                  ) : (
                    <br />
                  )}

                  <TextField
                    style={{ padding: 1, margin: 20 }}
                    sx={{ width: "60%" }}
                    name="email"
                    placeholder="Email"
                    maxLength="30"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />

                  {errors.email.length > 0 ? (
                    <span className="error">{errors.email}</span>
                  ) : (
                    <br />
                  )}

                  <TextField
                    sx={{ width: "60%" }}
                    multiline
                    id="filled-multiline-static"
                    rows={4}
                    style={{ padding: 1, margin: 20 }}
                    name="message"
                    placeholder="Message"
                    maxLength="500"
                    required
                    value={this.state.message}
                    onChange={this.handleChange}
                  />

                  {errors.message.length > 0 ? (
                    <span className="error">{errors.message}</span>
                  ) : (
                    <br />
                  )}

                  {this.state.errorCount === 0 ? (
                    <Button
                      isActive="false"
                      sx={{ width: "30%", color: "primary" }}
                      style={{ padding: 1, margin: 20 }}
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
                      style={{ padding: 1, margin: 20 }}
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
            </Paper>
          </Box>
        </>
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
        name: "Enter your name",
        email: "Enter a valid Email",
        message: "Please leave a message",
      },
    });
  }

  render() {
    return this.ifLoading();
  }
}
