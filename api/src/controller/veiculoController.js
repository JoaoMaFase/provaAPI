import { Router } from "express";
import { InserirCliente } from "../repository/clienteRepository";
const server = Router()

server.post('/veiculo', async (req, resp) => {
    try {
        

    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})