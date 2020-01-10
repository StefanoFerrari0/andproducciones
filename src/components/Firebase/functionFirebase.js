import React, { Component } from "react";
import { auth } from "../Firebase/firebase";

export default class FunctionAuth extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.authListener = this.authListener.bind(this);
  }

  authListener() {
    auth.onAuthStateChanged(usuario => {
      if (this._isMounted) {
        if (usuario) {
          this.setState({ user: usuario });
        } else {
          this.setState({ user: null });
        }
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.authListener();
  }
  render() {
    return (
      <div>
        {this.state.user
          ? this.props.component
          : (window.location.href = "/login")}
      </div>
    );
  }
}
