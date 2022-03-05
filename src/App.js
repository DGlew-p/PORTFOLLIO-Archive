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
import { grey } from "@mui/material/colors";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CssBaseline sx={{ bgcolor: grey[100] }} />
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
