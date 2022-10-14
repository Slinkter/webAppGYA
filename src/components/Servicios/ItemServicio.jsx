import React from "react";
import defaultImage from "../../img/calidad.jpg";
import "./ItemServicio.css";

function ItemService(props) {
    const { image, name, link } = props;

    return (
        <article className="product growServicio">
            <h4 className="m-4  pSize ">{name || "servicio"}</h4>

            <img src={image || defaultImage} alt={name} />

            <a
                href={link}
                className="mx-4 my-4 btn btn-primary btn-lg "
            >
                Catálogo
            </a>
        </article>
    );
}

export default ItemService;
