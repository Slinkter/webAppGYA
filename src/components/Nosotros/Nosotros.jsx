import React from "react";
import img1 from "../../img/sectorcontruc.jpg";
import img2 from "../../img/calidad.jpg";
import img3 from "../../img/values.jpg";
import "./Nosotros.css";

function nosotros() {
    return (
        <div>
            <div className="container marketing">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            Misión
                            <span className="text-muted">.</span>
                        </h2>
                        <p className="lead mt-3">
                            Nuestra misión es asegurar la seguridad de hogares
                            ofreciendo sistemas de seguridad en la instalación
                            de vidrios y accesorios con garantia.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            className="featurette-image img-fluid mx-auto"
                            data-src="holder.js/500x500/auto"
                            alt="500x500"
                            style={{ width: 500, height: 500 }}
                            src={img1}
                            data-holder-rendered="true"
                        />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            Visión
                            <span className="text-muted">.</span>
                        </h2>
                        <p className="lead mt-3">
                            Ser la principal empresa proveedora de servicios de
                            instalación de cristales templados y perfiles de
                            aluminio.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            className="featurette-image img-fluid mx-auto"
                            data-src="holder.js/500x500/auto"
                            alt="500x500"
                            src={img2}
                            data-holder-rendered="true"
                            style={{ width: 500, height: 500 }}
                        />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            Valores
                            <span className="text-muted">.</span>
                        </h2>
                        <p className="lead mt-3">                          
                            Los valores que acompaña y promovemos dentro de la
                            empresa son :
                        </p>
                        <p className="lead mt-1 listValue">
                            <ul className="">
                                <li>Confianza</li>
                                <li>Responsabilidad</li>
                                <li>Integridad</li>
                                <li>Respeto</li>
                                <li>Honestidad</li>
                                <li>Puntualidad</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            className="featurette-image img-fluid mx-auto"
                            data-src="holder.js/500x500/auto"
                            alt="500x500"
                            src={img3}
                            data-holder-rendered="true"
                            style={{ width: 500, height: 500 }}
                        />
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </div>
    );
}

export default nosotros;
