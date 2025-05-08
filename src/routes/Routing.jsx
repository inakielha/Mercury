import { Route, Routes } from "react-router-dom";
// import ConsecionariosYServicios from "../pages/ConcesionariosYServicios/ConsecionariosYServicios";
import ConsecionariosYServicios from "../pages/ConcesionariosYServicios/ConsecionariosYServicios";
import GeneradorPage from "../pages/Generadores/GeneradorPage/GeneradorPage";
import Generadores from "../pages/Generadores/Generadores";
import Informacion from "../pages/Informacion/Informacion";
import Instalaciones from "../pages/Instalaciones/Instalaciones";
import EnAccion from "../pages/EnAccion/EnAccion";
import { deployRoute } from "../pathImages";
import ScrollToTop from "../components/scrollTop/ScrollTop";

const Routing = ({ currentPath, setCurrentPath }) => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path={deployRoute + "/"} element={<Generadores />} />
        {/* Generadores Page */}
        <Route path={"generac/generadores/:id"} element={<GeneradorPage setCurrentPath={setCurrentPath} />} />
        {/* Concesionarios y Servicios */}
        <Route
          path={`generac/concesionarios-servicios`} element={<ConsecionariosYServicios />}
        // path={deployRoute + "/concesionarios-servicios"} element={<ConsecionariosYServicios />}
        />
        {/* Info Importante */}
        <Route path={"generac/info"} element={<Informacion />} />
        {/* Instalaciones */}
        <Route path={"generac/instalaciones"} element={<Instalaciones />} />
        {/* En Accion, no va por el momento */}
        {/* <Route path="/accion" element={<EnAccion />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
