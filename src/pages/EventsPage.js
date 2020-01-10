import React from "react";
import Banner from "../components/Home/Banner";
import Titulo from "../components/Home/Title";
import Fiesta from "../components/Home/Party";

export default function Eventos() {
  return (
    <>
      <Banner hero="eventoPage"></Banner>
      <Titulo hero="title" title="EVENTOS" />
      <div className="div-card-events">
        <Fiesta></Fiesta>
      </div>
    </>
  );
}
