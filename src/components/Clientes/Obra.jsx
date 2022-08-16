import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./Obra.css";

function Obra(props) {
    const { image, residencial, empresa, direccion, numdpto } = props;
    return (
        <article className="product grow">
            <img src={image || defaultImage} alt={residencial}  />
            <h4 className="m-4 ">{residencial || "residencial"}</h4>
            <h5 className="m-1 ">{empresa || "empresa"}</h5>
            <h5 className="m-1 ">{direccion || "direccion"}</h5>
            <h5 className="m-1 ">{numdpto || "numdpto"}</h5>
        </article>
    );
}

export  {Obra};
