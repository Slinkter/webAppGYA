import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import { listParapeto } from "../../../../img/products/05.Parapeto/db_parapeto";
import ItemProduct from "../ItemProduct";

const Parapeto = () => {
  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> PARAPETO </h2>
              <p className="lead text-secondary">ACERO Y CRISTAL </p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listParapeto.parapeto.map((item) => (
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

export default Parapeto;
