import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import Artistas from './pages/ArtistsPage';
import ArtistaX from './pages/ArtistaX';
import Eventos from './pages/EventsPage';
import EventXPage from './pages/EventXPage';
import Cultura from './pages/CulturePage';
import Contacto from './pages/ContactPage';
import Error from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AdminArtistPage from './pages/AdminArtistPage';
import EditArtistX from './components/Admin/EditArtistX';
import CreateArtistX from './pages/AdminCreateArtistPage';

import Footer from './components/Home/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artistas" component={Artistas} />
        <Route exact path="/artistas/:djsName" component={ArtistaX} />
        <Route exact path="/eventos" component={Eventos} />
        <Route exact path="/eventos/:nombreFiesta" component={EventXPage} />
        <Route exact path="/cultura" component={Cultura} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/artistas" component={AdminArtistPage} />
        <Route exact path="/admin/artistas/:id" component={EditArtistX} />
        <Route exact path="/admin/nuevoArtista" component={CreateArtistX} />

        <Route component={Error} />
      </Switch>
      <Footer></Footer>
    </>
  );
}
export default App;
