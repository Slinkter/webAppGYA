import NavWrapper from "../components/NavWrapper";
import Landcover from "../components/Inicio/landcover";
import Footer from "../components/FooterWrapper";
import Proyects from "../components/Clientes/Proyects";


export default function ClientView(){
  return (
    <NavWrapper>
      <Landcover />
      <Proyects/>
      <Footer />
    </NavWrapper>
  );
}