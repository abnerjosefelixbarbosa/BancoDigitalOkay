import Cliente from "./Cliente";

interface Conta {
    id?: number;
    agencia?: String;
	conta?: String;
	codigo?: String;
	saldo?: number;
	cliente?: Cliente;
}

export default Conta;