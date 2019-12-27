import React, { Component } from "react";
import db from "./Firebase/firebase";
import Card from "./Cards"

export default class Fiesta extends Component
{
  constructor(props)
  {
    super(props);
    this.HtmlFiestas = this.HtmlFiestas.bind(this);

    this.state =
    {
      fiestas: [],
    }
  }

  componentDidMount()
  {
    db.collection("Eventos").orderBy("place", "desc").get().then((snapShots) =>{
      this.setState({
        fiestas: snapShots.docs.map(doc => {
          return { id: doc.id, data: doc.data()}
        })
      })
    })
  }
  
  HtmlFiestas() {
    const fiestas = this.state.fiestas;
    const homePage = this.props.homePage;

    if(homePage === true || homePage === "true" )
    {
      var cantidadEliminar = fiestas.length - 3;
      fiestas.splice(3, cantidadEliminar);
    }
    
     return <> 
      {fiestas && fiestas !== undefined ? fiestas.map((evento) =>
         <Card key={evento.id} name= {evento.data.name} 
         hero="card"
         date={evento.data.date}
         urlEvento="/eventos"
         url={evento.data.images[0]} 
         />
       ) : null}
       </>
  }

  render()
  {
    return <div> 
      {this.HtmlFiestas()}
    </div>
  }
}