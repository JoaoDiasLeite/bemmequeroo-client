import React, { Component } from "react";
import Slide from "react-reveal";
//import Zmage from "react-zmage";

//let id = 0;
class Resume extends Component {
 
  
  

  render() {
    if (!this.props.data) return null;

    
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
         
          <p>{education.description}</p>
        </div>
      );
    });

    return (
      <section id="projeto">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Projeto</span>
              </h1>
              
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
