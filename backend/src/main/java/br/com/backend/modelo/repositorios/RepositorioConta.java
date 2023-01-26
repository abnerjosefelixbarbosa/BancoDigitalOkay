package br.com.backend.modelo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.backend.modelo.entidades.Conta;

@Repository
public interface RepositorioConta extends JpaRepository<Conta, Long> {
	@Query("SELECT con FROM Conta con INNER JOIN con.cliente cli WHERE cli.cpf = ?1 AND cli.senhaCliente = ?2")
	Conta logarConta(String cpf, String senhaCliente);
}
