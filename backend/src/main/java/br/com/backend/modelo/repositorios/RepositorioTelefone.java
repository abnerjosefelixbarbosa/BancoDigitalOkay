package br.com.backend.modelo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.backend.modelo.entidades.Telefone;

public interface RepositorioTelefone extends JpaRepository<Telefone, Long> {

}
