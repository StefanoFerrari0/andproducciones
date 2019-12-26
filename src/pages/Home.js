import React from 'react'
import Banner from '../components/Banner'
import Titulo from '../components/Titulo'
import Fiesta from '../components/Fiesta'
import SubLink from '../components/SubtituloLink'
import SoundCloudHome from '../components/Soundcloud'

export default function Home() {
return (
<>
<Banner hero="eventoDefault" children="08/02/2020"></Banner>
<Titulo hero="title" title="ÚLTIMOS EVENTOS"/>
    <div className="div-card-home">
      <Fiesta homePage></Fiesta>
    </div>
    <SubLink url="/eventos" hero="sub-evento" title="+ eventos"></SubLink>
    <SoundCloudHome title="Nuestro Soundcloud" hero="title"
    url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/449288853&color=%23FF6667&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">    
    </SoundCloudHome>


</>
)
}