import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Home/Navbar';
import Home from './pages/MainPage/Home';
import Artistas from './pages/MainPage/Artistas/ArtistsPage';
import ArtistaX from './pages/MainPage/Artistas/ArtistaX';
import Eventos from './pages/MainPage/Eventos/EventsPage';
import EventXPage from './pages/MainPage/Eventos/EventXPage';
import Cultura from './pages/MainPage/Cultura/CulturePage';
import Contacto from './pages/MainPage/Contacto/ContactPage';
import Error from './pages/MainPage/Error/ErrorPage';

import LoginPage from './pages/Admin/Login/LoginPage';
import AdminPage from './pages/Admin/AdminPage';
import AdminArtistPage from './pages/Admin/Artistas/AllArtistPage';
import EditArtistX from './components/Admin/Artistas/EditArtistX';
import CreateArtistX from './pages/Admin/Artistas/CreateArtistPage';

import MainEvent from './pages/Admin/Eventos/AllEventsPage';
import CreateEvent from './pages/Admin/Eventos/CreateEventPage';
import EditEvent from './components/Admin/Eventos/EditEventX';

import Footer from './components/Home/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/andproducciones/" component={Home} />
        <Route exact path="/andproducciones/artistas" component={Artistas} />
        <Route exact path="/andproducciones/artistas/:djsName" component={ArtistaX} />
        <Route exact path="/andproducciones/eventos" component={Eventos} />
        <Route exact path="/andproducciones/eventos/:nombreFiesta" component={EventXPage} />
        <Route exact path="/andproducciones/cultura" component={Cultura} />
        <Route exact path="/andproducciones/contacto" component={Contacto} />
        <Route exact path="/andproducciones/login" component={LoginPage} />

        <Route exact path="/andproducciones/admin" component={AdminPage} />
        <Route exact path="/andproducciones/admin/artistas" component={AdminArtistPage} />
        <Route exact path="/andproducciones/admin/artistas/:id" component={EditArtistX} />
        <Route exact path="/andproducciones/admin/nuevoArtista" component={CreateArtistX} />

        <Route exact path="/andproducciones/admin/eventos" component={MainEvent} />
        <Route exact path="/andproducciones/admin/eventos/:id" component={EditEvent} />
        <Route exact path="/andproducciones/admin/nuevoEvento" component={CreateEvent} />

        <Route component={Error} />
      </Switch>
      <Footer></Footer>
    </>
  );
}
export default App;
