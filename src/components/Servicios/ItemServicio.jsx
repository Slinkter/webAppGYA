import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService({ image, name, link, plink }) {
  const handleErrorImage = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImage;
  };

  return (
    <article
      className="bg_product col-sm  d-flex flex-column     "
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.283), rgba(4, 4, 4, 0.284)), url(${image})`,
      }}
      onError={handleErrorImage}
    >
      <div className="container m-auto text-center   ">
        <h2 className=" titleClient ">{name}</h2>
      </div>
    </article>
  );
}

export default ItemService;
