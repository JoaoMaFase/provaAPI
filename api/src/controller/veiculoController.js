import { Router } from "express";
import { AlterarVeiculo, DeletarVeiculo, InserirVeiculo, ListarVeiculosPorMMP } from '../repository/veiculoRepository.js'


const server = Router()

server.post('/veiculo', async (req, resp) => {
    try {
        const dados = req.body
        const resposta = await InserirVeiculo(dados)
        resp.status(200).send(resposta)

    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/veiculo/busca', async (req, resp) => {
    try {
        const dados = req.query.mmp
        const resposta = await ListarVeiculosPorMMP(dados)
        resp.status(200).send(resposta)
        
    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.put('/veiculo/:id', async (req, resp) => {
    try {
        const {id} = req.params
        const dados = req.body
        const resposta = await AlterarVeiculo(id,dados)
        console.log(resposta)
        resp.status(200).json(resposta)   
    } catch (err) {
        resp.status(404).json({
            erro:err.message
        })
    }
})

server.delete('/veiculo/:id', async (req, resp) => {

    try {
        
        const {id} = req.params

        const resposta = await DeletarVeiculo(id)

        resp.status(204).send()

    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})
ok
export default server