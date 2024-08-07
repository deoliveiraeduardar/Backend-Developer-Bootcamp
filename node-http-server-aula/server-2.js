/* 1. Importa o módulo http embutido no Node.js, que fornece
funcionalidades para criar um servidor HTT
 */
const http = require('http');

/* 2. Define a constante host com o valor 'localhost',
indicando que o servidor deve rodar localmente.
 */
const host = 'localhost';

/* 2. Define a constante host com o valor 'localhost',
indicando que o servidor deve rodar localmente.
 */
const port = 3000;

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end('<html><body><h1> Web server </h1></body></html>');
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

/* Abrir a pasta (folder) no vscode
Abrir o terminal, que deve conter o caminho da pasta
Digitar no terminal: npm init -y
Digitar no terminal: nodemon titulo-do-arquivo.js (não funciona)
Digitar: node server-2.js (nodemon ele nao reconhece)

Digitar: curl http://localhost:3000/
*/
