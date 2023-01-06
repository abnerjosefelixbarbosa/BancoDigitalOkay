package br.com.backend.configuracoes;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import br.com.backend.interfaces.ConfiguracaoFonteDados;

@Component
@Profile("dev")
public class ConfiguracaoFonteDadosDesenvolvedor implements ConfiguracaoFonteDados {

	@Override
	public void cofigurar() {
		System.out.println("configurações de desenvolvimento");		
	}

}
