import Cliente from "../model/Cliente";
import Conta from "../model/Conta";

const RepositorioConta = new Array<Conta>();

const cliente1: Cliente = {
    id: 1,
    nome: 'Kauê Manuel Gomes',
    dataNascimento: new Date('1988-01-01'),
    email: 'kaue.manuel.gomes@outloock.com',
    cpf: '784.781.024-77',
    rg: '12.077.533-5',
    telefone: '51 (94) 99883-1115',
    cep: '68543-971',
    numero: 358,
    logradouro: 'Avenida Sete de Setembro 1812',
    bairro: 'Centro',
    cidade: 'Floresta do Araguaia',
    estado: 'PA',
    codigoAplicativo: '445595',
}

const conta1: Conta = {
    id: 1,
    agencia: '5336-5',
    conta: '55793-5',
    codigo: '7896',
    saldo: 400,
    cliente: cliente1,
}

const cliente2: Cliente = {
    id: 2,
    nome: 'Alice Simone Souza',
    dataNascimento: new Date('1991-03-15'),
    email: 'alice.simone.souza@nelsoncosta.com.br',
    cpf: '778.429.729-74',
    rg: '19.356.171-2',
    telefone: '51 (48) 98349-9509',
    cep: '88101-195',
    numero: 864,
    logradouro: 'Rua Prefeito Silvestre Phillipi',
    bairro: 'Campinas',
    cidade: 'São José',
    estado: 'SC',
    codigoAplicativo: '489958',
}

const conta2: Conta = {
    id: 2,
    agencia: '1151-4',
    conta: '233520-4',
    codigo: '5696',
    saldo: 800,
    cliente: cliente2,
}

RepositorioConta.push(conta1);
RepositorioConta.push(conta2);

export default RepositorioConta;