import presupuesto from "../../img/presupuesto.jpg";
import budget from "../../img/budget.jpg";
import aluminum from "../../img/aluminum.jpg";
import documents from "../../img/document.jpg";
import calidad from "../../img/calidad.jpg";
import "./beneficios.css";
export default function Beneficio() {
  return (
    <section>
      <div class=" bg_ubicacion text-center ">
        <div class="container">
          <h2 class="titleh2">EMPRESA</h2>
          <p class="lead text-secondary">Canales de atención </p>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column">
        <div className="row my-auto">
          <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4">
            <h2 class="mb-4 title_empresa">
              Presupuestos <span class="text-muted"> Online</span>
            </h2>
            <p className="mb-4  mr-5 p_empresa">
              Nosotros estamos disponibles hacer una visita tecnica sin costo o
              puedes enviarnos tus medidas y nosotros te enviamos el presupuesto
              digital vía whatsapp o messenger en menos de 24 horas .
            </p>
            <ul className="list-unstyled mb-5">
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Agendar Visita
              </li>
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Visita tecnica sin costo
              </li>
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Precio Negociable
              </li>
            </ul>
            <div className="text-center">
              <button className="my-2 mx-3 col-lg-5 col-md-11   btn btn-outline-success">
                <i className="fa-brands fa-whatsapp mx-2"></i>
                Solicitar Presupuesto
              </button>

              <button className="my-2 mx-3 col-lg-5 col-md-11   btn btn-outline-primary">
                <i className="fa-brands fa-whatsapp mx-2"></i>
                Solicitar Visita Tecnica
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0  ">
            <img className="img_presupuesto" src={budget} alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column">
        <div className="row my-auto">
          <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4 order-md-2 ">
            <h2 class="mb-4 title_empresa">
              Aluminio <span class="text-muted"> y Cristal </span>
            </h2>
            <p className="mb-4  mr-5 p_empresa">
              Trabajamos con materiales que cumplan con normas de calidad y
              profesionales con años de experiencias en la instalación de
              cristales.
            </p>
            <ul className="list-unstyled mb-5">
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Profesionales con años de experiencia en instalación de
                cristales
              </li>
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Materiales que cumple los estandares de calidad.
              </li>
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Ofertas y promociones en cristales templados.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12  order-md-1 m-0 p-0">
            <img className="img_presupuesto" src={aluminum} alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column">
        <div className="row my-auto">
          <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4">
            <h2 class="mb-4 title_empresa">
              Garantía <span class="text-muted"> y Calidad</span>
            </h2>
            <p className="mb-4  mr-5 p_empresa">
              Nuestros servicios de instalación tiene una garantía de hasta 6
              meses una vez entragado y conformidad del cliente.También se puede
              cambiar los accesorios si no funciona correctamente.
            </p>
            <ul className="list-unstyled mb-5">
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Entrega de Boleta y/o Factura 
              </li>
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Cambio de accesorios sin costo 
              </li>
              <li className="mb-2">
                <i className="fa fa-check px-2" aria-hidden="true"></i>
                Certificado de garantia
              </li>
            </ul>
            <div className="text-center"></div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 ">
            <img className="img_presupuesto" src={calidad} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
