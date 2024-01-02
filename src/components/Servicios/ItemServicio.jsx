import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link, plink } = props;

  return (
    <article className="product growServicio shadow-lg   mb-2">
      <a href={plink} className=" ">
        <img src={image || defaultImage} alt={name} />
        <h4 className="pSize m-4 product-title">{name || "servicio"}</h4>
      </a>
    </article>
  );
}

export default ItemService;
