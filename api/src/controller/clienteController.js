import { Router } from "express";
import { AlterarCliente, DeletarCliente, InserirCliente, ListarClientesNome } from "../repository/clienteRepository.js";
const server = Router()

server.post('/cliente', async (req,resp) => {
    try {

        const clienteInserir = req.body

        const clienteInserido = await InserirCliente(clienteInserir)

        resp.send(clienteInserido)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/cliente/busca', async (req, resp) => {

    try {

        const nome = req.query.nome
        const resposta = await ListarClientesNome(nome)
        

        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
server.put('/cliente/:id', async (req, resp) => {

    try {
        
        const {id} = req.params

        const clienteAlterado = req.body

        const resposta = await AlterarCliente(id, clienteAlterado)

        resp.status(204).send()

    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/cliente/:id', async (req, resp) => {

    try {
        
        const {id} = req.params

        const resposta = await DeletarCliente(id)

        resp.status(204).send()

    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})
export default server;