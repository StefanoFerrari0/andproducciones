import React, { Component } from "react";
import db from "./Firebase/firebase";
import Card from "./Cards"

export default class Artists extends Component
{
  constructor(props)
  {
    super(props);
    this.HtmlArtistas = this.HtmlArtistas.bind(this);

    this.state =
    {
      artistas: [],
    }
  }

  componentDidMount()
  {
    db.collection("Artistas").where("isDelete", "==", false).orderBy("name", "asc").get().then((snapShots) =>{
      this.setState({
        artistas: snapShots.docs.map(doc => {
          return { id: doc.id, data: doc.data()}
        })
      })
    })
  }
  
  HtmlArtistas() {
    const artistas = this.state.artistas;
      return <> 
      {artistas && artistas !== undefined ? artistas.map((artista) =>
         <Card key={artista.id} name= {artista.data.name} 
         hero="card"
         urlEvento= {"/artistas/" + artista.data.name.split(' ').join('-')}
         url={artista.data.images[0]} 
         />
       ) : null}
       </>  
  }

  render()
  {
    return <div> 
      {this.HtmlArtistas()}
    </div>
  }
}