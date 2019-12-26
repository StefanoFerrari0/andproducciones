import React from 'react';
import Banner from '../components/Banner';
import Titulo from '../components/Titulo';
import Artists from '../components/Artists';

const Artistas = () => {
    return (
        <>
        <Banner hero="artistasPage"></Banner>
            <Titulo hero="title" title="ARTISTAS QUE ESTUVIERON EN AND "/>
            <div className="div-card-events">
            <Artists></Artists>
            </div>
        </>
        ) 
};

export default Artistas;