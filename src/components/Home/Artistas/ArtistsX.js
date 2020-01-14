import React, { Component } from "react";
import { db } from "../../Firebase/firebase";
import Error from "../Error/Error";
import OnlyDj from "./OnlyDj";

export default class ArtistsX extends Component {
  constructor(props) {
    super(props);
    this.HtmlArtistas = this.HtmlArtistas.bind(this);

    this.state = {
      artista: []
    };
  }

  componentDidMount() {
    var name = this.props.name;

    db.collection("Artistas")
      .where("isDelete", "==", false)
      .where("name", "==", name)
      .get()
      .then(snapShots => {
        this.setState({
          artista: snapShots.docs.map(doc => {
            return { id: doc.id, data: doc.data() };
          })
        });
      });
  }

  HtmlArtistas() {
    const artistas = this.state.artista;

    return (
      <>
        {artistas && artistas !== undefined ? (
          artistas.map(artista => (
            <OnlyDj
              key={artista.id}
              name={artista.data.name}
              bio={artista.data.bio}
              country={artista.data.country}
              resident={artista.data.isResident}
              soundcloud={artista.data.soundcloud}
              spotify={artista.data.spotify}
              instagram={artista.data.instagram}
              image={artista.data.images[1]}
              userSoundcloud={artista.data.userSoundcloud}
            />
          ))
        ) : (
            <Error></Error>
          )}
      </>
    );
  }

  render() {
    return <div>{this.HtmlArtistas()}</div>;
  }
}