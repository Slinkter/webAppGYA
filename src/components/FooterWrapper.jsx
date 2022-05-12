import "./FooterWrapper.css";

export default function Footer() {
  return (
    <section>
      <footer>
        <div class="footer-section">
          <div class="container">
            <div class="row flexcontainer">
              <div class="col-md-4 ">
                <h2 class="titleh2footer">Contactos</h2>

                <p className="textwhite">
                  <i class="fa fa-calendar"></i> Presupuestos
                  <div>
                    <i class="fa-brands fa-whatsapp mx-2"></i>996-537-435
                  </div>
                </p>

                <p className="textwhite">
                  <i class="fa fa-calendar"></i> Proyectos
                  <div>
                    <i class="fa-brands fa-whatsapp mx-2"></i>996-537-435
                  </div>
                </p>
              </div>
              <div class="col-md-4 ">
                <h2 class="titleh2footer">Horarios</h2>
                <p className="textwhite">
                  <i class="fa fa-calendar "></i> Lunes a Viernes
                  <p>9:00 am - 5:00 pm</p>
                </p>

                <p className="textwhite">
                  <i class="fa fa-calendar"></i> Sabado a Domingo
                  <p> 9:00 am - 1:00 pm</p>
                </p>
              </div>
              <div class="col-md-4 ">
                <h2 class="titleh2footer">Catalogos</h2>
                <ul class=" social-media ">
                  <li>
                    <a href="https://www.facebook.com/gyacompany">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i class="fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className=" mt-4 text-center">
        <p>Lima - Peru</p>
        <p>Copyright ©2022</p>
      </div>
    </section>
  );
}
