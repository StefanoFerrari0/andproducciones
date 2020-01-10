import React from "react";
import { auth } from "../Firebase/firebase";

export default function SignOut() {
    return <div className="signOut" align="end" style={{ paddingRight: "50px", paddingTop: "20px" }}>
        <button className="btn btn-danger" align="end"
            onClick={function SignOut() {
                auth.signOut().then(function () { }).catch(function (error) { });
            }}>Cerrar sesión</button>
    </div>
}