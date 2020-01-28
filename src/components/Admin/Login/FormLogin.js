import React, { Component } from "react";
import { auth } from '../../Firebase/firebase';

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  render() {
    return (
      <div>
        <form className="formLogin" onSubmit={this.handleSubmit.bind(this)}>
          <div className="loginInputs">
            <input
              type="email"
              placeholder="Ingrese su email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              required
            />
          </div>
          <div className="loginInputs">
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={this.state.password}
              onChange={this.onPasswordChange.bind(this)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn-form"
            style={{ marginTop: "10px", width: "50%" }}
          >
            Login
          </button>
          {this.state.error && <p style={{ color: "rgb(237, 106, 90)", marginTop: "15px" }}>{this.state.error.message}</p>}
        </form>
      </div>
    );
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  resetForm() {
    this.setState({
      email: "",
      password: "",
      error: null
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        window.location.href = "/andproducciones/admin";
      })
      .catch(error => {
        this.setState({ error });
      });
  }
}

export default FormLogin;
