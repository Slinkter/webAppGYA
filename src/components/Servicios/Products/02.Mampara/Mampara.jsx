import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import "./Mampara.css";

import nova from "../../../../img/products/02.Mampara/m_nova.jpeg";
import serie from "../../../../img/products/02.Mampara/m_serie.jpg";

const Mampara = () => {
  return (
    <NavWrapper>
      {/*  */}
      <section className="bg_servicios animated fadeIn">
        <div className="container py-5 animated fadeIn">
          <div className=" mx-auto space_servicio text-center ">
            <h2 className="mt-3 mb-2 pColorRed ">Mampara</h2>
            <p className="lead text-secondary mt-2 px-5">
              Separador de Ambientes
            </p>
          </div>
          {/* Sistema Novas */}
          <article className="mb-4">
            <div className="container-fluid ">
              <div className="cardMamparaNova ">
                <div className="col-lg-4 col-md-10 col-sm-8 m-auto containertext ">
                  <div className="m-0 p-0">
                    <h2 class="mb-4 title_empresa ">
                      Mamparas <br />
                      <span class="text-muted"> Sistema Nova</span>
                    </h2>
                    <p className="mb-4  mr-5 p_empresa">
                      Util para la creacion o separacion de ambientes en
                      interiores de hogares
                    </p>
                    <ul className="list-unstyled mb-5">
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Sistema Corredizo
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Cristal 8 mm ( incoloro | bronce )
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Perfil de Aluminio
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Seguro de Ventana
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Lamina de seguridad ( opcional )
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Empavonado ( opcional )
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12   p-0  ">
                  <img className="img_mampara" src={nova} alt="" />
                </div>
              </div>
            </div>
          </article>
          {/* Sistema Serie */}
          {/* order-md-2 */}
          <article className="mb-4">
            <div className="container-fluid ">
              <div className="cardMamparaNova ">
                <div className="col-lg-4 col-md-10 col-sm-8 m-auto  containertext order-md-2 ">
                  <div className="m-0 p-0">
                    <h2 class="mb-4 title_empresa">
                      Mamparas <br />
                      <span class="text-muted"> Sistema Serie</span>
                    </h2>
                    <p className="mb-4  mr-5 p_empresa">
                      Este sistema esta diseñado para la reducción de ruido de
                      la calle y son ideales para dividir espacios en oficinas,
                      restaurantes, salones de eventos y otros entornos
                      comerciales, brindando áreas separadas para diferentes
                      actividades.
                    </p>
                    <ul className="list-unstyled mb-5">
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Sistema Corredizo
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Cristal 8 mm ( incoloro | bronce )
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Marco de Aluminio
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Sistema de cierre push
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Lamina de seguridad ( opcional )
                      </li>
                      <li className="mb-2">
                        <i className="fa fa-check px-2" aria-hidden="true"></i>
                        Empavonado ( opcional )
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12  p-0  containertext order-md-1">
                  <img className="img_mampara" src={serie} alt="" />
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

export default Mampara;
