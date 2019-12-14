import React from "react";

export default function Card({url, hero, name, date})
{
  return <div className = {hero}>
            <img src={url} alt={name}/>
            <h2>{name}<br></br>{date}</h2>
            </div>
}