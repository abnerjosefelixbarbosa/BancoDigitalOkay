import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Conta from '../../model/Conta';
import './Login.css';
import { IMaskInput } from 'react-imask';
import Cliente from '../../model/Cliente';

const Login = () => {
    const [cpf, setCPF] = useState(String);
    const [senhaCliente, setSenhaCliente] = useState(String);
    
    const login = (e: any) => {
        e.preventDefault();
        const cliente: Cliente = {
            cpf: cpf,
            senhaCliente: senhaCliente
        }
        const conta: Conta = {
            cliente: cliente
        };

        const vl = validarLogin(conta);
        //949.612.154-30
        //111111
        //370.897.974-57
        //222222

        if (vl !== "") {
            abrirAlerta(vl);
        } else {
            logarConta(conta)
            .then((response) => {
                if (response === '') {
                    abrirAlerta('conta inexistente!');
                } else {
                    console.log(response);
                }
            }); 
        }
    }

    const validarLogin = (conta: Conta) => {
        if (conta.cliente?.cpf == "")
            return "cpf vazio!";
        if (conta.cliente?.senhaCliente == "")
            return "senha vazia!";

        return "";
    }

    const logarConta = async (conta: Conta) => await axios
        .get(`http://localhost:8080/conta/login/${conta.cliente?.cpf}/${conta.cliente?.senhaCliente}`)
        .then((response) => response.data)
        .catch((error) => error.response.data);

    const fecharAlerta = () => document
        .getElementById("alerta")?.classList.add("d-none");

    const abrirAlerta = (menssagem: String) => {
        document.getElementById("alerta")?.classList.remove("d-none");
        const mens: any = document.getElementById("menssagem");
        mens.innerHTML = menssagem;

        setTimeout(() => fecharAlerta(), 1500);
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
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000.000.000-00"
                            value={cpf}
                            onChange={(e) => setCPF(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000000"
                            value={senhaCliente}
                            onChange={(e) => setSenhaCliente(e.target.value)}
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

