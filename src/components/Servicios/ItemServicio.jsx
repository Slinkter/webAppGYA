import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
    const { image, name, link } = props;

    return (
        <article className="product grow">
            <h4 className="m-4 ">{name || "servicio"}</h4>
            <img src={image || defaultImage} alt={name} />
            <a
                href={link}
                className="m-4 btn btn-outline-primary btn-lg btn-block"
            >
                Catálogo
            </a>
        </article>
    );
}

export default ItemService;
