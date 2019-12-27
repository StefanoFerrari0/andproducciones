import React, { Component } from "react";

class FormContact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
  render() {
   return(
    <div className="container-form clearfix visible-xs row col-xs-1 col-sm-12 col-md-12 col-lg-12 align-items-start" style={{margin: 'auto'}}>
       <div className="background-form col-xs-1 col-sm-10 col-md-10 col-lg-9 text-center">
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <input type="text" placeholder="Nombre" className="form-name col-xs-2 col-sm-8 col-md-8 col-lg-7" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <input type="email" placeholder="Email" className="form-inputs col-xs-3 col-sm-8 col-md-8 col-lg-7" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <textarea placeholder="Escribe tu mensaje..."  className="form-textarea col-xs-3 col-sm-10 col-md-9 col-lg-8" cols="50" rows="8" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn-form">Enviar</button>
      </form>
      </div>
    </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    async handleSubmit(event) {
      event.preventDefault();

      const { name, email, message } = this.state;


    }
  }
  
  export default FormContact;