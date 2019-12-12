import React from "react";

import Home from './pages/Home';
import Artistas from './pages/Artistas';
import ArtistaX from './pages/ArtistaX';
import Contacto from './pages/Contacto';
import Cultura from './pages/Cultura';
import Error from './pages/Error';
import Eventos from './pages/Eventos';
import FiestaX from './pages/FiestaX';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
function App()
{
    return (
    <>
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/artistas/" component={Artistas}/>
    <Route exact path="/artistas/:djs" component={ArtistaX}/>
    <Route exact path="/contacto/" component={Contacto}/>
    <Route exact path="/cultura/" component={Cultura}/>
    <Route exact path="/eventos/" component={Eventos}/>
    <Route exact path="/eventos/:fiesta" component={FiestaX}/>
    <Route component={Error}/>
    </Switch>

    </>
    )
}

export default App;