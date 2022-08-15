import presupuesto from "../../img/presupuesto.jpg";
import budget from "../../img/budget.jpg";
import aluminum from "../../img/aluminum.jpg";
import documents from "../../img/document.jpg";
import calidad from "../../img/calidad.jpg";
import "./beneficios.css";
export default function Beneficio() {
    return (
        <section>
            <article>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm bloque-sector01 d-flex  text-white ">
                            <div className="container m-auto text-center  ">
                                <p>.</p>
                                <hr />
                                <h2 className="h2-block-text  ">
                                    Constructoras
                                </h2>
                                <hr />
                                <p>.</p>

                                <p className="p-2">Tenemos de más de 10 proyectos de obra de construcción entregados   </p>
                            </div>
                           
                        </div>
                        <div className="col-sm bloque-sector02 d-flex flex-column text-white growsector ">
                            <div className="container m-auto text-center ">
                                <p>.</p>
                                <hr />
                                <h2 className="h2-block-text ">Negocios</h2>
                             
                                <hr />
                                <p>.</p>
                                <p className="p-2"> Ofrecemos servicio de mantenimiento para locales y negocios   </p>
                            </div>
                        </div>
                        <div className="col-sm bloque-sector03 d-flex flex-column text-white growsector">
                            <div className="container m-auto text-center">
                                <p>.</p>
                                <hr />
                                <h2 className="h2-block-text  ">Hogares</h2>
                                <hr />
                                <p>.</p>
                                <p className="p-2"> Tenemos materiales de calidad en diversos productos y servicios   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
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
                                Presupuestos{" "}
                                <span class="text-muted"> Online</span>
                            </h2>
                            <p className="mb-4  mr-5 p_empresa">
                                Realizamos visitas a domicilio sin costo alguno
                                o puedes enviarnos sus requerimientos y le
                                enviamos un presupuesto digital vía whatsapp o
                                messenger en menos de 24 horas .
                            </p>
                            <ul className="list-unstyled mb-5">
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Agendar Visita
                                </li>
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Visita tecnica sin costo
                                </li>
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
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

                                <button className="my-2 mx-3 col-lg-5 col-md-11   btn btn-outline-primary">
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
                            <img
                                className="img_presupuesto"
                                src={budget}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <div className="container-fluid d-flex flex-column">
                    <div className="row my-auto">
                        <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4 order-md-2 ">
                            <h2 class="mb-4 title_empresa">
                                Aluminio{" "}
                                <span class="text-muted"> y Cristal </span>
                            </h2>
                            <p className="mb-4  mr-5 p_empresa">
                                Trabajamos con materiales que cumplan con normas
                                de calidad y profesionales con años de
                                experiencias en la instalación de cristales.
                            </p>
                            <ul className="list-unstyled mb-5">
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Profesionales y técnicos con años de
                                    experiencia
                                </li>
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Materiales que cumple los estándares de
                                    calidad.
                                </li>
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Ofertas y promociones en cristales
                                    templados.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12  order-md-1 m-0 p-0">
                            <img
                                className="img_presupuesto"
                                src={aluminum}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex flex-column">
                    <div className="row my-auto">
                        <div className="col-lg-4 col-md-10 col-sm-8 m-auto py-5 my-5 px-4">
                            <h2 class="mb-4 title_empresa">
                                Garantía{" "}
                                <span class="text-muted"> y Calidad</span>
                            </h2>
                            <p className="mb-4  mr-5 p_empresa">
                                Nuestros servicios de instalación tiene una
                                garantía de 6 meses .
                            </p>
                            <ul className="list-unstyled mb-5">
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Entrega de Boleta y/o Factura
                                </li>
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Cambio de accesorios sin costo
                                </li>
                                <li className="mb-2">
                                    <i
                                        className="fa fa-check px-2"
                                        aria-hidden="true"
                                    ></i>
                                    Certificado de garantía
                                </li>
                            </ul>
                            <div className="text-center"></div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0 ">
                            <img
                                className="img_presupuesto"
                                src={calidad}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
