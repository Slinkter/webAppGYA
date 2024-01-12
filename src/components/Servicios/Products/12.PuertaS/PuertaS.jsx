import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import ItemProduct from "../ItemProduct";
import { listPuertas } from "../../../../img/products/12.PuertaS/db_puertas";

const PuertaS = () => {
  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> Puerta Serie </h2>
              <p className="lead text-secondary"> Accesorios y Aluminio </p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listPuertas.puertas.map((item) => (
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

export default PuertaS;
