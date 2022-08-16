import React from "react";
import ventana from "../../img/webService/init01.jpg";
import { Obra } from "./Obra";

function Proyects() {
    
    const listProject = [
        {
            id: 1,
            image: ventana,
            residencial: "Ventanas",
            empresa: "empresa",
            direccion: "direccion",
            numdpto: "1",
        },
        {
            id: 2,
            image: ventana,
            residencial: "Ventanas",
            empresa: "empresa",
            direccion: "direccion",
            numdpto: "2",
        },
        {
            id: 3,
            image: ventana,
            residencial: "Ventanas",
            empresa: "empresa",
            direccion: "direccion",
            numdpto: "3",
        },
    ];
    return (
        <section className="bg_servicios">
            <div className="container py-5">
                <div className=" mx-auto space_servicio text-center ">
                    <h2 className=" animated fadeIn  mt-3 mb-2">Proyectos</h2>

                    <p className="animated fadeIn  lead text-secondary mt-2">
                        <hr className="  mx-3 " />
                        Nuestros servicios de instalación cuenta con productos y
                        accesorios que cumple con los estándares de calidad.
                    </p>
                </div>
                <section className="products animated fadeIn">
                {listProject.map((servicio) => {
                    return <Obra key={servicio.id} {...servicio} />;
                })}
                </section>
            </div>
        </section>
    );
}

export default Proyects;
