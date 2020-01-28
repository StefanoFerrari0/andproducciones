import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/firebase';
import SignOut from "../Login/SignOut"

export default class AdminArtist extends Component {
  constructor(props) {
    super(props);
    this.HtmlArtistas = this.HtmlArtistas.bind(this);

    this.state = {
      artistas: [],
    };
  }

  componentDidMount() {
    db.collection('Artistas')
      .where('isDelete', '==', false)
      .orderBy('name', 'asc')
      .get()
      .then(snapShots => {
        this.setState({
          artistas: snapShots.docs.map(doc => {
            return { id: doc.id, data: doc.data() };
          }),
        });
      });
  }

  delete(id, nombre, resident, biografia, linkSC, linkIG, linkSpotify, userSC, imagenes) {

    if (window.confirm("¿Está seguro que desea eliminar a " + nombre + "?")) {
      const updateRef = db.collection('Artistas').doc(id);
      updateRef.set({
        isDelete: true,
        name: nombre,
        bio: biografia,
        isResident: resident,
        soundcloud: linkSC,
        spotify: linkSpotify,
        instagram: linkIG,
        images: imagenes,
        userSoundcloud: userSC
      }).then(
        window.location.replace("/admin/artistas")
      ).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  }

  HtmlArtistas() {
    const artistas = this.state.artistas;

    return (
      <>
        <div className="container">
          <div className="panel panel-default" >
            <div className="panel-heading" >
              <div className="panel-body" >
                <table className="table table-hover table-responsive table-dark">
                  <thead>
                    <tr>
                      <td colSpan="4"><SignOut></SignOut></td>
                    </tr>
                    <tr>
                      <td colSpan="4" align="center" text-size="25px"> <Link style={{ width: '500px' }} className="btn btn-success" to={`/andproducciones/admin/nuevoArtista`}>Nuevo artista</Link></td>
                    </tr>
                    <tr>
                      <th scope="col">Nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artistas && artistas !== undefined
                      ? artistas.map(artista => (
                        <tr key={artista.id}>
                          <th scope="row">{artista.data.name}</th>
                          <td>
                            <Link className="btn btn-primary" to={`/andproducciones/admin/artistas/${artista.id}`}>Editar</Link>
                          </td>
                          <td>
                            <button onClick={this.delete.bind(this, artista.id, artista.data.name,
                              artista.data.isResident, artista.data.bio, artista.data.soundcloud, artista.data.instagram, artista.data.spotify,
                              artista.data.userSoundcloud, artista.data.images)}
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
    return <div>{this.HtmlArtistas()}</div>;
  }
}