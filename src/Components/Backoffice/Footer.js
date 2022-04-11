import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div class="footer-link padding-top--24">
              <span>Don't have an account? <a href="">Sign up</a></span>
                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a href="#">© Stackfindover</a></span>
                  <span><a href="#">Contact</a></span>
                  <span><a href="#">Privacy & terms</a></span>
              </div>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
