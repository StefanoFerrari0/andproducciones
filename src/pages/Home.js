import React from 'react'
import Fiesta from '../components/Fiesta'
import Card from '../components/Cards'
import Contenedor from '../components/Contenedor'

export default function Home() {
return (
<>
<Fiesta hero="eventoDefault" children="08/02/2020"></Fiesta>
    <div className="div-card">
    <Card name="10 hs de techno - Michel Lauriola" 
              hero="card"
              date="07/12/19"
              url='https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/76653266_998366790508129_344064573042589696_o.jpg?_nc_cat=106&_nc_oc=AQkAQKIcDw8XkJ51SlR2oogaiFYMbQeNwiX7Ws-pwF7CckyE5fi9K2w9l_LPSHN-Yjs&_nc_ht=scontent.ftuc1-1.fna&oh=f5eb5fee0e55a50e06d231f83e02758e&oe=5E7C9A66'>                 
    </Card>
    <Card name="Aniversario: Jorge Ciccioli / Ice Machine" 
          hero="card"
          date="08/10/19"
          url='https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/71278867_949735588704583_6772732236845285376_o.jpg?_nc_cat=108&_nc_oc=AQkD75-Aqr00bmZeJxGN_69M4hjNBhQggv7JmcMVPeEOwH7ZrNAAEGHEruP-MFuQxco&_nc_ht=scontent.ftuc1-1.fna&oh=e9804b6ebdecf61984aca7fcda7f82cc&oe=5E75F041'>                 
    </Card>  
    <Card name="10 hs de Techno - Sol Ortega / Desiree"
          date="08/07/19"
          hero="card"
          url='https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/p960x960/65950019_893996154278527_197148589548371968_o.jpg?_nc_cat=108&_nc_oc=AQkSfcIKp-zjPcq3qPuAby_dyMC1IkAEpwoEHoyR4eqrNjQN8pfk6BgGaHKAVfy6Afc&_nc_ht=scontent.ftuc1-1.fna&oh=c994cee415e483c7ddeadc094a258b6f&oe=5E77507F'>
    </Card>
    </div>

</>
)
}