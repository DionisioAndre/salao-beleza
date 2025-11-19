import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../assets/css/style.css";
import "../assets/css/services.css";
import "../assets/css/loja.css";

export default function Loja () {
    return (
        <>
            <title>Loja | Salão Mirashell</title>
            
            {/*Header*/}
            <Header />

            {/*Banner*/}
            <section className="banner agendar">
                <div className="content">
                    <h3>Agende a Sua Sessão</h3>
                    <p>Escolha o serviço, selecione a data e garanta o seu atendimento com nossos profissionais.</p>
                </div>
            </section>
            

            {/*Footer*/}
            <Footer />
        </>
    )
}