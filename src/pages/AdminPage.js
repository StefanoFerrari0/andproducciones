import React from "react";
import FuncionAuth from "../components/Firebase/functionFirebase";
import AdminHome from "../components/Admin/AdminHome";

export default function AdminPage() {
  return <FuncionAuth component={<AdminHome></AdminHome>}></FuncionAuth>;
}
