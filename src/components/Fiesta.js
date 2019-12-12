import React from 'react'

class Fiesta extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        name: "10 hs de Techno",
        image: "",
        info: "ASDLKAJSDLAKSJDALSKDJLAKDJ",
        date: new Date().toLocaleString(),
        place: "Tafi Viejo",
        artists: [],
    }
   }

   componentDidMount(){
       setTimeout(() => {
        this.setState({

        })
       }, 5000)
   }
   
   render(){
       return(
           <div>
        <h1>{this.state.name}</h1>
               <div>
                    <img src={this.state.image}/>
                   <div>
                    <p>{this.state.info}</p>
                    <input type='date'></input>
                    
                    <h3>{this.state.place}</h3>
                   </div>
               </div>
           </div>
       )
   }
}

export default Fiesta