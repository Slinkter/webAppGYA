import imglogo from "../../img/logovcr.png";
import "./landcover.css";
export default function Landcover() {
    return (
        <section className="container ">
            <div className="height_cover ">
                <main className="row featurette animated fadeIn  ">
                    <div className="col-md-5 order-md-1 m-auto text-center  ">
                        <img className="img_logo " src={imglogo} alt="" />
                    </div>
                    <div className="col-md-7 order-md-2  m-auto ">
                        <h2 className="titleh2 ">Vidriería & Aluminio </h2>
                        <h1 className="titleh1 "> Glass & Aluminum</h1>
                        <h1 className="titleh1 "> Company S.A.C.</h1>
                        <h4 className="titleh3 px-3">
                            Empresa Comercial Especialista en venta e instalación de
                            cristales  para inmobiliarias , negocios y
                            hogares .
                        </h4>
                        <button className="mt-3  btn btn-outline-success ">
                            <a href="https://wa.me/51996537435?text=Quisiera una cotización para .... ">
                                <i class="fa-brands fa-whatsapp mx-2 "></i>
                                Solicitar Presupuesto
                            </a>
                        </button>
                    </div>
                </main>
            </div>
        </section>
    );
}
