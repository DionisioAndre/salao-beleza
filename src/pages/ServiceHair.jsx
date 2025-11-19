import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../assets/css/style.css";
import "../assets/css/services.css";
import "../assets/css/services-hair.css";
import ServicoDesfriso from "../assets/images/service-hair-desfriso.jpg";
import ServicoBotox from "../assets/images/service-hair-botox.jpg";
import ServicoEscova from "../assets/images/service-hair-escova.jpg";
import ServicoHidratacao from "../assets/images/service-hair-hidratacao.jpg";
import ServicoMadeixa from "../assets/images/service-hair-madeixas.jpg";
import ServicoColoracao from "../assets/images/service-hair-coloracao.jpg";
import ServicoDescoloracao from "../assets/images/service-hair-descoloracao.jpg";

export default function ServiceHair () {
    return (
        <>
            <title>Cabeleireiro | Salão Mirashell</title>

            {/*Header*/}
            <Header />

            {/*Banner*/}
            <section className="banner banner-hair">
                <div className="content">
                    <h3>Cabeleireiro</h3>
                    <p>Transforme o Seu Visual com Estilo e Confiança</p>
                    <p>Cuidado profissional, técnicas modernas e resultados que valorizam a sua beleza.</p>
                </div>
            </section>

            {/*service*/}
            <section className="service">
                <a href="/agendar" className="btn cta-button">Agende Sua sessão</a>

                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={ServicoDesfriso} alt="Desfriso" />
                        </div>
                        <div className="content">
                            <h2>Desfriso</h2>
                            <p>Reduza o volume e conquiste fios mais soltos e alinhados, mantendo o movimento e a suavidade natural do seu cabelo.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoBotox} alt="Botox Capilar" />
                        </div>
                        <div className="content">
                            <h2>Botox Capilar</h2>
                            <p>Tratamento avançado para restaurar o brilho e a força dos fios. Reduz o frizz e deixa o cabelo mais nutrido e maleável.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoEscova} alt="Escova Progressiva" />
                        </div>
                        <div className="content">
                            <h2>Escova Progressiva</h2>
                            <p>Alisamento duradouro, brilho intenso e cabelos disciplinados. Ideal para quem busca praticidade no dia a dia.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoHidratacao} alt="Hidratação e Reconstrução" />
                        </div>
                        <div className="content">
                            <h2>Hidratação e Reconstrução</h2>
                            <p>Recuperação profunda da fibra capilar. Combate o ressecamento, fortalece os fios e devolve maciez imediata.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoMadeixa} alt="Madeixas" />
                        </div>
                        <div className="content">
                            <h2>Madeixas</h2>
                            <p>Ilumine o visual com mechas personalizadas que valorizam o seu tom de pele e trazem dimensão ao cabelo.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoColoracao} alt="Coloração" />
                        </div>
                        <div className="content">
                            <h2>Coloração</h2>
                            <p>Mude o visual com cores vibrantes, duradouras e aplicadas com técnica profissional para um resultado impecável.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={ServicoDescoloracao} alt="Treino Personalizado" />
                        </div>
                        <div className="content">
                            <h2>Descoloração e Madeixas</h2>
                            <p>Clareamento seguro e controlado para criar mechas, degradês ou loiros completos com luminosidade e saúde.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Footer*/}
            <Footer />
        </>
    )
}