import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Conta from '../../model/Conta';
import './Login.css';
import { IMaskInput } from 'react-imask';
import Cliente from '../../model/Cliente';
import RepositorioConta from '../../repository/RepositorioConta';

const Login = () => {
    const [agencia, setAgencia] = useState(String);
    const [conta, setConta] = useState(String);
    const [codigoAplicativo, setCodigoAplicativo] = useState(String);

    const login = (e: any) => {
        e.preventDefault();
        const cliente1: Cliente = {
            codigoAplicativo: codigoAplicativo,
        }
        const conta1: Conta = {
            agencia: agencia,
            conta: conta,
            cliente: cliente1,
        };

        const vl = validarLogin(conta1);

        if (vl !== "")
            abrirAlerta(vl);
        else
            repositorioConta(conta1)
                .then((valor) => {
                    if (valor.length === 0)
                        abrirAlerta("Conta inexistente");
                    else
                        console.log(valor[0]);
                });

        /*
        urlLogin(conta1)
            .then((response) => {
                if (response === '') {
                    abrirAlerta('conta inexistente!');
                } else {
                    console.log(response);
                }
            });
            */
    }

    const validarLogin = (conta: Conta) => {
        if (conta.agencia == "")
            return "agencia vazia!";
        if (conta.conta == "")
            return "conta vazia!";
        if (conta.cliente?.codigoAplicativo == "")
            return "codigo do aplicativo vazia!";

        return "";
    }

    const repositorioConta = async (conta: Conta) => RepositorioConta
        .filter((valor) =>
            valor.agencia === conta.agencia &&
            valor.conta === conta.conta &&
            valor.cliente?.codigoAplicativo === conta.cliente?.codigoAplicativo
        );


    const urlLogin = async (conta: Conta) => await axios
        .get(`http://localhost:8080/conta/login/${conta.agencia}/${conta.conta}/${conta.codigo}`)
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
                        <Form.Label>Agência:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="0000-0"
                            value={agencia}
                            onChange={(e) => setAgencia(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Conta:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000000-0"
                            value={conta}
                            onChange={(e) => setConta(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Código do aplicativo:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000000"
                            value={codigoAplicativo}
                            onChange={(e) => setCodigoAplicativo(e.target.value)}
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

