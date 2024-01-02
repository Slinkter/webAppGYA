import imglogo from "../../img/logovcr.png";
import "./landcover.css";
export default function Landcover() {
  return (
    <section className=" bg_mainpage">
      <div className="container height_cover ">
        <main className="row featurette animated fadeIn  ">
          <div className="col-md-5 order-md-1 m-auto text-center  ">
            <img className="img_logo " src={imglogo} alt="" />
          </div>
          <div className="col-md-7 order-md-2  m-auto ">
            <h2 className="titleh2 ">Vidriería & Aluminio </h2>
            <h1 className="titleh1 ">GLASS & ALUMINUM</h1>
            <h1 className="titleh1 ">COMPANY S.A.C.</h1>
            <h4 className="titleh3 px-3">
              Empresa Comercial Especialista en la instalación de cristales y
              aluminios para Constructoras, Negocios y Hogares .
            </h4>
            <button className="mt-3  btn btn-success ">
              <a href="https://wa.me/51996537435?text=Quisiera una cotización para .... ">
                <i class="fa-brands fa-whatsapp mx-2 "></i>
                Solicita un presupuesto ahora
              </a>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
