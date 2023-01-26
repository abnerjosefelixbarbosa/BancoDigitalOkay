import Cliente from "./Cliente";

interface Conta {
    id?: number;
    agencia?: String;
	conta?: String;	
	saldo?: number;
	senhaConta?: String;
	cliente?: Cliente;
}

export default Conta;