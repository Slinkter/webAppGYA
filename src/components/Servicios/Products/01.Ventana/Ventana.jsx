import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import ItemProduct from "../ItemProduct";
/*  */
import { listVentana } from "../../../../img/products/01.Ventanas/db_ventana";

import "../ProductStyle.css";

const Ventana = () => {
  return (
    <NavWrapper>
      {/* NOVA */}
      <section>
        <div className="  m-0 ">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> SISTEMA NOVA </h2>
            </div>
          </section>

          <section className="container-fluid  animated fadeIn">
            <div className="products  mx-3">
              {listVentana.nova.map((item) => (
                <ItemProduct key={item.id} image={item.image} />
              ))}
            </div>
          </section>
        </div>
      </section>
      {/* SERIE */}
      <section>
        <div className="  m-0 ">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> SISTEMA SERIE 25 </h2>
            </div>
          </section>
          <br />
          <section className="container-fluid  animated fadeIn">
            <div className="products  mx-3">
              {listVentana.serie.map((item) => (
                <ItemProduct key={item.id} image={item.image} />
              ))}
            </div>
          </section>
        </div>
      </section>
      <br />

      <Footer />
    </NavWrapper>
  );
};

export default Ventana;
