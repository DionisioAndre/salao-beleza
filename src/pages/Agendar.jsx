import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../assets/css/style.css";
import "../assets/css/services.css";
import "../assets/css/agendar.css";

export default function Agendar () {
    return (
        <>
            <title>Agendar | Salão Mirashell</title>

            {/*Header*/}
            <Header />

            {/*Banner*/}
            <section className="banner agendar">
                <div className="content">
                    <h3>Agende a Sua Sessão</h3>
                    <p>Escolha o serviço, selecione a data e garanta o seu atendimento com nossos profissionais.</p>
                </div>
            </section>

            {/*Agendar*/}
            <section className="visit" id="agendamento">
                <h1 className="heading">Agende Sua Sessão</h1>

                <div className="row">
                    <form>
                        <h3>Marque o seu atendimento</h3>

                        <div className="inputBox">
                            <input type="text" name="nome" placeholder="Seu nome" required />   
                        </div>

                        <div className="inputBox">
                            <input type="tel" name="telefone" placeholder="Seu telefone" required />   
                        </div>

                        <div className="inputBox">
                            <select name="servico" required>
                                <option value="">Selecione o serviço</option>
                                <option value="desfriso">Desfriso</option>
                                <option value="botox">Botox Capilar</option>
                                <option value="progressiva">Escova Progressiva</option>
                                <option value="hidratacao">Hidratação e Reconstrução</option>
                                <option value="madeixas">Madeixas</option>
                                <option value="coloracao">Coloração</option>
                                <option value="descoloracao">Descoloração e Madeixas</option>
                                <option value="peruca">Aplicação de Peruca</option>
                                <option value="keratina">Aplicação de Keratina</option>
                                <option value="fio-a-fio">Aplicação Fio a Fio</option>
                                <option value="costura">Aplicação de Costura</option>
                                <option value="tratamento-perucas">Tratamento de Perucas</option>
                            </select>
                        </div>

                        <div className="inputBox">
                            <input type="date" name="data" required />
                        </div>

                        <div className="inputBox">
                            <input type="time" name="hora" required />
                        </div>

                        <div className="inputBox">
                            <textarea name="observacoes" cols="10" rows="20" placeholder="Observações adicionais (opcional)"></textarea>  
                        </div>

                        <button type="submit" name="enviar" className="btn">
                            Confirmar Agendamento
                        </button>
                    </form>
                </div>
            </section>
            {/*Footer*/}
            <Footer />
        </>
    )
}