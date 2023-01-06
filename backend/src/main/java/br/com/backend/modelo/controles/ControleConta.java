package br.com.backend.modelo.controles;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.backend.interfaces.OperacoesConta;
import br.com.backend.modelo.entidades.Conta;

@RestController
@RequestMapping("/conta")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ControleConta {
	@Autowired
	private OperacoesConta operacoesConta;

	@GetMapping("/login/{agencia}/{conta}/{senha}")
	public ResponseEntity<Conta> login(@PathVariable String agencia, @PathVariable String conta, @PathVariable String senha) {	
		Conta resultado = operacoesConta.login(agencia, conta, senha);
		
		if (resultado == null) {
			return ResponseEntity.badRequest().body(resultado);
		}
		
		return ResponseEntity.ok(resultado);
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> manipularExcecoes(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

}
