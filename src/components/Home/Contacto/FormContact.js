import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import Recaptcha from "react-recaptcha";

class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      isVerified: false
    };
  }

  render() {
    return (
      <>
        <div className="container-form clearfix visible-xs row col-xs-5 col-sm-12 col-md-12 col-lg-12 align-items-start">
          <div className="background-form visible-xs  col-xs-5 col-sm-10 col-md-10 col-lg-9 text-center">
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="form-name col-xs-2 col-sm-8 col-md-8 col-lg-7"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-inputs col-xs-3 col-sm-8 col-md-8 col-lg-7"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Escribe tu mensaje..."
                  className="form-textarea col-xs-3 col-sm-10 col-md-9 col-lg-8"
                  cols="50"
                  rows="8"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
              <button type="submit" className="btn-form">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="Recaptcha" align="center">
          <Recaptcha
            sitekey="6Lfj48oUAAAAAGTY6E2raDxVQ-4VVnwK6lNGmvqe"
            render="explicit"
            theme="dark"
            verifyCallback={this.verifyCallback.bind(this)}
            onloadCallback={this.onloadCallback.bind(this)}
          />
        </div>
      </>
    );
  }

  onloadCallback() { }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    if (this.state.isVerified) {
      e.preventDefault();

      const { name, email, subject, message } = this.state;
      let templateParams = {
        from_name: email,
        to_name: name,
        subject: subject,
        message_html: message
      };
      emailjs.send(
        "gmail",
        "template_qBzVwmkI",
        templateParams,
        "user_6E624nJJ12aNo0E96S6VJ"
      );
      this.resetForm();
    } else {
      e.preventDefault();
      alert("Por favor, verifica que eres humano!");
    }
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      isVerified: false
    });
  }
}

export default FormContact;
