import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
/*  */
import { listVentana } from "../../../../img/products/01.Ventanas/db_ventana";
/*  */
import "./ventana.css";

const Ventana = () => {
  console.log(listVentana.nova);

  return (
    <NavWrapper>
      {/*  */}
      <section className="bg_servicios ">
        <div className="container-fluid  animated fadeIn ">
          <div className=" mx-auto space_servicio  ">
            <h2 className=" pColorRed ">VENTANAS </h2>
          </div>

          <section className="products animated fadeIn"></section>

          <div className=" container">
            <h3> Sistema Nova</h3>
            <div className="row">
              <div className="col-sm-6 col-md-4 text-center">
                <img className="img_ventana" alt="Park" />
                <p className="">Sistema corredizo</p>
              </div>
            </div>
            <br />
            <h3> Sistema Serie 25</h3>
            <div className="row">
              <div className="col-sm-6 col-md-4 ">
                <img className="img_ventana" alt="Park" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <Footer />
    </NavWrapper>
  );
};

export default Ventana;
