import React from "react";
import Banner from "../components/Home/Banner";
import Titulo from "../components/Home/Title";
import FormContact from "../components/Home/FormContact";

export default function Contacto() {
  return (
    <div>
      <Banner hero="contactoPage"></Banner>
      <Titulo hero="title" title="¡CONTACTANOS!" />
      <FormContact></FormContact>
    </div>
  );
}
