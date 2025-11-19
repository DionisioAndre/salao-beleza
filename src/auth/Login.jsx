import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/login.css";

export default function Login () {
    return (
        <>
            <title>Login | Salão Mirashell</title>

            <div className="body">
                <section class="login">
                    <form action="" method="POST" class="login-form" autocomplete="off">
                        <h3>PAINEL ADMINISTRATIVO</h3>
                        <input
                        type="email"
                        name="email"
                        placeholder="exemplo@gmail.com"
                        class="box"
                        required
                        />
                        <input
                        type="password"
                        name="senha"
                        placeholder="Sua senha"
                        class="box"
                        required
                        />
                        <input type="submit" value="Entrar" class="btn" />
                        <p>
                        Esqueceu a senha?{" "}
                        <Link to="/auth/recuperar-senha">clica aqui</Link>
                        </p>
                        <p>
                        Não tem uma conta? <Link to="/auth/cadastrar-se">Cria uma conta</Link>
                        </p>
                    </form>
                </section>
            </div>
        </>
    )
}