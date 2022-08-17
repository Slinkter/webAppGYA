import React from "react";
import ventana from "../../img/sectorcontruc.jpg";
import { Obra } from "./Obra";

function Proyects() {
    //image, residencial, name, address, numdpto, year
    const listProject = [
        {
            id: 1,
            image: ventana,
            residencial: "Residencial Miraflores",
            name: "Inversiones Beraca S.A.C.",
            address: "Miraflores",
            numdpto: "20",
            year: "Mayo 2012",
        },
        {
            id: 2,
            image: ventana,
            residencial: "Mirador de la Reserva",
            name: "Inmobiliaria Beraca & Bostad S.A.C.",
            address: "Lince",
            numdpto: "50",
            year: "Octubre 2015",
        },
        {
            id: 3,
            image: ventana,
            residencial: "Residencial Bambamarca",
            name: "Personal Natural",
            address: "Cajamarca",
            numdpto: "21",
            year: "Enero 2018",
        },
        {
            id: 4,
            image: ventana,
            residencial: "Residencial Edificación  ",
            name: "GHS CONSTRUCTORA S.A.C.",
            address: "San Jua de Miraflores",
            numdpto: "26",
            year: "Noviembre 2020",
        },
        {
            id: 5,
            image: ventana,
            residencial: "Residencial Puerta verde ",
            name: "Grupo DyM Constructora S.A.C.",
            address: "Ate  ",
            numdpto: "18",
            year: "Junio 2019",
        },
        {
            id: 6,
            image: ventana,
            residencial: "Residencial Prado. ",
            name: "Grupo DyM Constructora S.A.C.",
            address: "Ate  ",
            numdpto: "24",
            year: "Febrero 2020",
        },
        {
            id: 7,
            image: ventana,
            residencial: "Residencial Prado",
            name: "Grupo DyM Constructora S.A.C.",
            address: "Ate  ",
            numdpto: "24",
            year: "Febrero 2020",
        },
        {
            id: 8,
            image: ventana,
            residencial: "Residencial Magdalena",
            name: "GHS CONSTRUCTORA S.A.C.",
            address: "Magdalena",
            numdpto: "12",
            year: "Agosto de 2021",
        },
        {
            id: 9,
            image: ventana,
            residencial: "Residencial Ventura",
            name: "Urbanica Proyectos Inmobiliarios S.A.C.",
            address: "San Miguel",
            numdpto: "14",
            year: "Febrero 2022",
        },
        {
            id: 10,
            image: ventana,
            residencial: " Residencial Maddy",
            name: "CONSTRUCTORA E INMOBILIARIA ICASA S.A.C",
            address: "Magdalena del mar",
            numdpto: "62",
            year: "Mayo 2022 ",
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
