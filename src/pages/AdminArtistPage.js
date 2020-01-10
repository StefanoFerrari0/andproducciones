import React from "react";
import Artistas from "../components/Admin/AdminArtist";
import FuncionAuth from "../components/Firebase/functionFirebase";

export default function EditArtistPage() {
  return (
    <>
      <FuncionAuth component={<Artistas></Artistas>}></FuncionAuth>
    </>
  );
}
