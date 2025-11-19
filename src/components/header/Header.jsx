import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <a href="/" className="logo">Salão Mirashell</a>

            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
                <div
                    id="close-navbar"
                    className="fas fa-times"
                    onClick={() => setMenuOpen(false)}
                ></div>

                <a href="/">Home</a>
                <a href="/#sobre">Sobre</a>
                <a href="/#servicos">Serviços</a>
                <a href="/#galeria">Galeria</a>
                <a href="/agendar">Agendar</a>
                <a href="/#fale-conosco">Fale Conosco</a>
            </nav>

            <div
                id="menu-btn"
                className="fas fa-bars"
                onClick={() => setMenuOpen(true)}
            ></div>
        </header>
    );
}
