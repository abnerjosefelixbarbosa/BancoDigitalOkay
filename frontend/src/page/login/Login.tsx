import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [agencia, setAgencia] = useState(String);
    const [conta, setConta] = useState(String);
    const [senha, setSenha] = useState(String);
    const dados = {
        agencia: agencia,
        conta: conta,
        senha: senha,
    }

    const login = (e: any) => {
        e.preventDefault();
        console.log(dados);
    }

    return (
        <div className="Login">
            <Container className='container-login'>
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

