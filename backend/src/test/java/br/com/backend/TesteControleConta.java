package br.com.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.backend.modelo.entidades.Conta;

@SpringBootTest
@AutoConfigureMockMvc
public class TesteControleConta {	
	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private ObjectMapper objectMapper;

	@Test
	public void logarConta() throws Exception {
		String url = String.format("/conta/login/%s/%s", "949.612.154-30", "111111");	
		MvcResult mvcResult = mockMvc.perform(get(url)).andReturn();
			
		Assertions.assertEquals(mvcResult.getResponse().getStatus(), 200);
	}
}
