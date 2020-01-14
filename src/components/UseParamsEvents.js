import React from 'react';
import { useParams } from 'react-router-dom';
import EventX from './Home/Eventos/PartyX';

function UseParams({ AdminPage }) {
    var EventName = useParams().nombreFiesta.split('-').join(' ');

    if (AdminPage) {
        return null;
    } else {
        return <EventX name={EventName}></EventX>;
    }
}

export default UseParams;