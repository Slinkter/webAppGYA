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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<InicioView />}></Route>
            <Route path="service" element={<ServiceView />}></Route>
            <Route path="product" element={<ProductView />}></Route>
            <Route path="us" element={<NostrosView />}></Route>
            <Route path="client" element={<ClientView />}></Route>
            <Route path="budget" element={<BudgetView />}></Route>
            <Route path="test" element={<TestPage />}></Route>

            <Route path="*" element={<ErrorView />}></Route>
        </Routes>
    </BrowserRouter>
);
