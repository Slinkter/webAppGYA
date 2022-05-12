import ItemService from "./ItemServicio";
import "./servicios.css";

export default function Service() {
  const listService = [
    {
      id: 1,
      image: "",
      name: "Ventana",
      link: "https://www.facebook.com/media/set/?set=a.414054357130099&type=3",
    },
    {
      id: 2,
      image: "",
      name: "Mampara",
      link: "https://www.facebook.com/media/set/?set=a.414060650462803&type=3",
    },
    {
      id: 3,
      image: "",
      name: "Puerta de Ducha ",
      link: "https://www.facebook.com/media/set/?set=a.414060420462826&type=3",
    },
    {
      id: 4,
      image: "",
      name: "Techo Policarbonato",
      link: "https://www.facebook.com/media/set/?set=a.414060237129511&type=3",
    },
    {
      id: 5,
      image: "",
      name: "Barandas de acero, ",
      link: "https://www.facebook.com/media/set/?set=a.414060023796199&type=3",
    },
    {
      id: 6,
      image: "",
      name: "Muro de Cortina",
      link: "https://www.facebook.com/gyacompany",
    },
    {
      id: 7,
      image: "",
      name: "Lamina de seguridad",
      link: "https://www.facebook.com/media/set/?set=a.114319533770251&type=3",
    },
    {
      id: 8,
      image: "",
      name: "Arenado de cristales",
      link: "https://www.facebook.com/media/set/?set=a.114319533770251&type=3",
    },
    {
      id: 9,
      image: "",
      name: "Puerta de Vidrio",
      link: "https://www.facebook.com/media/set/?set=a.414059690462899&type=3",
    },
    {
      id: 10,
      image: "",
      name: "Puerta en serie ",
      link: "https://www.facebook.com/media/set/?set=a.114380903764114&type=3",
    },
    {
      id: 11,
      image: "",
      name: "Celosías",
      link: "https://www.facebook.com/gyacompany",
    },
    {
      id: 12,
      image: "",
      name: "freno hidráulico ",
      link: "https://www.facebook.com/gyacompany",
    },
  ];

  return (
    <section className="bg_servicios">
      <div className="container ">
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
