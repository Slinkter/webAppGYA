import "./FooterWrapper.css";

export default function Footer() {
  return (
    <section className="text-center ">
      {/*  */}
      <footer className="mb-3  bg__footer">
        <div className="row m-0">
          <div className="col-md-4 my-2">
            <h2 className="footer__h2">CONTACTO</h2>
            <div>
              <div className="">
                <i className="fa-brands fa-whatsapp mx-2"></i>
                996-537-435
              </div>
              <div className="">
                <i className="fa-brands fa-whatsapp mx-2"></i>
                971-870-665
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <h2 className="footer__h2">HORARIOS</h2>
            <div>
              <i className="fa fa-calendar mx-2 mb-2 "></i>
              Lunes a Sábado
            </div>
            <div>
              <i className="fa-regular fa-clock mx-2 mb-2"></i>
              9:00 am - 5:00 pm
            </div>
          </div>
          <div className="col-md-4 my-2">
            <h2 className="footer__h2">DIRECCIÓN</h2>
            <div>
              <i className="fa-solid fa-location-dot mx-2 mb-2"></i>
              Av. Los Fresnos MZ. H LT. 16
            </div>

            <div>
              <i className="fa-regular fa-map mx-2 mb-2"></i>
              La Molina
            </div>
          </div>
        </div>
      </footer>
      {/*  */}
      <div>
        <p>Copyright ©2024</p>
      </div>
    </section>
  );
}
