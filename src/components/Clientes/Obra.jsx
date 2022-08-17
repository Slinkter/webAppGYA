import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./Obra.css";

function Obra(props) {
    const { image, residencial, name, address, numdpto, year } = props;
    return (
        <article className="product grow">
            <img src={image || defaultImage} alt={residencial} />
          
            <h4 className="mt-4 ">{residencial || "residencial"}</h4>
            <hr className=" mx-5 "/>
            <h5 className="m-1 ">{name || "empresa"}</h5>
            <h5 className="m-1 ">{address || "dirección"}</h5>
            <h5 className="m-1 ">{numdpto || "numdpto"} Departamentos</h5>
            <h5 className=" mb-3 ">{year || "año"}</h5>
        </article>
    );
}

export { Obra };
