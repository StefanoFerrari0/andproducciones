import React from "react";
import CreateEvent from "../../../components/Admin/Eventos/CreateEventX";
import FuncionAuth from "../../../components/Firebase/functionFirebase"

export default function CreateEventPage() {
    return (
        <>
            <FuncionAuth component={<CreateEvent></CreateEvent>}></FuncionAuth>
        </>
    );
}


