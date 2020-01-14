import React from "react";
import Banner from "../../../components/Home/Banner";
import Titulo from "../../../components/Home/Title";
import Artists from "../../../components/Home/Artistas/Artists";

const Artistas = () => {
  return (
    <>
      <Banner hero="artistasPage"></Banner>
      <Titulo hero="title" title="ARTISTAS QUE ESTUVIERON EN AND " />
      <div className="div-card-events">
        <Artists></Artists>
      </div>
    </>
  );
};

export default Artistas;
