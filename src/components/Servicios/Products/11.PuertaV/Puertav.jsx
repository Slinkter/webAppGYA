import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import ItemProduct from "../ItemProduct";
import { listPuertav } from "../../../../img/products/11.PuertaV/db_puertav";

const Puertav = () => {
  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> Puerta de Vidrio </h2>
              <p className="lead text-secondary"> Accesorios Y Cristal </p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listPuertav.puertav.map((item) => (
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

export default Puertav;
