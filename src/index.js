import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pestana
import InicioView from "./routes/View-1-Inicio";
import ServiceView from "./routes/View-2-Servicios";
import ProductView from "./routes/View-3-Producto";
import NostrosView from "./routes/View-4-Nosotros";
import ClientView from "./routes/View-5-Clientes";
import BudgetView from "./routes/View-6-Presupuesto";
import ErrorView from "./routes/View-7-Error";
import TestPage from "./routes/View-8-Test";
// Servicio -->
import Ventana from "./components/Servicios/Products/01.Ventana/Ventana";
import Mampara from "./components/Servicios/Products/02.Mampara/Mampara";
import Ducha from "./components/Servicios/Products/03.Ducha/Ducha";
// Aux -->
import ScrollToTop from "./utils/ScrollToTop";
import Techo from "./components/Servicios/Products/04.Techo/Techo";
import Parapeto from "./components/Servicios/Products/05.Parapeto/Parapeto";
import Baranda from "./components/Servicios/Products/06.Baranda/Baranda";
import Balcones from "./components/Servicios/Products/07.Balcones/Balcones";
import Muro from "./components/Servicios/Products/08.Muro/Muro";
import Lamina from "./components/Servicios/Products/09.Lamina/Lamina";
import Empavonado from "./components/Servicios/Products/10.Empavonado/Empavonado";
import Puertav from "./components/Servicios/Products/11.PuertaV/Puertav";
import PuertaS from "./components/Servicios/Products/12.PuertaS/PuertaS";
import Celosias from "./components/Servicios/Products/13.Celosias/Celosias";
import Frenos from "./components/Servicios/Products/14.Frenos/Frenos";
import Fachada from "./components/Servicios/Products/15.Fachada/Fachada";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioView />} />
      <Route path="/service" element={<ServiceView />} />
      <Route path="product" element={<ProductView />} />
      <Route path="us" element={<NostrosView />} />
      <Route path="client" element={<ClientView />} />
      <Route path="budget" element={<BudgetView />} />
      <Route path="test" element={<TestPage />} />

      <Route path="/service/ventana" element={<Ventana />} />
      <Route path="/service/mampara" element={<Mampara />} />
      <Route path="/service/ducha" element={<Ducha />} />

      <Route path="/service/techo-poli" element={<Techo />} />
      <Route path="/service/parapeto" element={<Parapeto />} />
      <Route path="/service/baranda" element={<Baranda />} />

      <Route path="/service/balcones" element={<Balcones />} />
      <Route path="/service/puertav" element={<Puertav />} />
      <Route path="/service/puertas" element={<PuertaS />} />

      <Route path="/service/celosias" element={<Celosias />} />

      {/*       <Route path="/service/empavonado" element={<Empavonado />} />
      <Route path="/service/muro" element={<Muro />} />
      <Route path="/service/lamina" element={<Lamina />} />

      <Route path="/service/frenos" element={<Frenos />} />
      <Route path="/service/fachada" element={<Fachada />} />
 */}
      <Route path="*" element={<ErrorView />} />
    </Routes>
    <ScrollToTop />
  </BrowserRouter>
);
