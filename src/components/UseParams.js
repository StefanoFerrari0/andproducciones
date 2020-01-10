import { useParams } from 'react-router-dom';
import ArtistX from './Home/ArtistsX';
import React from 'react';
import EditArtistX from './Admin/EditArtistX';

function UseParams({ AdminPage }) {
  var DJname = useParams().djsName.split('-').join(' ');

  if (AdminPage) {
    return <EditArtistX name={DJname}></EditArtistX>;
  } else {
    return <ArtistX name={DJname}></ArtistX>;
  }
}

export default UseParams;
