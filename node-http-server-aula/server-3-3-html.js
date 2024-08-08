const http = require('http');

/* 1. Importar o módulo do fire para ler o arquivo html*/
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

/* 2. Criar função para receber e carregar o arquivo */
const loadHtmlFile = (fileName, res) => {
  fs.readFile(__dirname + fileName).then(contents => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(contents);
  });
};

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
      loadHtmlFile('/index.html', res);
      break;
    case '/autor':
      loadHtmlFile('/autor.html', res);
      break;
    case '/livro':
      loadHtmlFile('/livro.html', res);
      break;
    case '/api':
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(`{ "message": "api json"}`);
    default:
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

/*
Abrir a pasta (folder) no vscode
Abrir o terminal, que deve conter o caminho da pasta
Digitar no terminal: npm init -y 
(Inicializa um novo projeto Node.js com um arquivo package.json.)

Digitar no terminal: nodemon titulo-do-arquivo.js
(Não funciona)

Digitar no terminal: node server-3-3-html.js
(OBRIGATÓRIO. Executa o arquivo JavaScript e o nome do arquivo
que contém o código do seu servidor)

Digitar no terminal: curl http://localhost:8000/
(NÃO OBRIGATÓRIO. Executa a resposta no terminal)
*/
