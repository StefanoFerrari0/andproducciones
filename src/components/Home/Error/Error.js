import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <header className="ErrorHeader">

            <div className="ErrorBanner">
                <h1>Oops...</h1>
                <div />
                <p>ERROR 404: La página que intentaste acceder no existe</p>

                <Link to="/andproducciones/" className="btn btn-form" style={{ width: "200px", }}>
                    Volver a la página principal
            </Link>
            </div>
        </header>
    );
}

export default Error;