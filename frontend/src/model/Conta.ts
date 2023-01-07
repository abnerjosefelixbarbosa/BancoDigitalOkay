import Cliente from "./Cliente";

interface Conta {
    id?: number;
    agencia?: String;
	conta?: String;
	senha?: String;
	saldo?: number;
	cliente?: Cliente;
}

export default Conta;