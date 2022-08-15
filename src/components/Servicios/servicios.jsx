import ItemService from "./ItemServicio";
//
import ventana from "../../img/webService/init01.jpg";
import Mampara from "../../img/webService/init02.jpg";
import puertaducha from "../../img/webService/init03.jpg";
import techopoli from "../../img/webService/init04.jpg";
import parapeto from "../../img/webService/init05.jpg";
import baranda from "../../img/webService/init06.jpg";
import balcon from "../../img/webService/init07.jpg";
import muro from "../../img/webService/init08.jpg";
import lamseg from "../../img/webService/init09.jpg";
import areanado from "../../img/webService/init10.jpg";
import puertavidrio from "../../img/webService/init11.jpg";
import puertaserie from "../../img/webService/init12.jpg";
import celocias from "../../img/webService/init13.jpg";
import frenos from "../../img/webService/init14.jpg";
import fachada from "../../img/webService/init15.jpg";
import mosquetero from "../../img/webService/init16.jpg";


import "./servicios.css";

export default function Service() {
  const listService = [
    {
      id: 1,
      image: ventana,
      name: "Ventanas",
      link: "https://bit.ly/3HuT0Eq",
    },
    {
      id: 2,
      image: Mampara,
      name: "Mamparas",
      link: "https://www.facebook.com/media/set/?set=a.414060650462803&type=3/?from=GoogleBT",
    },
    {
      id: 3,
      image: puertaducha,
      name: "Puertas de Ducha ",
      link: "https://www.facebook.com/media/set/?set=a.414060420462826&type=3?from=GoogleBT",
    },
    {
      id: 4,
      image: techopoli,
      name: "Techo de Policarbonato",
      link: "https://www.facebook.com/media/set/?set=a.414060237129511&type=3?from=GoogleBT",
    },
    {
      id: 5,
      image: parapeto,
      name: "Parapeto ",
      link: "https://www.facebook.com/media/set/?set=a.414060023796199&type=3?from=GoogleBT",
    },
    {
      id: 6,
      image: baranda,
      name: "Barandas de Acero",
      link: "https://www.facebook.com/gyacompany?from=GoogleBT",
    },
    {
      id: 7,
      image: balcon,
      name: "Balcones",
      link: "https://www.facebook.com/media/set/?set=a.414059690462899&type=3?from=GoogleBT",
    },
    {
      id: 8,
      image: muro,
      name: "Muro de Cortina ",
      link: "https://www.facebook.com/media/set/?set=a.114380903764114&type=3?from=GoogleBT",
    },
    {
      id: 9,
      image: lamseg,
      name: "Lámina de seguridad",
      link: "https://www.facebook.com/media/set/?set=a.114319533770251&type=3?from=GoogleBT",
    },
    {
      id: 10,
      image: areanado,
      name: "Empavonado de cristales",
      link: "https://www.facebook.com/media/set/?set=a.114319533770251&type=3?from=GoogleBT",
    },
    
    {
      id: 11,
      image: puertavidrio,
      name: "Puerta de Vidrio",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
    {
      id: 12,
      image: puertaserie,
      name: "Puerta en serie ",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
    {
      id: 13,
      image: celocias,
      name: "Celosías",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
    {
      id: 14,
      image: frenos,
      name: "Freno hidráulico ",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
    
    {
      id: 15,
      image: fachada,
      name: "Fachada integral",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    },
    {
      id: 16,
      image: mosquetero,
      name: "Mosquetero ",
      link: "https://www.facebook.com/gyacompany/?from=GoogleBT",
    }
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
