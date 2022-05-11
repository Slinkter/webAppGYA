import Landcover from "../components/Inicio/landcover";
import Ubicacion from "../components/Inicio/ubicacion";
import NavWrapper from "../components/NavWrapper";
import Footer from "../components/FooterWrapper";

export default function InicioView() {
  return (
    <NavWrapper>
      <Landcover />
      <Ubicacion />
      <Footer />
    </NavWrapper>
  );
}
