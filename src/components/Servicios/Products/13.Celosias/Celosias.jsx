import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import ItemProduct from "../ItemProduct";
import { listCelosias } from "../../../../img/products/13.Celosias/db_celosias";

const Celosias = () => {
  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> Celosías </h2>
              <p className="lead text-secondary"> Estructura de Aluminio </p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listCelosias.celocias.map((item) => (
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

export default Celosias;
