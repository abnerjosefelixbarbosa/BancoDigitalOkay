package br.com.backend.interfaces;

import br.com.backend.modelo.entidades.Conta;

public interface MetodoConta {
	Conta logarConta(String cpf, String senhaCliente);
}
