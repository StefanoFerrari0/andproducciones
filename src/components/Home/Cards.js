import React from "react";
import { Link } from 'react-router-dom';

export default function Card({ url, hero, name, date, urlEvento }) {
  return <Link to={urlEvento}>
    <div className={hero}>
      <img href={urlEvento} src={url} alt={name} />
      <h2>{name}<br></br>{date}</h2>
    </div>
  </Link>

}