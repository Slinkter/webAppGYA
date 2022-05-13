import ItemService from "./ItemServicio";
import ventana from "../../img/service/01.Ventanas/init_ventana02.jpg";
import Mampara from "../../img/service/02.Mampara/mampara21.jpeg";
import puertaducha from "../../img/service/03.Puertadeducha/init_ducha01.jpg";
import techopoli from "../../img/service/04.TechoPoli/techopoli02.jpg";
import baranda from "../../img/service/05.Barandas-parapeto-balcones/barandaacero06.jpg";
import muro from "../../img/service/01.Ventanas/ventananova01.jpeg";
import lamseg from "../../img/service/02.Mampara/mampara16.jpg";
import areanado from "../../img/service/02.Mampara/mampara23.jpg";
import puertavidrio from "../../img/service/09.Puerta-de-vidrio/puertaaluminio11.jpeg";
import puertaserie from "../../img/service/10.Puerta-en-serie/puertaaluminio20.JPG";
import celocias from "../../img/service/11.Celosias/init_celosias01.jpeg";
import frenos from "../../img/service/12.Freno-hidraulico/IMG_20220212_104555.jpg";


import "./servicios.css";

export default function Service() {
  const listService = [
    {
      id: 1,
      image: ventana,
      name: "Ventana",
      link: "https://bit.ly/3HuT0Eq",
    },
    {
      id: 2,
      image: Mampara,
      name: "Mampara",
      link: "https://www.facebook.com/media/set/?set=a.414060650462803&type=3/?from=GoogleBT",
    },
    {
      id: 3,
      image: puertaducha,
      name: "Puerta de Ducha ",
      link: "https://www.facebook.com/media/set/?set=a.414060420462826&type=3?from=GoogleBT",
    },
    {
      id: 4,
      image: techopoli,
      name: "Techo Policarbonato",
      link: "https://www.facebook.com/media/set/?set=a.414060237129511&type=3?from=GoogleBT",
    },
    {
      id: 5,
      image: baranda,
      name: "Barandas de acero",
      link: "https://www.facebook.com/media/set/?set=a.414060023796199&type=3?from=GoogleBT",
    },
    {
      id: 6,
      image: muro,
      name: "Muro de Cortina",
      link: "https://www.facebook.com/gyacompany?from=GoogleBT",
    },
    {
      id: 7,
      image: lamseg,
      name: "Lamina de seguridad",
      link: "https://www.facebook.com/media/set/?set=a.114319533770251&type=3?from=GoogleBT",
    },
    {
      id: 8,
      image: areanado,
      name: "Arenado de cristales",
      link: "https://www.facebook.com/media/set/?set=a.114319533770251&type=3?from=GoogleBT",
    },
    {
      id: 9,
      image: puertavidrio,
      name: "Puerta de Vidrio",
      link: "https://www.facebook.com/media/set/?set=a.414059690462899&type=3?from=GoogleBT",
    },
    {
      id: 10,
      image: puertaserie,
      name: "Puerta en serie ",
      link: "https://www.facebook.com/media/set/?set=a.114380903764114&type=3?from=GoogleBT",
    },
    {
      id: 11,
      image: celocias,
      name: "Celosías",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
    {
      id: 12,
      image: frenos,
      name: "Freno hidráulico ",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
  ];

  return (
    <section className="bg_servicios">
      <div className="container py-5">
        <div className=" mx-auto space_servicio text-center ">
          <h2 className=" animated fadeIn  mt-5 mb-2">SERVICIOS</h2>
          <p className="animated fadeIn  lead text-secondary mt-2">
            Nosotros ofrecemos el servicio de emsablaje e instalación de
            cristales.
          </p>
        </div>
        <section className="products animated fadeIn">
          {listService.map((servicio) => {
            return <ItemService key={servicio.id} {...servicio} />;
          })}
        </section>
      </div>
    </section>
  );
}
