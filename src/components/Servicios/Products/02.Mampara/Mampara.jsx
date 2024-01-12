import React from "react";
import NavWrapper from "../../../NavWrapper";
import Footer from "../../../FooterWrapper";
import { listMampara } from "../../../../img/products/02.Mampara/db_mampara";
import ItemProduct from "../ItemProduct";
const Mampara = () => {
  return (
    <NavWrapper>
      {/*  */}
      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> MAMPARA </h2>
              <p className="lead text-secondary">Sistema Nova</p>
            </div>
          </section>
          <section className="container-fluid ">
            <div className="products mx-3">
              {listMampara.nova.map((item) => (
                <ItemProduct key={item.id} image={item.image} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="m-0">
          <section className="text-center m-0">
            <div className="container__bgItem mb-3">
              <h2 className="container__h2"> MAMPARA </h2>
              <p class="lead text-secondary">Sistema Serie 25</p>
            </div>
          </section>
          <br />
          <section className="container-fluid ">
            <div className="products mx-3">
              {listMampara.serie.map((item) => (
                <ItemProduct key={item.id} image={item.image} />
              ))}
            </div>
          </section>
          <br />
        </div>
      </section>

      {/*  */}
      <Footer />
    </NavWrapper>
  );
};

export default Mampara;
