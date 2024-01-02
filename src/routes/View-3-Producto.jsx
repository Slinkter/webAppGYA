import NavWrapper from "../components/NavWrapper";
import Landcover from "../components/Inicio/landcover";
import Footer from "../components/FooterWrapper";
import Firma from "../bonus/Firma";

export default function ProductView() {
  return (
    <NavWrapper>
      <Landcover />
      <div>
        <Firma></Firma>
      </div>

      <Footer />
    </NavWrapper>
  );
}
