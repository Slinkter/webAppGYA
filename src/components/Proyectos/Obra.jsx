import React from "react";

import "./Obra.css";

function Obra({ image, residencial, name, address, numdpto, year }) {
  return (
    <article
      className="bg_product  col-sm  d-flex flex-column "
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1083), rgba(4, 4, 4, 0.1084)), url(${image})`,
      }}
    >
      <div className="container m-auto text-center ">
        <h4 className="mt-3 obra__h4">{residencial || "residencial"}</h4>
        <hr className="m-3 mx-5 obra__hr" />
        <p className="m-1  obra__p">{name || "empresa"}</p>
        <p className="m-1 obra__p">{address || "dirección"}</p>
        <p className="mb-3 obra__p">{year || "año"}</p>
      </div>
    </article>
  );
}

export { Obra };
