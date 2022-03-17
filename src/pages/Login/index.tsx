import React, { useState } from "react";
import { useAuth } from '../../contexts/auth';
import Spinner from '../../components/loadingage';
import "./styles.css";

const Login: React.FC = () => {
    const { signIn, message } = useAuth();

    const logokozmo = require('../../assets/img/kozmologo.png');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Logged, setLogged] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email && password) {
            signIn(email, password);
            setEmail('');
            setPassword('');
            setLogged(true);
        } else {
            alert("Necessário inclusão do e-mail e senha")
        }

    }

    return (
        <div className="container">
            {Logged === true ? <Spinner /> : ""}
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form" onSubmit={handleLogin} name='formSignIn'>
                        <span className="login-form-title"> Bem vindo </span>
                        <span className="login-form-title">
                            <img src={logokozmo} alt="KozmoLogo" />
                        </span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <div className="text-center">
                            <span className="txt1">
                                {message ? message : ''}
                            </span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className='login-form-btn'>
                                Acessar
                            </button>
                        </div>
{/*                         <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="/SignUp">
                                Criar conta
                            </a>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;