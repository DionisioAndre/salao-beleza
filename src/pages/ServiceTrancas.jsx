import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../assets/css/style.css";
import "../assets/css/services.css";
import "../assets/css/services-trancas.css";
import ServicoTrancas from "../assets/images/service-trancas.jpg";

export default function ServiceTrancas () {
    return (
        <>
            <title>Tranças e Penteados | Salão Mirashell</title>

            {/*Header*/}
            <Header />

            {/*Banner*/}
            <section className="banner banner-trancas">
                <div className="content">
                    <h3>Tranças e Penteados</h3>
                    <p>Transforme o Seu Visual com Estilo e Confiança</p>
                    <p>Cuidado profissional, técnicas modernas e resultados que valorizam a sua beleza.</p>
                </div>
            </section>

            {/*service*/}
            <section className="service">
                <a href="/agendar" className="btn cta-button">Agende Sua sessão</a>

                <div className="box-container">
                    <div className="box">
                        <div class="image">
                            <img src={ServicoTrancas} alt="Desfriso" />
                        </div>
                        <div className="content">
                            <h2>Desfriso</h2>
                            <p>Reduza o volume e conquiste fios mais soltos e alinhados, mantendo o movimento e a suavidade natural do seu cabelo.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoTrancas} alt="Botox Capilar" />
                        </div>
                        <div className="content">
                            <h2>Botox Capilar</h2>
                            <p>Tratamento avançado para restaurar o brilho e a força dos fios. Reduz o frizz e deixa o cabelo mais nutrido e maleável.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Footer*/}
            <Footer />
        </>
    )
}