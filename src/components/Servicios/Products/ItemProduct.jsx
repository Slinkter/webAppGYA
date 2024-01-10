import React from "react";
import defaultImage from "../../../img/calidad.jpg";
import "./Itemproduct.css";

function ItemService({ image }) {
  const handleErrorImage = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImage;
  };

  return (
    <article
      className="bg_product col-sm  d-flex flex-column   "
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.283), rgba(4, 4, 4, 0.284)), url(${image})`,
      }}
      onError={handleErrorImage}
    ></article>
  );
}

export default ItemService;
