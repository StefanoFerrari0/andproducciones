import React from "react";

export default function Banner({children, hero})
{
  return <header className={hero}>
            <h1>{children}</h1>
          </header>;
}