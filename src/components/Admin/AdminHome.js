import React from "react";
import SignOut from "../Admin/Login/SignOut";
import Card from "../Home/Cards";

export default function AdminHome() {
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "fit-content" }}>
      <SignOut></SignOut>

      <div className="div-card-home" style={{ marginBottom: "0px" }}>
        <Card name="A R T I S T A S" hero="card" urlEvento="/andproducciones/admin/artistas" url="https://scontent.ftuc1-2.fna.fbcdn.net/v/t1.0-0/p640x640/79806531_1020166924994782_4374678410090250240_o.jpg?_nc_cat=111&_nc_oc=AQnu0caeQeckSUTnD3or5JykH0Tm5ZmH8i0eQDpMlOyviXAc-Fj1ubyYS7zfV2HBLgk&_nc_ht=scontent.ftuc1-2.fna&_nc_tp=1&oh=6489f307e2221827207c453bdad983d4&oe=5EA66111" />
        <Card name="E V E N T O S" hero="card" urlEvento="/andproducciones/admin/eventos" url="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-0/p640x640/80217026_1020166884994786_1944388959698157568_o.jpg?_nc_cat=108&_nc_oc=AQnPfz-VcIqeutgwuUVaw2Xif4mNhqNboDK1Q9De_qM-49tyC2bDWoAJDju3n_UbQ9M&_nc_ht=scontent.ftuc1-1.fna&_nc_tp=1&oh=613881f9802e05f07102ae1c896b93a8&oe=5EA9D267" />
      </div>
    </div>
  );
}
