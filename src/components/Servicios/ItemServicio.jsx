import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link, plink } = props;

  return (
    <article className="product growServicio">
      <img src={image || defaultImage} alt={name} />
      <h4 className="pSize m-4">{name || "servicio"}</h4>
      <a hidden href={plink} className=" mx-4 my-4 btn btn-primary btn-lg ">
        Catálogo
      </a>
    </article>
  );
}

export default ItemService;
