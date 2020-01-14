import React from "react";
import { Link } from 'react-router-dom';

export default function SubLink({ url, hero, title }) {
  return <div className="EventoDiv">
    <Link className="btn btn-primary btn-red" to={url} role="button">{title}</Link>
  </div>
}