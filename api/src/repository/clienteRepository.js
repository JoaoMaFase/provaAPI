import { con } from "./connection.js"
export async function InserirCliente (cliente) {

    const comando = 
        `  insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                values(? , ? , ? , ? ,?)`

    const [resposta] = await con.query(comando, [
        cliente.nome, 
        cliente.email, 
        cliente.telefone, 
        cliente.cpf, 
        cliente.cnh ])
    cliente.id = resposta.insertId
    return cliente

}
export async function ListarClientesNome (nome) {
    const comando = 
            `SELECT 
            id_cliente as id,
            nm_cliente as nome,
            ds_email as email,
            ds_telefone as telefone,
            ds_cpf as cpf,
            ds_cnh as cnh
            from tb_cliente
            where nm_cliente like ?`

    const [resposta] = await con.query (comando, [`%${nome}%`])
    return resposta;
}
export async function ListarClientes(){
    const comando = `
        SELECT 
        id_cliente as id,
        nm_cliente as nome,
        ds_email as email,
        ds_telefone as telefone,
        ds_cpf as cpf,
        ds_cnh as cnh
        from tb_cliente
    `
    const [resposta] = await con.query(comando)
    return resposta  
}

export async function AlterarCliente (id, cliente) {

    const comando = 
        ` update tb_cliente
            set nm_cliente = ? ,
            ds_email = ? ,
            ds_telefone = ?,
            ds_cpf = ?,
            ds_cnh = ?
            where id_cliente = ?`

    const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh, id])

    return resposta.affectedRows;
}

export async function DeletarCliente (id) {
    console.log(id)
    const comando = 
            `delete from tb_cliente
                where id_cliente = ?`

    const [resposta] = await con.query (comando, [id])
    return resposta.affectedRows;
}