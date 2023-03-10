package br.com.backend.modelo.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.backend.interfaces.MetodoConta;
import br.com.backend.modelo.entidades.Conta;
import br.com.backend.modelo.repositorios.RepositorioConta;

@Service
public class ServicoConta implements MetodoConta {
	@Autowired
	private RepositorioConta repositorioConta;

	@Override
	public Conta logarConta(String cpf, String senhaCliente) {
		return repositorioConta.logarConta(cpf, senhaCliente);
	}
}
