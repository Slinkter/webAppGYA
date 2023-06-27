import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import "./ventana.css";

import nova from "../../../../img/products/01.Ventanas/IMG_0534.jpg";
import serie from "../../../../img/products/01.Ventanas/IMG_9209.jpg";
const Ventana = () => {
  return (
    <NavWrapper>
      {/*  */}
      <section className="bg_servicios">
        <div className="container py-5 animated fadeIn">
          <div className=" mx-auto space_servicio text-center ">
            <h2 className="mt-3 mb-2 pColorRed ">VENTANAS</h2>
            <p className="lead text-secondary mt-2 ">
              Disponemos de 02 sistema de ventanas
            </p>
          </div>
          {/* Sistema Novas */}
          <article className="mb-4">
            <div className="cardVentanaNova container-fluid ">
              <div className="row  ">
                <div className="col-lg-4 col-md-10 col-sm-8 m-auto containertext ">
                  <h2 class="mb-4 title_empresa">
                    Ventanas <br />
                    <span class="text-muted"> Sistema Nova</span>
                  </h2>
                  <p className="mb-4  mr-5 p_empresa">
                    Realizamos visitas a domicilio
                    <span className="underparrafo"> sin costo </span>
                    🏠 o puedes escribirnos vía whatsapp ✍️ sobre un servicio
                    que deseas y te enviamos un presupuesto📋 .
                  </p>
                  <ul className="list-unstyled mb-5">
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Sistema Corredizo
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Cristal Incoloro de 6 mm
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Perfil de Aluminio
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Lamina de seguridad (opcional)
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12  p-0  ">
                  <img className="img_ventana" src={nova} alt="" />
                </div>
              </div>
            </div>
          </article>
          {/* Sistema Serie */}
          {/* order-md-2 */}
          <article className="mb-4">
            <div className="cardVentanaNova container-fluid ">
              <div className="row  ">
                <div className="col-lg-4 col-md-10 col-sm-8 m-auto containertext  order-md-2 ">
                  <h2 class="mb-4 title_empresa">
                    Ventanas <br />
                    <span class="text-muted"> Sistema Serie</span>
                  </h2>
                  <p className="mb-4  mr-5 p_empresa">
                    Realizamos visitas a domicilio
                    <span className="underparrafo"> sin costo </span>
                    🏠 o puedes escribirnos vía whatsapp ✍️ sobre un servicio
                    que deseas y te enviamos un presupuesto📋 .
                  </p>
                  <ul className="list-unstyled mb-5">
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Sistema Corredizo
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Cristal Incoloro de 6 mm
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Perfil de Aluminio
                    </li>
                    <li className="mb-2">
                      <i className="fa fa-check px-2" aria-hidden="true"></i>
                      Lamina de seguridad (opcional)
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12  p-0  order-md-1">
                  <img className="img_ventana" src={serie} alt="" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/*  */}
      <Footer />
    </NavWrapper>
  );
};

export default Ventana;
