import React from "react";
import Artistas from "../../../components/Admin/Artistas/MainArtist";
import FuncionAuth from "../../../components/Firebase/functionFirebase";

export default function AllArtistPage() {
  return (
    <>
      <FuncionAuth component={<Artistas></Artistas>}></FuncionAuth>
    </>
  );
}
