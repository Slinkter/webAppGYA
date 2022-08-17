import React from "react";
import defaultImage from "../../img/calidad.jpg";


import "./Obra.css";

function Obra(props) {
    const { image, residencial, name, address, numdpto, year } = props;
    return (
        <article className="obra grow">
            <img src={image || defaultImage} alt={residencial} />
          
            <h4 className="mt-4 ">{residencial || "residencial"}</h4>
            <hr className=" mx-5 "/>
            <p className="m-1 ">{name || "empresa"}</p>
            <p className="m-1 ">{address || "dirección"}</p>
          
            <p className=" mb-3 ">{year || "año"}</p>
        </article>
    );
}

export { Obra };
