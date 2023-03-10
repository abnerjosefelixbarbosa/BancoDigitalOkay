package br.com.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.backend.interfaces.ConfiguracaoFonteDados;

@SpringBootApplication
public class BackendApplication implements ApplicationRunner {
	@Autowired
	private ConfiguracaoFonteDados configuracaoFonteDados;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		configuracaoFonteDados.cofigurar();
	}
}
