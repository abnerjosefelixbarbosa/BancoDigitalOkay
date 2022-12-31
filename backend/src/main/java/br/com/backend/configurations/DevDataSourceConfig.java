package br.com.backend.configurations;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import br.com.backend.interfaces.DataSourceConfiguration;

@Component
@Profile("dev")
public class DevDataSourceConfig implements DataSourceConfiguration {

	@Override
	public void setup() {
		System.out.println("configurações de desenvolvimento");
	}

}
