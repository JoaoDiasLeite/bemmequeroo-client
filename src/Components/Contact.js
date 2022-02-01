import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      contactFile: "", 
      picturePreview: "",
    };
    
  }
 


  handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    if(e.target.name === "contactFile"){
      this.setState({
        [e.target.name]: e.target.files[0],
        picturePreview : URL.createObjectURL(e.target.files[0])
      });
    }
    else {this.setState({
      [e.target.name]: e.target.value
      });
    }
  };
  
  // fileSelectedHandler = (e) => {
  //     const img = {
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       data: e.target.files[0],
  //     }
  //     setImage(img)
  //   }


  send(campos){
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    axios.post('https://bemmequero-api.herokuapp.com/sendData', 
              formData,
              {
                headers: {
                  "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                }
              },{withCredentials:true})
      .then(alert('Pedido enviado' ), response => { console.log(response.data); })
      .catch(err =>{
        console.error(err);
      });   
  }
  
  handleSubmit = async(e) => {
    e.preventDefault();

    const {contactName, contactEmail, contactSubject, contactMessage, contactFile, picturePreview} = this.state;
    const campos = {
      contactName, 
      contactEmail, 
      contactSubject, 
      contactMessage,
      contactFile
    }; 
    this.send(campos)
    this.setState({ 
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      contactFile: "", 
      picturePreview: "",
    });
  };
    



  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const insta = this.props.data.insta;

    const email = this.props.data.email;
    const phone = this.props.data.phone;
    
    const header = this.props.data.contactHeader;

    return (
      <section id="contactos">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            

            <div className="ten columns">
              <h2>{header}</h2>
              <p className="lead">
Queres fazer uma encomenda ou pedir um orçamento? É super simples!<br/><br/>
1) escolhe o tipo artigo que queres<br/>
• Bordado em bastidor (20cm - 20 🌼; varia consoante o tamanho e os elementos do bordado)<br/>
• Bordado em tela de pintura (varia consoante o tamanho)<br/>
• Totebag (13 🌼)<br/>
• T-shirt (13 🌼)<br/>
• Personalização de artigos pessoais<br/><br/>
2) Descreve-me a tua ideia! (da forma mais pormenorizada que conseguires)<br/><br/>
3) Faz upload de imagens referência<br/><br/></p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form  id="contactForm" name="contactForm" nctype="multipart/form-data"  onSubmit={this.handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Nome <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Assunto</label>
                    <input
                      type="text"
                      defaultValue=""
                      
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                     Encomenda <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="contactFile">Referência</label>
                    <input
                      type="file"
                      defaultValue=""
                      accept="image/*"
                      size="35"
                      id="contactFile"
                      name="contactFile"
                      onChange={this.handleChange}
                    />
                    <img alt="" class="preview-encomenda" src={this.state.picturePreview}/>
                  </div>
                  
                  <div>
                    <button className="submit" type="submit">Encomendar</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contactos</h4>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{email}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{insta}</span>
                </p>
              </div>

             
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;