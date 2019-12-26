import React from "react";

export default function SubLink({url, hero, title})
{
  return <div className="EventoDiv">
         <a className="btn btn-primary btn-red" href="/eventos" role="button">{title}</a>
        </div>
}