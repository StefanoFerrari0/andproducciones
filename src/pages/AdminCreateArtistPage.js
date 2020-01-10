import React from "react";
import CreateArtist from "../components/Admin/CreateArtistX";
import FuncionAuth from "../components/Firebase/functionFirebase"

export default function AdminCreateArtistPage() {
    return (
        <>
            <FuncionAuth component={<CreateArtist></CreateArtist>}></FuncionAuth>
        </>
    );
}
