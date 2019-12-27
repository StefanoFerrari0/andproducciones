import { useParams } from 'react-router-dom';
import ArtistX from './ArtistsX';
import React from 'react';

function UseParams(props){
    var DJname = useParams().djs.split('-').join(' ');
    return <ArtistX name={DJname}></ArtistX>
}

export default UseParams;