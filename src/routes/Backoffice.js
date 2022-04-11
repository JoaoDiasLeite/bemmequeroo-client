import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Login from "../Components/Backoffice/Login.js";

class Backoffice extends Component {
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
        <Login />
      </div>
      
    );
  }
}

export default Backoffice;
