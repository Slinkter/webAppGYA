import ItemService from "./ItemServicio";
import { listService } from "./db_service";
import "./servicios.css";

export default function Service() {
  return (
    <section className="bg_servicios ">
      <div className="container-fluid  animated fadeIn ">
        <div className=" mx-auto space_servicio  ">
          <h2 className=" pColorRed ">SERVICIOS</h2>
          <p className="lead text-secondary mt-2 ">
            Tenemos una amplia variedad de servicios de instalación en cristales
            y aluminios
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
