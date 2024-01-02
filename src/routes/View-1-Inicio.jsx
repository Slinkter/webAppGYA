import Landcover from "../components/Inicio/landcover";
import Ubicacion from "../components/Inicio/ubicacion";
import NavWrapper from "../components/NavWrapper";
import Footer from "../components/FooterWrapper";
import Beneficio from "../components/Inicio/beneficios";

export default function InicioView() {
  return (
    <NavWrapper>
      <Landcover />
      <Beneficio />
      <Ubicacion />
      <Footer />
    </NavWrapper>
  );
}
