import React from "react";

import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import ItemProduct from "../ItemProduct";

import { listBaranda } from "../../../../img/products/06.Baranda/db_baranda";

const Baranda = () => {
  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> Barandas </h2>
              <p className="lead text-secondary">ACERO Y CRISTAL </p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listBaranda.baranda.map((item) => (
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

export default Baranda;
