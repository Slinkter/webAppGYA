import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
/*  */

/*  */
import "./ventana.css";
import { listVentana } from "../../../../img/products/01.Ventanas/db_ventana";

const Ventana = () => {
  console.log(listVentana.nova);
  console.log(listVentana.serie);
  return (
    <NavWrapper>
      {/*  */}
      <section className=" ">
        <div className=" animated fadeIn m-0">
          <section className="text-center m-0">
            <div className="container__bgService mb-3">
              <h2 className="ventana__h2"> SISTEMA NOVA </h2>
            </div>
          </section>

          <div className="products animated fadeIn">
            {listVentana.nova.map((item) => (
              <div className="  ">
                <img
                  className="container__imgProduct"
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" ">
        <div className=" animated fadeIn m-0">
          <section className="text-center m-0">
            <div className="container__bgService mb-3">
              <h2 className="ventana__h2"> SISTEMA SERIE 25 </h2>
            </div>
          </section>

          <div className="products animated fadeIn">
            {listVentana.serie.map((item) => (
              <div className="  ">
                <img
                  className="container__imgProduct"
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />

      <Footer />
    </NavWrapper>
  );
};

export default Ventana;
