package br.com.backend.modelo.dtos;

import java.io.Serializable;
import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = {"dtoCliente"})
public class DTOConta implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String agencia;
	private String conta;
	private BigDecimal saldo;
	private String senhaConta;
	private DTOCliente dtoCliente;
	
	public boolean verificarLogarConta() {
		if (dtoCliente.getCpf().isEmpty()) 
			return false;
		if (dtoCliente.getSenhaCliente().isEmpty()) 
			return false;
 		
		return true;
	}
}
