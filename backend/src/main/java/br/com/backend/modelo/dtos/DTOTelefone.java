package br.com.backend.modelo.dtos;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = {"dtoCliente"})
public class DTOTelefone implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String telefone;
	private DTOCliente dtoCliente;
}
