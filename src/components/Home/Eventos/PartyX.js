import React, { Component } from "react";
import { db } from "../../Firebase/firebase";
import Error from "../Error/Error";
import EventOnly from "./EventOnly";

export default class PartyX extends Component {
    constructor(props) {
        super(props);
        this.HtmlEventos = this.HtmlEventos.bind(this);

        this.state = {
            evento: []
        };
    }

    componentDidMount() {
        var name = this.props.name;

        db.collection("Eventos")
            .where("isDelete", "==", false)
            .where("name", "==", name)
            .get()
            .then(snapShots => {
                this.setState({
                    evento: snapShots.docs.map(doc => {
                        return { id: doc.id, data: doc.data() };
                    })
                });
            });
    }

    HtmlEventos() {
        const eventos = this.state.evento;

        return (
            <>
                {eventos && eventos !== undefined ? (
                    eventos.map(eventos => (
                        <EventOnly
                            key={eventos.id}
                            name={eventos.data.name}
                            info={eventos.data.info}
                            location={eventos.data.location}
                            date={eventos.data.date}
                            place={eventos.data.place}
                            image={eventos.data.images[1]}
                            artists={eventos.data.artists}
                        />
                    ))
                ) : (
                        <Error></Error>
                    )}
            </>
        );
    }

    render() {
        return <div>{this.HtmlEventos()}</div>;
    }
}