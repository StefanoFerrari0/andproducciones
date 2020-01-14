import React from "react";
import Title from "../Title";
import Banner from "../../../components/Home/Banner"


export default function EventOnly({ name, image, info, location, date, place }) {

    return <>
        <div>
            <Banner hero="eventoDefault"
                style={{ background: `url(${image}) center/ cover no-repeat` }}>
            </Banner>
            <div>
                <Title hero="title" title={name.toUpperCase()}></Title>
                <p className="bioEvent">{info}</p>

                {location}


            </div>
        </div>
    </>
}