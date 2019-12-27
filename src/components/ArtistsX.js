import React, { Component } from "react";
import db from "./Firebase/firebase";
import Error from "./Error"

export default class Artists extends Component
{
  constructor(props)
  {
    super(props);
    this.HtmlArtistas = this.HtmlArtistas.bind(this);

    this.state =
    {
      artista: [],
    }
  }

  componentDidMount()
  {
    var name = this.props.name; 
    db.collection("Artistas").where("isDelete", "==", false).where("name", "==", name).get().then((snapShots) =>{
      this.setState({
        artista: snapShots.docs.map(doc => {
          return { id: doc.id, data: doc.data()}
        })
      })
    })
  }
  
  HtmlArtistas() {
    const artistas = this.state.artista;
      return <> 
      {artistas && artistas !== undefined ? 
         null
       : <Error></Error>}
       </>  
  }

  render()
  {
    return <div> 
      {this.HtmlArtistas()}
    </div>
  }
}