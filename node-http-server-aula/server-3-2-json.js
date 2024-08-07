/*RETORNA UM CONTEÚDO EM JSON */

/* 1. Importa o módulo http embutido no Node.js,
que fornece funcionalidades para criar um servidor HTTP.
*/
const http = require('http');

/* 2. Define a constante host com o valor 'localhost',
indicando que o servidor deve rodar localmente.
*/
const host = 'localhost';

/* 3. Define a constante port com o valor 3000,
especificando a porta em que o servidor irá escutar.
*/
const port = 4000;

/* 4. Cria um servidor HTTP que executa uma função
callback a cada requisição recebida. Esta função recebe
dois objetos: req (requisição) e res (resposta). 
Isso significa que cada vez que alguém tocar a campainha,
vai seguir instruções específicas para responder.
*/
const server = http.createServer(function (req, res) {
  /* 5. Define o cabeçalho da resposta HTTP, especificando
  que   o conteúdo retornado será um conteúd em json.
  */
  res.setHeader('Content-Type', 'application/json');

  /* 6. Envia um cabeçalho de resposta com o status HTTP 200,
  que indica sucesso. O porteiro começa a conversa com o
  visitante   dizendo que tudo está bem pra entrar.
  */
  res.writeHead(200);
  console.log('req', req);

  /* 7. Envia o corpo da resposta HTTP e encerra a resposta,
  retornando um simples HTML.  O porteiro entrega ao visitante
  uma   pequena carta escrita em HTML, dizendo "Web server".
  */
  res.end(`{ "message": "This is my web server" }`);

  /* 8. Fecha a definição da função callback passada para
  http.createServer.   Fecha a caderneta de instruções do porteiro.
   */
});

/* 9. Faz o servidor escutar requisições na porta e host
especificados. Quando o servidor começa a escutar, a função
callback é executada. O porteiro começa a ficar de prontidão
na porta 3000 da casa (localhost), pronto para atender qualquer
visitante.
*/
server.listen(port, host, () => {
  /* 10. Imprime no console uma mensagem indicando que o servidor
  está rodando e a URL onde ele pode ser acessado. 
   */
  console.log(`Server is running on http://${host}:${port}`);

  /* 11. Fecha a definição da função callback passada para
  server.listen.
  */
});

/*
Abrir a pasta (folder) no vscode
Abrir o terminal, que deve conter o caminho da pasta
Digitar no terminal: npm init -y 
(Inicializa um novo projeto Node.js com um arquivo package.json.)

Digitar no terminal: nodemon titulo-do-arquivo.js
(Não funciona)

Digitar no terminal: node server-3-2-json.js
(OBRIGATÓRIO. Executa o arquivo JavaScript e o nome do arquivo
que contém o código do seu servidor)

Digitar no terminal: curl http://localhost:4000/
(NÃO OBRIGATÓRIO. Executa a resposta no terminal)
*/
