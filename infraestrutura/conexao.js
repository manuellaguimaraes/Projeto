const mysql = require('mysql') //importando banco de dados mysql

const conexao = mysql.createConnection({ //configurações iniciais do banco de dados
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao