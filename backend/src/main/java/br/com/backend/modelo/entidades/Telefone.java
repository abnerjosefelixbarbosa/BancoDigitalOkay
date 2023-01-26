package br.com.backend.modelo.entidades;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString(exclude = {"cliente"})
@Table(name = "telefone")
public class Telefone implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private Long id;
	@Column(length = 30, nullable = false, unique = true)
	private String telefone;
	@ManyToOne
	@JoinColumn(name = "id_cliente", referencedColumnName = "id", nullable = false)
	private Cliente cliente;
}
