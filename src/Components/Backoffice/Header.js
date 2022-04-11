import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  



  render() {
    if (!this.props.data) return null;

    
    //const name = this.props.data.brandname;
    // const description = this.props.data.description;
    
    return (
      <header id="home">
        
        <ParticlesBg    type="square" bg={true} />
   
       
        <nav id="nav-wrap">
        
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#current" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Início
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#projeto">
                O Projeto
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#sobre">
                Sobre Mim
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfólio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contactos">
                Contactos
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
           
            <Fade bottom> 
            <img className="responsive-headline" alt="Bem Me Quero" src="images/logo.jpg"></img>
             
            </Fade>
            <Fade bottom duration={1200}>
            
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#projeto">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
      
    );
  }
}

export default Header;
