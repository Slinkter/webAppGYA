import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link } = props;

  return (
    <article className="product ">
      <img src={image || defaultImage} alt={name} />
      <h4 className="mt-4">{name || "servicio"}</h4>
      <a href={link} className="mb-4 btn btn-outline-primary ">
        Catálogos
      </a>
    </article>
  );
}

export default ItemService;
