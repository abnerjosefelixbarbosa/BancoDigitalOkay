package br.com.backend.modelo.entidades;

import java.io.Serializable;
import java.math.BigDecimal;

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
@Table(name = "conta")
public class Conta implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private Long id;
	@Column(length = 20, nullable = false)
	private String agencia;
	@Column(length = 20, nullable = false, unique = true)
	private String conta;
	@Column(precision = 10, scale = 2, nullable = false)
	private BigDecimal saldo;
	@Column(length = 4, nullable = false)
	private String senhaConta;
	@ManyToOne
	@JoinColumn(name = "id_cliente", referencedColumnName = "id", nullable = false)
	private Cliente cliente;
}
