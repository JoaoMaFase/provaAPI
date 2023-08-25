import { query } from "express"
import { con } from "./connection.js"

export async function InserirVeiculo(veiculo){
    const comando = `
    insert into tb_veiculo(id_tipocarro, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values(?, ? , ?, ? , ?)
    `

    const [resposta] = await con.query(comando, [
        veiculo.tipo, 
        veiculo.modelo,
        veiculo.marca,
        veiculo.ano,
        veiculo.placa,
    ])
    veiculo.id = resposta.insertId
    return veiculo
}
export async function ListarVeiculosPorMMP(mmp){
    const comando = `
    select  v.nm_modelo as modelo,
            v.ds_marca as marca,
            v.nr_ano as ano,
            t.tp_veiculo as tipo,
            v.ds_placa as placa
            from tb_veiculo as v
            inner join tb_tipo_veiculo as t on t.id_tipocarro = v.id_tipocarro
        WHERE   v.nm_modelo like ? or
                v.ds_marca like ? or
                v.ds_placa like ?
    `
    const [resposta] = await con.query( comando, [`%${mmp}%`,`%${mmp}%`,`%${mmp}%`])
    return resposta  
}

export async function AlterarVeiculo(id,veiculo){
    const comando = `
        update tb_veiculo as v
        inner join tb_tipo_veiculo as t on t.id_tipocarro = v.id_tipocarro
                set v.nm_modelo = ? ,
                v.ds_marca = ? ,
                v.nr_ano = ?,
                t.tp_veiculo = ?
                where v.id_veiculo = ?
    `
    const [resposta] = await con.query(comando, [
        veiculo.tipo, 
        veiculo.modelo,
        veiculo.marca,
        veiculo.ano,
        veiculo.placa,
        id
    ])


}
