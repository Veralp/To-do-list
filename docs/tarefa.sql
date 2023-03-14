-- SQL do banco de dados de tarefa com apenas uma tabela
DROP DATABASE IF EXISTS tarefa;
CREATE DATABASE tarefa CHARSET=UTF8 COLLATE utf8_general_ci;
USE tarefa;
-- DDL Criação da estrutura da tabela
CREATE TABLE task(
    id int not null primary key auto_increment,
    tarefa varchar(30) not null,
    data datetime not null ,
    status varchar(20) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO task VALUES
(1,'Ir na escola Senai','2023-03-1 13:00','Pendente'),
(2,'ir no banco do Brasil','2023-03-10  14:00','Em andamento'),
(3,'Levar o cachorro no veterinário  15:00','2023-03-10','Concluída'),
(4,'Treinar frontal','2023-03-10  13:00','Pendente'),
(5,'Ir no mercado','2023-03-10 16:00','Pendente'),
(6,'Comprar pão','2023-03-10 18:00','Pendente');