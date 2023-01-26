package br.com.backend.interfaces;

import br.com.backend.modelo.entidades.Conta;

public interface InterfaceConta {
	Conta logarConta(String cpf, String senhaCliente);
}
