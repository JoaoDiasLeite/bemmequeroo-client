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
      contactFile: null, 
      picturePreview: ""
    };
    
  }
 


  handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({
      [e.target.name]: e.target.value
    });
  };
    fileSelectedHandler = (e) => {
    this.setState({
        /* contains the preview, if you want to show the picture to the user
           you can access it with this.state.currentPicture
       */
        picturePreview : URL.createObjectURL(e.target.files[0]),
        /* this contains the file we want to send */
        contactFile : e.target.files[0]
    })
};

  
  handleSubmit = (e) => {
    e.preventDefault();
    
    
    const formData = new FormData();
    formData.append(
        "file",
        this.state.contactFile, this.state.contactFile.name
    );
    console.log(this.state)
    const {contactName, contactEmail, contactSubject, contactMessage, contactFile, picturePreview} = this.state;

    const form = {
      contactName, 
      contactEmail, 
      contactSubject, 
      contactMessage,
      contactFile,
      picturePreview
      
    };
    
  
    
      alert('Pedido enviado' );
      axios.post('http://localhost:5000/sendData', form)
      .then(() => console.log('Form submited'))
      .catch(err =>{
        console.error(err);
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
                      onChange={this.fileSelectedHandler}
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