import NavWrapper from "../components/NavWrapper";
import Landcover from "../components/Inicio/landcover";
import Footer from "../components/FooterWrapper";


export default function ClientView(){
  return (
    <NavWrapper>
      <Landcover />
      <Footer />
    </NavWrapper>
  );
}