import imglogo from "../../img/logovcr.png";
import "./landcover.css";
export default function Landcover() {
  return (
    <section className="height_cover container">
      <main className="row featurette ">
        <div className="col-md-5 order-md-1 m-auto text-center">
          <img className="img_logo " src={imglogo} alt="" />
        </div>
        <div className="col-md-7 order-md-2  m-auto">
          <h2 className="titleh2 ">Vidriería & Aluminio </h2>
          <h1 className="titleh1 "> Glass & Aluminum</h1>
          <h1 className="titleh1 "> Company S.A.C.</h1>
          <h4 className="titleh3 ">
            Empresa Comercial Especialista en instalación de cristales y
            aluminio para inmobiliarias , negocios y hogares .
          </h4>
        </div>
      </main>
    </section>
  );
}
