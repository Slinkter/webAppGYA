import ItemService from "./ItemServicio";
import { listService } from "./db_service";
import "./servicios.css";

export default function Service() {
  return (
    <section className="bg_servicios">
      <div className="container space_servicio animated fadeIn ">
        <div className="   ">
          <h2 className="mt-5 mb-2 pColorRed ">SERVICIOS</h2>
          <p className="lead text-secondary mt-2 ">
            Tenemos una amplia variedad de servicios de instalación en cristales
            y aluminios
          </p>
        </div>
      </div>
      <section className="container-fluid products animated fadeIn mb-5">
        {listService.map((servicio) => {
          return <ItemService key={servicio.id} {...servicio} />;
        })}
      </section>
    </section>
  );
}
