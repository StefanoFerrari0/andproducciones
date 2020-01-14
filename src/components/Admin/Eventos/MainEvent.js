import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/firebase';
import SignOut from "../Login/SignOut"

export default class AdminArtist extends Component {
    constructor(props) {
        super(props);
        this.HtmlEventos = this.HtmlEventos.bind(this);

        this.state = {
            eventos: [],
        };
    }

    componentDidMount() {
        db.collection('Eventos')
            .where('isDelete', '==', false)
            .orderBy('place', 'desc')
            .get()
            .then(snapShots => {
                this.setState({
                    eventos: snapShots.docs.map(doc => {
                        return { id: doc.id, data: doc.data() };
                    }),
                });
            });
    }

    delete(id, nombre, fecha, informacion, localizacion, lugar, imagenes, artistas) {

        if (window.confirm("¿Está seguro que desea eliminar el evento " + nombre + "?")) {
            const updateRef = db.collection('Eventos').doc(id);
            updateRef.set({
                isDelete: true,
                name: nombre,
                date: fecha,
                info: informacion,
                location: localizacion,
                place: lugar,
                images: imagenes,
                artists: artistas
            }).then(
                window.location.replace("/admin/eventos")
            ).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
    }


    HtmlEventos() {
        const eventos = this.state.eventos;

        return (
            <>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-body">
                                <table className="table table-hover table-responsive table-dark">
                                    <thead>
                                        <tr>
                                            <td colSpan="4"><SignOut></SignOut></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" align="center" text-size="25px">
                                                <Link style={{ width: '500px' }} className="btn btn-success"
                                                    to={`/admin/nuevoEvento`}>Nuevo evento</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th>Orden</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventos && eventos !== undefined
                                            ? eventos.map(eventos => (
                                                <tr key={eventos.id}>
                                                    <th scope="row">{eventos.data.date} - {eventos.data.name}</th>
                                                    <td>{eventos.data.place}</td>
                                                    <td>
                                                        <Link className="btn btn-primary"
                                                            to={`/admin/eventos/${eventos.id}`}>Editar
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <button onClick={this.delete.bind(this, eventos.id,
                                                            eventos.data.name, eventos.data.date, eventos.data.info,
                                                            eventos.data.location, eventos.data.place,
                                                            eventos.data.images, eventos.data.artists)}
                                                            className="btn-form" style={{ width: '140px' }}>
                                                            Borrar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                            : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }

    render() {
        return <div>{this.HtmlEventos()}</div>;
    }
}