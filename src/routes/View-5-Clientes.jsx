import NavWrapper from "../components/NavWrapper";
import Landcover from "../components/Inicio/landcover";
import Footer from "../components/FooterWrapper";
import Proyects from "../components/Proyectos/Proyects";

export default function ClientView() {
  return (
    <NavWrapper>
      <Proyects />
      <Footer />
    </NavWrapper>
  );
}
