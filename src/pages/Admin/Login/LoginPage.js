import React from "react";
import Titulo from "../../../components/Home/Title";
import FormLogin from "../../../components/Admin/Login/FormLogin";

export default function LoginPage() {
  return (
    <>
      <div className="loginBackground">
        <Titulo hero="titleLogin" title="LOGIN" />
        <FormLogin />
      </div>
    </>
  );
}
