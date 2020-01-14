import React from "react";
import Eventos from "../../../components/Admin/Eventos/MainEvent";
import FuncionAuth from "../../../components/Firebase/functionFirebase";

export default function AllEventsPage() {
    return (
        <>
            <FuncionAuth component={<Eventos></Eventos>}></FuncionAuth>
        </>
    );
}
