package br.com.backend.modelo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.backend.modelo.entidades.Cliente;

public interface RepositorioCliente extends JpaRepository<Cliente, Long> {

}
