import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../assets/css/style.css";
import "../assets/css/services.css";
import "../assets/css/agendar.css";

export default function Agendar() {
  const [servicos, setServicos] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
    data: "",
    hora: "",
    observacoes: ""
  });

  // Puxar serviços da API
  useEffect(() => {
    fetch("http://localhost:8000/api/servicos/")
      .then(res => res.json())
      .then(data => setServicos(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/agendamentos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        alert("Agendamento enviado com sucesso!");
        setFormData({
          nome: "",
          telefone: "",
          servico: "",
          data: "",
          hora: "",
          observacoes: ""
        });
      } else {
        alert("Erro ao enviar agendamento.");
      }
    })
    .catch(err => console.error(err));
  }

  return (
    <>
      <Header />

      <section className="banner agendar">
        <div className="content">
          <h3>Agende a Sua Sessão</h3>
          <p>Escolha o serviço, selecione a data e garanta o seu atendimento com nossos profissionais.</p>
        </div>
      </section>

      <section className="visit" id="agendamento">
        <h1 className="heading">Agende Sua Sessão</h1>

        <div className="row">
          <form onSubmit={handleSubmit}>
            <h3>Marque o seu atendimento</h3>

            <div className="inputBox">
              <input type="text" name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required />   
            </div>

            <div className="inputBox">
              <input type="tel" name="telefone" placeholder="Seu telefone" value={formData.telefone} onChange={handleChange} required />   
            </div>

            <div className="inputBox">
              <select name="servico" value={formData.servico} onChange={handleChange} required>
                <option value="">Selecione o serviço</option>
                {servicos.map((s) => (
                  <option key={s.id} value={s.nome}>{s.nome}</option>
                ))}
              </select>
            </div>

            <div className="inputBox">
              <input type="date" name="data" value={formData.data} onChange={handleChange} required />
            </div>

            <div className="inputBox">
              <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
            </div>

            <div className="inputBox">
              <textarea name="observacoes" cols="10" rows="5" placeholder="Observações adicionais (opcional)" value={formData.observacoes} onChange={handleChange}></textarea>  
            </div>

            <button type="submit" className="btn">
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
