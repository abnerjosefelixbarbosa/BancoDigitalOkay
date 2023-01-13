package br.com.backend.modelo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.backend.modelo.entidades.Conta;

@Repository
public interface RepositorioConta extends JpaRepository<Conta, Long> {
	@Query("SELECT c FROM Conta c WHERE c.agencia = ?1 AND c.conta = ?2 AND c.codigo = ?3")
	Conta login(String agencia, String conta, String codigo);
	Conta findByAgenciaAndContaAndCodigo(String agencia, String conta, String codigo);
	Boolean existsByAgenciaAndContaAndCodigo(String agencia, String conta, String codigo);
}
