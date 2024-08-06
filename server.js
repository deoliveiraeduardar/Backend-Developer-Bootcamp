//CÓDIGO MÍNIMO PARA CRIAR O SERVIDOR WEB

/* 1. Importar o módulo http que o nodejs tem para 
tratar as requisições que vamos trabalhar no servidor
*/
const http = require('http');

/* 2. Definir um host, ou seja, o endereçamento da máquina
que vai rodar o servidor.
Localhost é um nome padrão para identificar a própria máquina
na rede
*/
const host = 'localhost';

// 3. Definir um endereço de porta.
const port = 8000;

/* 4. Criar o servidor com o módulo http a partir do node.js
Quando chamo o createServer o que ele espera como parâmetro é
uma função que vai ter outros dois parâmetros (requisiçao e resposta).
*/
const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('My first server');
});

/* 5. Vincular o servidor na porta.
Usar aspas invertidas para interpolar
*/
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
