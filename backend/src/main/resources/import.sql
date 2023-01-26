INSERT INTO cliente (id, nome, cpf, rg, email, data_nascimento, senha_cliente, numero, cep, logradouro, bairro, cidade, estado) VALUES (1, 'A', '949.612.154-30', '36.825.176', 'cliente1@gmail.com', '1991-01-16', '111111', 671, '52140-090', 'Rua Barão de Pajeú', 'Dois Unidos', 'Recife', 'PE');

INSERT INTO cliente (id, nome, cpf, rg, email, data_nascimento, senha_cliente, numero, cep, logradouro, bairro, cidade, estado) VALUES (2, 'B', '370.897.974-57', '29.254.761', 'cliente2@gmail.com', '2005-01-17', '222222', 998, '50790-061', 'Travessa da Capela', 'Curado', 'Recife', 'PE');

INSERT INTO conta (id, agencia, conta, saldo, senha_conta, id_cliente) VALUES (1, '1111-1', '11111-1', 400.00, '1111', 1);  

INSERT INTO conta (id, agencia, conta, saldo, senha_conta, id_cliente) VALUES (2, '2222-1', '22222-1', 400.00, '2222', 2);  

INSERT INTO telefone (id, telefone, id_cliente) VALUES (1, '(81) 99709-5814', 1);

INSERT INTO telefone (id, telefone, id_cliente) VALUES (2, '(81) 98458-3399', 2);