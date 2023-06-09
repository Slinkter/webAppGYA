import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link } = props;

  return (
    <article className="product growServicio">
      <img src={image || defaultImage} alt={name} />
      <hr className="mt-4 mx-5" />
      <h4 className="pSize ">{name || "servicio"}</h4>
      <hr className="mb-2 mx-5" />
      <p className="lead text-secondary mt-2 "> servicio disponible</p>

      {/*  <a href={link} className="mx-4 my-4 btn btn-primary btn-lg ">
        Catálogo
      </a> */}
    </article>
  );
}

export default ItemService;
