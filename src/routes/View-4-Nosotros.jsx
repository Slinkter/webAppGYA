import NavWrapper from "../components/NavWrapper";
import Landcover from "../components/Inicio/landcover";
import Footer from "../components/FooterWrapper";

import Nosotros from "../components/Nosotros/Nosotros";

export default function NostrosView() {
  return (
    <NavWrapper>
      <Nosotros />
      <Footer />
    </NavWrapper>
  );
}
