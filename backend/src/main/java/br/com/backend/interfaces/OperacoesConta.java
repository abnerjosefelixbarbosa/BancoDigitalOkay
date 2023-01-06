package br.com.backend.interfaces;

import br.com.backend.modelo.entidades.Conta;

public interface OperacoesConta {
	Conta login(String agencia, String conta, String senha);
}
