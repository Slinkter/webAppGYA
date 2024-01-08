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
      <div className="container m-auto text-center text-white">
        <h4 className="mt-3 titleClient">{residencial || "residencial"}</h4>
        <hr
          className="m-3 mx-5"
          style={{ height: "2px", backgroundColor: "white", opacity: "0.70" }}
        />
        <p className="m-1 ">{name || "empresa"}</p>
        <p className="m-1">{address || "dirección"}</p>
        <p className="mb-3">{year || "año"}</p>
      </div>
    </article>
  );
}

export { Obra };
