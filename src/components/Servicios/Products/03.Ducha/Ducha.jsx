import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";

import { listDucha } from "../../../../img/products/03.Ducha/db_ducha";
import ItemProduct from "../ItemProduct";

const Ducha = () => {
  console.log(listDucha);

  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> PUERTA DE DUCHA </h2>
              <p className="lead text-secondary">
                Sistema Kit - Vidrio templado 8 mm
              </p>
            </div>
          </section>
          <section className="container-fluid">
            <div className="products mx-3">
              {listDucha.kit.map((item) => (
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

export default Ducha;
