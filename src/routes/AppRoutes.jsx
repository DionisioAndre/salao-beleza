import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServiceHair from "../pages/ServiceHair";
import ServicePerucas from "../pages/ServicePerucas";
import ServiceTrancas from "../pages/ServiceTrancas";
import Serviceestetica from "../pages/ServiceEstetica";
import Agendar from "../pages/Agendar";

import Loja from "../pages/Loja";

import Login from "../auth/Login";
import CadastrarSe from "../auth/CadastrarSe";
import RecuperarSenha from "../auth/RecuperarSenha";

import NotFound from "../pages/NotFound";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="/servico/cabeleireiro" element={<ServiceHair />} />
            <Route path="/servico/extensoes-e-perucas" element={<ServicePerucas />} />
            <Route path="/servico/trancas-e-penteados" element={<ServiceTrancas />} />
            <Route path="/servico/estetica" element={<Serviceestetica />} />
            <Route path="/agendar" element={<Agendar />} />

            {/*Rotas de loja */}
            <Route path="/loja" element={<Loja />} />

            {/*Rotas de login */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/cadastrar-se" element={<CadastrarSe />} />
            <Route path="/auth/recuperar-senha" element={<RecuperarSenha />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}