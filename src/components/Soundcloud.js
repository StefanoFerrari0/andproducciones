import React from "react";
import Titulo from "./Title"

export default function SoundCloud({url, hero, title})
{
  return <div className="soundcloud-home">
        <Titulo hero={hero} title={title}></Titulo>
      <iframe title="SoundCloud" className="widgetSC"width="100%" height="300" scrolling="no" 
              frameBorder="no" allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/449288853&color=%23ff6667&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
      </div>
}