import { Link } from "react-router-dom";
export default function NavWrapper({ children }) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="  justify-content-md-center collapse navbar-collapse "
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav text-center " >
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/service">
                  {" "}
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/product">
                  {" "}
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/us">
                  {" "}
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/client">
                  {" "}
                  Clientes
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/budget">
                  {" "}
                  Presupuestos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-5">{children}</div>
    </div>
  );
}
