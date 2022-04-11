import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Frontoffice/Header.js";
import Footer from "./Components/Frontoffice/Footer.js";
import About from "./Components/Frontoffice/About.js";
import Resume from "./Components/Frontoffice/Resume.js";
import Contact from "./Components/Frontoffice/Contact.js";
import Portfolio from "./Components/Frontoffice/Portfolio.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      apiResponse: "",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

 

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <About data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
      
    );
  }
}

export default App;
