import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Conta from '../../model/Conta';
import './Login.css';

const Login = () => {
    const [agencia, setAgencia] = useState(String);
    const [conta, setConta] = useState(String);
    const [senha, setSenha] = useState(String);
    //11514
    //2335204
    //489958

    const login = (e: any) => {
        e.preventDefault();
        const data: Conta = {
            agencia: agencia,
            conta: conta,
            senha: senha,
        };

        const vl = validarLogin(data);

        if (vl !== "") {
            abrirAlerta(vl);
        }

        urlLogin(data)
        .then((response) => {
            if (response === '') {
                abrirAlerta('conta inexistente!');
            } else {
                console.log(response);
            }
        });
    }

    const validarLogin = (conta: Conta) => {
        if (conta.agencia == "") {
            return "agencia vazia!";
        }
        if (conta.conta == "") {
            return "conta vazia!";
        }
        if (conta.senha == "") {
            return "senha vazia!";
        }

        return "";
    }

    const urlLogin = async (conta: Conta) => {
        const url = `http://localhost:8080/conta/login/${conta.agencia}/${conta.conta}/${conta.senha}`;
        const resposta = await axios.get(url)
            .then((response) => {                
                return response.data;
            })
            .catch((error) => {
                return error.response.data
            });

        return resposta; 
    }

    const fecharAlerta = () => {
        document.getElementById("alerta")?.classList.add("d-none");
    }

    const abrirAlerta = (menssagem: String) => {
        document.getElementById("alerta")?.classList.remove("d-none");
        const m: any = document.getElementById("menssagem");
        m.innerHTML = menssagem;

        setTimeout(() => {
            fecharAlerta();
        }, 1500);
    }

    return (
        <div className="Login">
            <Container className='container-login'>
                <div className="alert alert-danger d-none" id='alerta' role="alert">
                    <div id='menssagem'>                        
                    </div>
                </div>
                <Form onSubmit={login}>
                    <Form.Group className="mb-3">
                        <Form.Label>Agência:</Form.Label>
                        <Form.Control
                            type="text"
                            value={agencia}
                            onChange={(e) => setAgencia(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Conta:</Form.Label>
                        <Form.Control
                            type="text"
                            value={conta}
                            onChange={(e) => setConta(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login;

