package br.com.backend.modelo.dtos;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DTOCliente implements Serializable {	
	private static final long serialVersionUID = 1L;
	
	private Long id;
    private String nome;
    private String cpf;
    private String rg;
    private String email;
    private LocalDate dataNascimento;
    private String senhaCliente;
    private Long numero;
    private String cep;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String estado;  
}
