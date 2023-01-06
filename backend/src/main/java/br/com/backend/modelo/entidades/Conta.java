package br.com.backend.modelo.entidades;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(
		name = "tb_conta",
		indexes = { 
				@Index(columnList = "agencia"),
				@Index(columnList = "conta"),
				@Index(columnList = "senha"),
		}
)
public class Conta implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, unique = true, length = 10)
	private String agencia;
	@Column(nullable = false, unique = true, length = 10)
	private String conta;
	@Column(nullable = false, unique = true, length = 6)
	private String senha;
	@Column(nullable = false, precision = 10)
	private Double saldo;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_cliente", referencedColumnName = "id")
	private Cliente cliente;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAgencia() {
		return agencia;
	}

	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}

	public String getConta() {
		return conta;
	}

	public void setConta(String conta) {
		this.conta = conta;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Double getSaldo() {
		return saldo;
	}

	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Conta other = (Conta) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Conta [id=" + id + ", agencia=" + agencia + ", conta=" + conta + ", senha=" + senha + ", saldo=" + saldo
				+ ", cliente=" + cliente + "]";
	}
}
