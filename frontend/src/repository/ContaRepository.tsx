import { Conta } from "./../model/Conta";
import { Cliente } from "./../model/Cliente";
import { Telefone } from "../model/Telefone";

export const ContaRepository = () => {
    const contas = new Array<Conta>();

    return {
        listarConta: () => {
            const cliente1: Cliente = {
                id: 1,
                nome: "Alice Andrea da Rocha",
                cpf: "621.083.074-94",
                rg: "46.610.042",
                email: "alice.andrea.darocha@torrez.com.br",
                dataNascimento: new Date("1998-08-24"),
                senhaCliente: "153689",
                numero: 519,
                cep: "54705-204",
                logradouro: "4ª Travessa Francisco Alves",
                bairro: "Capibaribe",
                cidade: "São Lourenço da Mata",
                estado: "PE",
            }
            const conta1: Conta = {
                id: 1,
                agencia: "",
                conta: "",
                saldo: 0,
                senhaConta: "",
                cliente: cliente1,
            }
            const telefone1: Telefone = {
                id: 1,
                telefone: "(87) 99213-9989",
                cliente: cliente1,
            }

            const cliente2: Cliente = {
                id: 2,
                nome: "Thiago Danilo Igor Vieira",
                cpf: "703.668.984-69",
                rg: "15.246.926",
                email: "thiagodanilovieira@tlmix.com.br",
                dataNascimento: new Date("1999-10-21"),
                senhaCliente: "905678",
                numero: 448,
                cep: "56519-401",
                logradouro: "Vila São José",
                bairro: "Boa Vista",
                cidade: "Arcoverde",
                estado: "PE",
            }
            const conta2: Conta = {
                id: 2,
                agencia: "",
                conta: "",
                saldo: 0,
                senhaConta: "",
                cliente: cliente2,
            }
            const telefone2: Telefone = {
                id: 2,
                telefone: "(87) 99284-9110",
                cliente: cliente2,
            }

            contas.push(conta1);
            contas.push(conta2);
            return contas
        },
    }
}

