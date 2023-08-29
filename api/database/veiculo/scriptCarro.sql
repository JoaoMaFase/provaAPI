-- clientes 
--
--
--
create table tb_veiculo(
    id_veiculo		int auto_increment primary key,
    id_tipocarro            int,
    ds_modelo		       varchar(200),
    ds_marca 		       varchar(200),
    nr_ano			int,
    ds_placa 		       varchar(200),
    foreign key (id_tipocarro) references tb_tipocarro(id_tipocarro)
);

CREATE TABLE tb_tipo_veiculo (
    id_tipo_veiculo INT PRIMARY KEY AUTO_INCREMENT,
    ds_tipo_veiculo VARCHAR(1000)
);

