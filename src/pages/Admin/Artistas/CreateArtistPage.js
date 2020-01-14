import React from "react";
import CreateArtist from "../../../components/Admin/Artistas/CreateArtistX";
import FuncionAuth from "../../../components/Firebase/functionFirebase"

export default function CreateArtistPage() {
    return (
        <>
            <FuncionAuth component={<CreateArtist></CreateArtist>}></FuncionAuth>
        </>
    );
}
