import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link } = props;

  /*  <a href={link} className="mb-4 btn btn-outline-primary ">
  Catálogos
  </a> */

  return (
    <article className="product grow">
    <h4 className="m-4 ">{name || "servicio"}</h4>
      <img src={image || defaultImage} alt={name} />  
      <a href={link} className="m-4 btn btn-outline-primary">Catálogo</a>
    </article>
  );
}

export default ItemService;
