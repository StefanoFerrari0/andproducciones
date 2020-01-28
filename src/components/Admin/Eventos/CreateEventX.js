import React, { Component } from 'react';
import { storage, db } from '../../Firebase/firebase';
import Title from "../../Home/Title";

export default class CreateEventX extends Component {

    constructor() {
        super();
        this.htmlCardImage = this.htmlCardImage.bind(this);
        this.htmlBannerImage = this.htmlBannerImage.bind(this);
        this.ref = db.collection('Eventos');
        this.state = {
            key: "",
            name: "",
            info: "",
            images: ["", ""],
            isDelete: false,
            location: "",
            date: "",
            place: "",
            artists: [],
            allArtist: [],
            imageCard: "",
            imageBanner: "",
            progress: "",
        };
    }


    componentDidMount() {
        db.collection('Artistas')
            .where('isDelete', '==', false)
            .orderBy('name', 'asc')
            .get()
            .then(snapShots => {
                this.setState({
                    allArtist: snapShots.docs.map(doc => {
                        return { id: doc.id, data: doc.data() };
                    }),
                });
            });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { name, info, images, isDelete, location, date, place, artists, allArtist } = this.state;


        if (artists && artists !== undefined) {
            let refArtistas = artists.map((artista, index, array) => {
                // Cómo solo queremos los nombres, retornamos "name".
                return db.doc("Artistas/" + artista.id).ref;
            })
            this.setState({ artists: refArtistas });
        }

        this.ref.add({
            name,
            info,
            images,
            isDelete,
            location,
            date,
            place,
            artists,
            allArtist
        }).then((docRef) => {
            this.setState({
                name: "",
                info: "",
                images: ["", ""],
                isDelete: false,
                location: "",
                date: "",
                place: "",
                artists: [],
                allArtist: []
            });
            window.location.replace("/andproducciones/admin/eventos")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    deleteImageCard = (e) => {
        let deleteRef = storage.refFromURL(this.state.images[0]);
        deleteRef.delete();

        var removed = this.state.images;
        removed[0] = "";
        this.setState({ images: removed });
    }

    deleteImageBanner = (e) => {
        let deleteRef = storage.refFromURL(this.state.images[1]);
        deleteRef.delete();

        var imagenes = this.state.images;
        imagenes[1] = "";
        this.setState({ images: imagenes });
    }


    handleCardChange = e => {
        if (e.target.files[0]) {
            const imageCard = e.target.files[0];
            this.setState(() => ({ imageCard }));
        }
    }

    handleBannerChange = e => {
        if (e.target.files[0]) {
            const imageBanner = e.target.files[0];
            this.setState(() => ({ imageBanner }));
        }

    }

    handleImageCardUpload = () => {
        const { imageCard } = this.state;
        const uploadTask = storage.ref(`Eventos/Card/${imageCard.name}`).put(imageCard);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage.ref("Eventos/Card/").child(imageCard.name)
                    .getDownloadURL().then(url => {
                        var removed = this.state.images;
                        removed[0] = url;
                        this.setState({ images: removed });
                    });
            }
        );
    };

    handleImageBannerUpload = () => {
        const { imageBanner } = this.state;
        const uploadTask = storage.ref(`Eventos/Banner/${imageBanner.name}`).put(imageBanner);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage.ref("Eventos/Banner/").child(imageBanner.name)
                    .getDownloadURL().then(url => {
                        var removed = this.state.images;
                        removed[1] = url;
                        console.log(removed);

                        this.setState({ images: removed });
                    });
            }
        );
    };

    htmlCardImage() {
        return (
            <div className="adminImages" align="center" style={{ display: "block", float: "right" }}>
                <label htmlFor="banner">Imagen Card</label>

                <img
                    src={this.state.images[0] || "https://via.placeholder.com/248x318"}
                    alt="Card"
                    style={{ width: "248", height: "318" }}
                />
                <div className="btn">
                    <input type="file" onChange={this.handleCardChange} />
                    <button type="reset" className="btn-form" onClick={this.handleImageCardUpload}>Upload</button>
                </div>
            </div>
        );
    }


    htmlBannerImage() {
        return (
            <div className="adminImages" align="center" style={{ display: "block", float: "right" }}>
                <label htmlFor="banner">Imagen Banner</label>

                <img
                    src={this.state.images[1] || "https://via.placeholder.com/577x580"}
                    alt="Banner"
                    style={{ width: "577px", height: "580px" }}
                />
                <div className="btn">
                    <input type="file" onChange={this.handleBannerChange} />
                    <button className="btn-form" type="reset" onClick={this.handleImageBannerUpload}>Upload</button>
                </div>
            </div>
        );
    }


    AddColumn(index) {

        var TodosArtistas = this.state.allArtist;
        var artistasEvento = this.state.artists;

        artistasEvento.push(TodosArtistas[index]);

        this.setState({ artists: artistasEvento });

        TodosArtistas.splice(index, 1);

        this.setState({ allArtist: TodosArtistas });

        console.log(this.state.artists);
    }

    DeleteColumn(id, index) {

        var TodosArtistas = this.state.allArtist;
        var artistasEvento = this.state.artists;

        TodosArtistas.push(artistasEvento[index]);
        this.setState({ allArtist: TodosArtistas });

        artistasEvento.splice(index, 1);
        this.setState({ artists: artistasEvento });
    }

    render() {

        let imageCard;
        if (this.state.images[0] === "") {
            imageCard = this.htmlCardImage();
        } else {
            imageCard = <>
                <div className="adminImages" align="center">
                    <img name="card" width="248px" height="318px" src={this.state.images[0]} alt={this.state.name} />
                    <div className="btn">
                        <button type="reset" className="btn-form" onClick={this.deleteImageCard} >Eliminar Imagen Card</button>
                    </div>
                </div>
            </>
        }

        let imageBanner;
        if (this.state.images[1] === "") {
            imageBanner = this.htmlBannerImage();
        } else {
            imageBanner = <>
                <div className="adminImages" align="center">
                    <img name="banner" width="577px" height="580px" src={this.state.images[1]} alt={this.state.name} />
                    <div className="btn">
                        <button type="reset" className="btn-form" onClick={this.deleteImageBanner}>Eliminar Imagen banner</button>
                    </div>
                </div>
            </>
        }

        return (
            <>
                <div style={{ width: "100%", backgroundColor: "black" }}>
                    <div className="panel-body" style={{ marginLeft: "20%", width: "60%", alignItems: "center" }}>
                        <form className="center-block" onSubmit={this.onSubmit}>
                            <Title hero="titleAdmin" title="NUEVO EVENTO" />

                            <div className="form-group admin-form">
                                <label htmlFor="name">Nombre: </label>
                                <input type="text" className="form-control" name="name"
                                    value={this.state.name} onChange={this.onChange} placeholder="Nombre"
                                    required />
                            </div>


                            <div className="form-group admin-form">
                                <label htmlFor="info">Información: </label>
                                <textarea className="form-control" style={{ textAlign: "center" }} name="info"
                                    onChange={this.onChange} value={this.state.info} placeholder="Información"
                                    cols="80" rows="6" required />
                            </div>


                            <div className="form-group admin-form">
                                <label htmlFor="location">Lugar: </label>
                                <textarea className="form-control" style={{ textAlign: "center" }} name="location"
                                    onChange={this.onChange} value={this.state.location} placeholder="Localización"
                                    cols="80" rows="6" required />

                                <small className="form-text text-muted">Ingrese a <a target="_blank"
                                    rel="noopener noreferrer" href="https://www.google.com/maps"><strong>Google Maps</strong></a>
                                    Marque el lugar del evento, haga click en el icono del Menú(Esquina superior izquierda)
                                    > Compartir o insertar el mapa > Insertar un mapa > Pequeño > Copie el link completo
                                    y peguelo acá.
                                </small>
                            </div>


                            <div className="form-group admin-form">
                                <label htmlFor="date">Fecha:</label>
                                <input type="text" className="form-control" name="date"
                                    placeholder="EJ: 02/04/20" value={this.state.date} onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group admin-form">
                                <label htmlFor="place">Orden en el que desea que aparezca el evento:</label>
                                <input type="number" className="form-control" name="place"
                                    value={this.state.place} onChange={this.onChange}
                                    required
                                />
                                <small className="form-text text-muted">El número 1 sería el último.
                                Recuerde que los últimos 3 eventos apareceran en la página principal
                                </small>
                            </div>

                            <div className="form-group admin-form">
                                <label htmlFor="artists">LINE UP (OBLIGATORIO)</label>

                                <div className="container" style={{ width: "1200px", display: "block" }} >
                                    <table className="table table-responsive table-hover table-dark" style={{ width: "300px" }}>
                                        <thead>
                                            <tr>
                                                <th>Artistas existentes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.allArtist && this.state.allArtist !== undefined
                                                ? this.state.allArtist.map((artista, index) => (
                                                    <tr key={artista.id}>
                                                        <th scope="row">{artista.data.name}</th>
                                                        <td>
                                                            <button onClick={this.AddColumn.bind(this, index)}
                                                                className="btn-form" type="reset" style={{ width: '140px' }}>
                                                                Agregar</button>
                                                        </td>
                                                    </tr>
                                                ))
                                                : null}
                                        </tbody>
                                    </table>

                                    <table className="table table-responsive table-hover table-dark" style={{ height: "fit-content", width: "300px" }}>
                                        <thead>
                                            <tr>
                                                <th>Artistas del evento</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.artists.map((artista, index, array) => (
                                                <tr key={artista.id}>
                                                    <th scope="row">{artista.data.name}</th>
                                                    <td>
                                                        <button onClick={this.DeleteColumn.bind(this, artista.id, index)}
                                                            className="btn-form" type="reset" style={{ width: '140px' }}>
                                                            Eliminar</button>
                                                    </td>
                                                </tr>
                                            ))
                                            }

                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            {imageBanner}

                            {imageCard}

                            <div align="center">
                                <button type="submit" className="btn-form" style={{ width: "500px" }}>Agregar Evento</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>);
    }
}