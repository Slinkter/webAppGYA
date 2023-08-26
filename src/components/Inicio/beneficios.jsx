import budget from "../../img/budget.jpg";
import aluminum from "../../img/aluminum.jpg";
import calidad from "../../img/calidad.jpg";
//
import "./beneficios.css";
export default function Beneficio() {
  //clientes
  return (
    <section>
      {/* Cliente */}
      <article>
        <div className="container-fluid">
          <div className="row">
            <div class=" bg_ubicacion text-center ">
              <div class="container">
                <h2 class="titleh2">Clientes</h2>
                <p class="lead text-secondary">
                  Atenemos diversos requerimientos en varios sectores
                </p>
              </div>
            </div>
            <div className="col-sm bloque-sector01 d-flex  text-white ">
              <div className="container m-auto text-center  ">
                <h2 className=" titleClient ">Constructoras</h2>
                <p className="p-2 parrafoClient">
                  Tenemos de más de 10 proyectos de obra de construcción
                  entregados.
                </p>
              </div>
            </div>
            <div className="col-sm bloque-sector02 d-flex flex-column text-white growsector ">
              <div className="container m-auto text-center ">
                <h2 className="titleClient ">Negocios</h2>
                <p className="p-2 parrafoClient">
                  Ofrecemos diversos servicios de mantenimiento para locales y
                  negocios{" "}
                </p>
              </div>
            </div>
            <div className="col-sm bloque-sector03 d-flex flex-column text-white growsector">
              <div className="container m-auto text-center">
                <h2 className="titleClient">Hogares</h2>
                <p className="p-2 parrafoClient">
                  Tenemos materiales de calidad en diversos productos y
                  servicios
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* Empresa */}
      <div class=" bg_ubicacion text-center ">
        <div class="container">
          <h2 class="titleh2">Empresa</h2>
          <p class="lead text-secondary">
            Contamos con 20 años de experiencia instalación de cristales y
            aluminio
          </p>
        </div>
      </div>
      {/* Presupuesto Online */}
      <article>
        <div className="container-fluid ">
          <div className="row my-auto ">
            <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4">
              <h2 class="mb-4 title_empresa">
                Presupuestos
                <span class="text-muted"> Online</span>
              </h2>
              <p className="mb-4  mr-5 p_empresa">
                Realizamos visitas a domicilio{" "}
                <span className="underparrafo"> sin costo </span>
                🏠 o puedes escribirnos vía whatsapp ✍️ sobre un servicio que
                deseas y te enviamos un presupuesto📋 .
              </p>
              <ul className="list-unstyled mb-5">
                <li className="mb-2">
                  <i className="fa fa-check px-2" aria-hidden="true"></i>
                  Agendar Visita
                </li>
                <li className="mb-2">
                  <i className="fa fa-check px-2" aria-hidden="true"></i>
                  Visita técnica sin costo
                </li>
                <li className="mb-2">
                  <i className="fa fa-check px-2" aria-hidden="true"></i>
                  Precio Negociable
                </li>
              </ul>
              <div className="text-center">
                <button className="my-2 mx-3 col-lg-5 col-md-11   btn btn-outline-success ">
                  <a
                    href="https://wa.me/51996537435?text=Quisiera una cotización para .... "
                    className=""
                  >
                    <i class="fa-brands fa-whatsapp mx-2 "></i>
                    Solicitar Presupuesto
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0  ">
              <img className="img_presupuesto" src={budget} alt="" />
            </div>
          </div>
        </div>
      </article>
      {/* Aluminio y Cristal */}
      <article>
        <div className="container-fluid d-flex flex-column">
          <div className="row my-auto">
            <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4 order-md-2 ">
              <h2 class="mb-4 title_empresa">
                Materiales <span class="text-muted"> y Trabajo </span>
              </h2>
              <p className="mb-4  mr-5 p_empresa">
                Trabajamos con materiales que cumplan con normas de calidad y
                profesionales con años de experiencias en la instalación de
                cristales y aluminios.
              </p>
              <ul className="list-unstyled mb-5">
                <li className="mb-2">
                  <i className="fa fa-check px-2" aria-hidden="true"></i>
                  Profesionales y técnicos con años de experiencia
                </li>
                <li className="mb-2">
                  <i className="fa fa-check px-2" aria-hidden="true"></i>
                  Materiales que cumple los estándares de calidad.
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
      </article>
      {/* Garantia  y Producto */}
      <article>
        <div className="container-fluid d-flex flex-column">
          <div className="row my-auto">
            <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4">
              <h2 class="mb-4 title_empresa">
                Garantía <span class="text-muted"> y Producto</span>
              </h2>
              <p className="mb-4  mr-5 p_empresa">
                Ofrecemos materiales que cumplen con los estándares de calidad y
                los productos instalados tienen una garantía de 6 meses .
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
                  Certificado de garantía
                </li>
                <li className="mb-2">
                  <i className="fa fa-check px-2" aria-hidden="true"></i>
                  Proveedores nacionales
                </li>
              </ul>
              <div className="text-center"></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 ">
              <img className="img_presupuesto" src={calidad} alt="" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
