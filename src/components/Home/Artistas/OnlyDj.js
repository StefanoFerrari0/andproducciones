import React from "react";
import Title from "../Title";
import { FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa';

export default function OnlyDj({ name, image, bio, country, resident, soundcloud, spotify, instagram, userSoundcloud }) {

  var urlSoundcloud = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${userSoundcloud}&color=%2334342c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`

  return <>
    <img className='banner-ArtistaX' alt={name} src={image}></img>
    <div className="background-ArtistaX">
      <div className="titleAndSubtitle">
        <Title title={name} hero="title-ArtistaX"></Title>
        {(resident === true) ? <Title title="/ Resident" hero="residentTitle"></Title> : null}
      </div>
      <p className="biografia-ArtistaX">{bio}</p>

      <div className="SocialNetworks-ArtistaX">
        <ul className="social-ArtistaX">
          {(spotify) ? <li><a target="_blank" rel="noopener noreferrer" href={spotify}><FaSpotify className="spotify" /></a></li> : null}
          {(soundcloud) ? <li><a target="_blank" rel="noopener noreferrer" href={soundcloud}><FaSoundcloud className="soundcloud" /></a></li> : null}
          {(instagram) ? <li><a target="_blank" rel="noopener noreferrer" href={instagram}><FaInstagram className="instagram" /></a></li> : null}

        </ul>
      </div>

      <div className="SoundCloud-ArtistaX">
        {(userSoundcloud) ? <iframe title={`DJ-` + { name }} width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src={urlSoundcloud}></iframe>
          : null}
      </div>
    </div>
  </>
}
