import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
  const { image, name, link, plink } = props;

  return (
    <article
      className="product col-sm  d-flex flex-column  text-white"
      style={{
        backgroundImage: ` url(${image})`,
      }}
    >
      <div className="container m-auto text-center   ">
        <h2 className=" titleClient ">{name}</h2>
      </div>
    </article>
  );
}

export default ItemService;

/* 



<article className="product  shadow-lg   ">
      <a href={plink} className=" ">
        <img src={image || defaultImage} alt={name} />
        <h4 className="m-4 product-title">{name || "servicio"}</h4>
      </a>
    </article>
    
    */
