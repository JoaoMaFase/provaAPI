-- veiculos

-- tabela tipo_veiculo
create table tb_tipo_veiculo(
       id_tipocarro  int primary key auto_increment,
       tp_veiculo    varchar(100)
);

-- tabela veiculos
create table tb_veiculo(
       id_veiculo    int primary key auto_increment,
       id_tipocarro  int,
       nm_modelo     varchar(200),
       ds_marca      varchar(100),
       nr_ano        int,
       ds_placa      varchar(10),
       foreign key (id_tipocarro) references tb_tipo_veiculo(id_tipocarro)
);

-- ENDPOINT::post - inserir cliente
insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
				values(? , ? , ? , ? ,?);
                
-- ENDPOINT::put - alterar cliente
update tb_cliente
            set nm_cliente = ? ,
            ds_email = ? ,
            ds_telefone = ?,
            ds_cpf = ?,
            ds_cnh = ?
            where id_cliente = ?;
        
        
-- ENDPOINT::get -- consultar cliente por nome
SELECT nm_cliente as nome,
	   ds_email as email,
       ds_telefone as telefone,
       ds_cpf as cpf,
       ds_cnh as cnh
       where nome like ?;

-- ENDPOINT::delete -- deletar por id
delete from tb_cliente
	where id_agenda = ?;
    