import { Cliente } from "./Cliente";

export interface Conta {
	id?: number;
	agencia?: String;
	conta?: String;
	saldo?: number;
	senhaConta?: String;
	cliente?: Cliente;
}
