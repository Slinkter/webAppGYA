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
                                    <div>
                                        <div>
                                            <i class="fa-brands fa-whatsapp mx-2 mb-2"></i>
                                            971-870-665
                                        </div>
                                        <div>
                                            <i class="fa-brands fa-whatsapp mx-2"></i>
                                            974-278-303
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div class="col-md-4 ">
                                <h2 class="titleh2footer">Horarios</h2>
                                <p className="textwhite">
                                    <i class="fa fa-calendar mx-2 mb-2"></i>
                                    Lunes a Sábado
                                    <p>9:00 am - 5:00 pm</p>
                                </p>
                            </div>
                            <div class="col-md-4 ">
                                <h2 class="titleh2footer">Ubicación</h2>
                                <p className="textwhite">
                                    Av. Los Frenos MZ H LT. 16
                                    <p> La Molina</p>
                                </p>
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
