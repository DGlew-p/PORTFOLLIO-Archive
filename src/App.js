import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Contact from "./pages/contact/contact";
import Skills from "./pages/skills/skills";
import Portfolio from "./pages/portfolio/portfolio";
import About from "./pages/about/about";
import Footer from "./components/footer/footer";
import { CssBaseline } from "@mui/material";

class App extends React.Component {
  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    const { ...other } = this.props;
    return (
      <div className="App">
        <CssBaseline />
        <Header />

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
