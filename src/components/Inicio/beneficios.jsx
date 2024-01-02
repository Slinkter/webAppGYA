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
            {/* Clientes */}
            <div class=" bg_ubicacion text-center ">
              <div class="container">
                <h2 class="beneficio-title-h2">Clientes</h2>
                <p class="lead text-secondary">
                  Nuestros vidrios y aluminios pueden ayudar a crear proyectos
                  más seguros, eficientes y atractivos.
                </p>
              </div>
            </div>
            {/* Constructoras */}
            <div className="col-sm bloque-sector01 d-flex flex-column  text-white ">
              <div className="container m-auto text-center  ">
                <h2 className=" titleClient ">Constructoras</h2>
                <p className="parrafoClient">
                  Tenemos de más de 12 proyectos de obra de construcción
                  entregados.
                </p>
              </div>
            </div>
            {/* Negocios */}
            <div className="col-sm bloque-sector02 d-flex flex-column text-white  ">
              <div className="container m-auto text-center ">
                <h2 className="titleClient ">Negocios</h2>
                <p className=" parrafoClient">
                  Diversos servicios de mantenimiento para locales y negocios
                </p>
              </div>
            </div>
            {/* Hogares */}
            <div className="col-sm bloque-sector03 d-flex flex-column text-white ">
              <div className="container m-auto text-center">
                <h2 className="titleClient">Hogares</h2>
                <p className="parrafoClient">
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
          <h2 class="beneficio-title-h2">Empresa</h2>
          <p class="lead text-secondary">
            Contamos con más de 20 años de experiencia en la instalación de
            vidrios y aluminios.
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
                Solicita un presupuesto 📋{" "}
                <span className="underparrafo"> sin costo </span> y sin
                compromiso. Solo envíanos un mensaje por WhatsApp ✍️ con la
                información de tu proyecto. Realizamos visitas a domicilio 🏠 .
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
                <button
                  className="col-12 w-100 btn btn-success m-1 col-md-5 "
                  type="button"
                >
                  <a
                    href="https://wa.me/51996537435?text=Quisiera una cotización para .... "
                    className=""
                  >
                    <i class="fa-brands fa-whatsapp mx-2 "></i>
                    Solicita un presupuesto ahora
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 hidden-movil ">
              <img className="img_presupuesto" src={budget} alt="" />
            </div>
          </div>
        </div>
      </article>
      <hr className="show-hr" />
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
              <div className="text-center">
                <button
                  className="col-12 w-100 btn btn-success m-1 col-md-5 "
                  type="button"
                >
                  <a
                    href="https://wa.me/51996537435?text=Quisiera una cotización para .... "
                    className=""
                  >
                    <i class="fa-brands fa-whatsapp mx-2 "></i>
                    Solicita un presupuesto ahora
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  order-md-1 m-0 p-0 hidden-movil">
              <img className="img_presupuesto" src={aluminum} alt="" />
            </div>
          </div>
        </div>
      </article>
      {/* Garantia  y Producto */}
      <hr className="show-hr" />
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
              <div className="text-center">
                <button
                  className="col-12 w-100 btn btn-success m-1 col-md-5 "
                  type="button"
                >
                  <a
                    href="https://wa.me/51996537435?text=Quisiera una cotización para .... "
                    className=""
                  >
                    <i class="fa-brands fa-whatsapp mx-2 "></i>
                    Solicita un presupuesto ahora
                  </a>
                </button>
              </div>
              <div className="text-center"></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 hidden-movil">
              <img className="img_presupuesto" src={calidad} alt="" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
