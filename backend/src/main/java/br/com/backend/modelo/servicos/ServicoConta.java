package br.com.backend.modelo.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.backend.interfaces.OperacoesConta;
import br.com.backend.modelo.entidades.Conta;
import br.com.backend.modelo.repositorios.RepositorioConta;

@Service
public class ServicoConta implements OperacoesConta {
	@Autowired
	private RepositorioConta repositorioConta;

	@Override
	public Conta login(String agencia, String conta, String codigo) {
		if (!repositorioConta.existsByAgenciaAndContaAndCodigo(agencia, conta, codigo)) {
			return null;
		}
		
		return repositorioConta.findByAgenciaAndContaAndCodigo(agencia, conta, codigo);
	}
}
