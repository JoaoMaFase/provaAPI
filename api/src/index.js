
import 'dotenv/config'
import clienteController from './controller/clienteController.js'
import cors from 'cors'
import express from 'express'


const server = express()

server.use(cors())

server.use(express.json())

server.use(clienteController)



server.listen(process.env.PORT, () =>
            console.log(`API está funfando na porta ${process.env.PORT}`))