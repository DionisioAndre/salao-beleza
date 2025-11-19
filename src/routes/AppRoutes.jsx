import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServiceHair from "../pages/ServiceHair";
import ServicePerucas from "../pages/ServicePerucas";
import ServiceTrancas from "../pages/ServiceTrancas";
import Serviceestetica from "../pages/ServiceEstetica";
import Agendar from "../pages/Agendar";
import NotFound from "../pages/NotFound";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servico/cabeleireiro" element={<ServiceHair />} />
            <Route path="/servico/extensoes-e-perucas" element={<ServicePerucas />} />
            <Route path="/servico/trancas-e-penteados" element={<ServiceTrancas />} />
            <Route path="/servico/estetica" element={<Serviceestetica />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}