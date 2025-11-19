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
            <section className="banner loja">
                <div className="content">
                    <h3>Estamos construindo nossa loja</h3>
                    <p>Por favor, tenha paciência.</p>
                </div>
            </section>
            

            {/*Footer*/}
            <Footer />
        </>
    )
}