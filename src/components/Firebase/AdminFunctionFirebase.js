import React, { Component } from "react";
import { auth } from "../Firebase/firebase";
import EditArtist from "../Admin/Artistas/EditArtistX";

export default class FunctionAuth2 extends Component {
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
                    ? <EditArtist></EditArtist>
                    : (window.location.href = "/login")}
            </div>
        );
    }
}
