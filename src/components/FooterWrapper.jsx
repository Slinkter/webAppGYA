import "./FooterWrapper.css";

export default function Footer() {
  return (
    <section className="text-center">
      <footer className="mb-3">
        <div className="footer-section">
          <div className="container">
            <div className="row flexcontainer">
              <div className="col-md-4 ">
                <h2 className="titleh2footer">CONTACTO</h2>
                <p classNameName="">
                  <div>
                    <div className="">
                      <i className="fa-brands fa-whatsapp mx-2 mb-2 "></i>
                      996-537-435
                    </div>
                    <div className="">
                      <i className="fa-brands fa-whatsapp mx-2"></i>
                      971-870-665
                    </div>
                  </div>
                </p>
              </div>
              <div className="col-md-4 ">
                <h2 className="titleh2footer">HORARIOS</h2>
                <div classNameName="textwhite">
                  <i className="fa fa-calendar mx-2 mb-2 "></i>
                  Lunes a Sábado
                  <br />
                  9:00 am - 5:00 pm
                </div>
              </div>
              <div className="col-md-4 ">
                <h2 className="titleh2footer">DIRECCIÓN</h2>
                <p classNameName="textwhite">
                  Av. Los Fresnos MZ. H LT. 16
                  <p> La Molina </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div>
        <p>Copyright ©2024</p>
      </div>
    </section>
  );
}
