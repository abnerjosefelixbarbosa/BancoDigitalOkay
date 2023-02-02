import axios from "axios"
import { Conta } from "../model/Conta"
import { ContaRepository } from './../repository/ContaRepository';

export const ContaService = (conta: Conta) => {
    let contaRepository = ContaRepository();

    return {
        logarConta: async () => contaRepository.listarConta().find((val) => {
            if (val.cliente?.cpf === conta.cliente?.cpf && val.cliente?.senhaCliente === conta.cliente?.senhaCliente) {
                return val
            } 
            return {};          
        })
    }
}

 // const logarConta = async (conta: Conta) => await axios
    //     .get(`http://localhost:8080/conta/login/${conta.cliente?.cpf}/${conta.cliente?.senhaCliente}`)
    //     .then((response) => response.data)
    //     .catch((error) => error.response.data);

