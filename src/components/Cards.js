import React from "react";

export  default function Card({url, hero, name, date, urlEvento})
{
  return <a href={urlEvento}>
            <div className = {hero}>
              <img href={urlEvento} src={url} alt={name}/>
              <h2>{name}<br></br>{date}</h2>
            </div>
        </a>
}