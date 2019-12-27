import React from 'react'
import Banner from '../components/Banner'
import Titulo from '../components/Title'
import FormContact from '../components/FormContact'

export default function Contacto() {
    return <div>
      <Banner hero="contactoPage"></Banner>
      <Titulo hero="title" title="¡CONTACTANOS!"/>
      <FormContact></FormContact>  
    </div>
}