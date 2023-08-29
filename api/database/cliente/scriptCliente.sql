create database prova;
use prova;

create table tb_cliente(
	id_cliente   	int primary key auto_increment,
    nm_cliente   	varchar(200),
    ds_email		varchar(500),
    ds_telefone  	varchar(20),
    ds_cpf			varchar(20),
    ds_cnh 			varchar(20)
);

-- ENDPOINT::post - inserir cliente
insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
				values(? , ? , ? , ? ,?);
                
-- ENDPOINT::put - alterar cliente
update (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
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