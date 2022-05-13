import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link } = props;

  /*  <a href={link} className="mb-4 btn btn-outline-primary ">
  Catálogos
  </a> */

  return (
    <article className="product ">
      <img src={image || defaultImage} alt={name} />
      <h4 className="m-4">{name || "servicio"}</h4>
    </article>
  );
}

export default ItemService;
