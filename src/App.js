import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Artistas from './pages/ArtistsPage';
import ArtistaX from './pages/ArtistaX';
import Contacto from './pages/ContactPage';
import Cultura from './pages/CulturePage';
import Error from './pages/ErrorPage';
import Eventos from './pages/EventsPage';
import EventXPage from './pages/EventXPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App()
{
    
    return (
    <>
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/artistas" component={Artistas}/>
    <Route exact path="/artistas/:djs" component={ArtistaX}/>
    <Route exact path="/contacto" component={Contacto}/>
    <Route exact path="/cultura" component={Cultura}/>
    <Route exact path="/eventos" component={Eventos}/>
    <Route exact path="/eventos/:nombreFiesta" component={EventXPage} />
    <Route component={Error}/>
    </Switch>
    <Footer></Footer>
    </>
    )
}
export default App;