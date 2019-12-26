import React from 'react'
import Banner from '../components/Banner'
import Titulo from '../components/Titulo'
import Fiesta from '../components/Fiesta'
const Eventos = () => {
    return (
        <>
        <Banner hero="eventoPage"></Banner>
            <Titulo hero="title" title="EVENTOS"/>
            <div className="div-card-events">
            <Fiesta></Fiesta>
            </div>
        </>
        )
};

export default Eventos;