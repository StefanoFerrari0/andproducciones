import React, { Component } from 'react';
import { storage, db } from '../../Firebase/firebase';
import Title from "../../Home/Title";

export default class EditArtistX extends Component {

  constructor(props) {
    super(props);
    this.htmlCardImage = this.htmlCardImage.bind(this);
    this.htmlBannerImage = this.htmlBannerImage.bind(this);

    this.state = {
      key: "",
      name: "",
      isResident: false,
      images: ["", ""],
      isDelete: false,
      bio: "",
      spotify: "",
      instagram: "",
      soundcloud: "",
      userSoundcloud: 999999999,
      imageCard: "",
      imageBanner: "",
      progress: "",
    };
  }


  componentDidMount() {

    const ref = db.collection('Artistas').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const artista = doc.data();
        this.setState({
          key: doc.id,
          name: artista.name,
          isResident: artista.isResident,
          images: artista.images,
          isDelete: artista.isDelete,
          bio: artista.bio,
          spotify: artista.spotify,
          instagram: artista.instagram,
          soundcloud: artista.soundcloud,
          userSoundcloud: artista.userSoundcloud
        });
      } else {
        console.log("No such document!");
      }
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

  onSubmit = (e) => {
    e.preventDefault();

    const { name, isResident, images, isDelete, bio, spotify, instagram, soundcloud, userSoundcloud } = this.state;

    const updateRef = db.collection('Artistas').doc(this.state.key);
    updateRef.set({
      name,
      isResident,
      images,
      isDelete,
      bio,
      spotify,
      instagram,
      soundcloud,
      userSoundcloud,
    }).then((docRef) => {
      this.setState({
        key: "",
        name: "",
        isResident: "",
        images: ["", ""],
        isDelete: false,
        bio: "",
        spotify: "",
        instagram: "",
        soundcloud: "",
        userSoundcloud: ""
      });

      this.props.history.push("/admin/artistas/");
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({ artista: state });
  }

  checkboxOnChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({ artista: state });
  }

  handleImageCardUpload = () => {
    const { imageCard } = this.state;
    const uploadTask = storage.ref(`Artistas/Card/${imageCard.name}`).put(imageCard);
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
        storage.ref("Artistas/Card/").child(imageCard.name)
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
    const uploadTask = storage.ref(`Artistas/Banner/${imageBanner.name}`).put(imageBanner);
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
        storage.ref("Artistas/Banner/").child(imageBanner.name)
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
      <div className="adminImages" align="center">
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
      <div className="adminImages" align="center">
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
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <div className="panel-body" style={{ marginLeft: "20%", width: "60%", alignItems: "center" }}>
          <form className="center-block" onSubmit={this.onSubmit}>
            <Title hero="titleAdmin" title={`Editando a ${this.state.name}`} />
            <div className="form-group">
              <input type="text" className="form-control" name="name"
                value={this.state.name} onChange={this.onChange} placeholder="Nombre"
                required />
            </div>

            <div className="form-group" style={{ marginLeft: "37%" }} >
              <label style={{ display: "inline-block" }} htmlFor="isResident">
                <input style={{ width: "50px", height: "30px", display: "inline-block" }} type="checkbox"
                  onChange={this.handleCheck} value={this.state.isResident} className="form-control" name="isResident" />¿Es residente?
                      </label>
            </div>

            <div className="form-group">
              <textarea className="form-control" style={{ textAlign: "center" }} name="bio"
                onChange={this.onChange} value={this.state.bio} placeholder="Biografía" cols="80" rows="6" required />
            </div>

            <div className="form-group">
              <label htmlFor="soundcloud">Soundcloud:</label>
              <input type="text" className="form-control" name="soundcloud"
                value={this.state.soundcloud} onChange={this.onChange}
                placeholder="Ej: https://soundcloud.com/andpro-tucuman" />
            </div>

            <div className="form-group">
              <label htmlFor="instagram">Instagram:</label>
              <input type="text" className="form-control" name="instagram"
                value={this.state.instagram} onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="spotify">Spotify:</label>
              <input type="text" className="form-control" name="spotify"
                value={this.state.spotify} onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userSoundcloud">Usuario de Soundcloud:</label>
              <input type="number" className="form-control" name="userSoundcloud"
                value={this.state.userSoundcloud} onChange={this.onChange}
                required
              />
              <small className="form-text text-muted">Entrar al soundcloud deseado, clickear en Compartir>Embed,
                      copiar el código. Buscar la parte: url=https%3A//api.soundcloud.com/users/<strong>449288853 </strong>
                y copiar solamente los números despues del /users/</small>
            </div>

            {imageBanner}

            {imageCard}

            <div align="center">
              <button type="submit" className="btn-form" style={{ width: "500px" }} >Actualizar artista</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}
