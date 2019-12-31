import React from "react";

export default function Service({classImg, classInfo, url, p, title})
{
  return  <div className="service">
                <img className={classImg} src={url} alt={title}/>
                    <div align="center"className={classInfo}> 
                        <h1>{title}</h1>
                        <p>{p}</p>
                    </div>
            </div>
}