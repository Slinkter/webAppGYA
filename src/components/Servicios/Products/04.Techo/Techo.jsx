import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import ItemProduct from "../ItemProduct";
import { listTecho } from "../../../../img/products/04.Techo/db_techo";

const Techo = () => {
  return (
    <NavWrapper>
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bg mb-3">
              <h2 className="mampara__h2"> Techo de Policarbonato </h2>
              <p className="lead text-secondary">Sistema Nova</p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listTecho.techo.map((item) => (
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

export default Techo;
