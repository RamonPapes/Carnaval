const express = require('express');
const fs = require('fs');

const app = express();
app.get('/', (req, res) => {
  // Lê o arquivo index.html
  fs.readFile('index.html', (err, data) => {
    if (err) {
      // Se houver um erro, envia uma mensagem de erro ao navegador
      res.status(500).send('Ocorreu um erro ao ler o arquivo index.html');
    } else {
      // Se o arquivo for lido com sucesso, envia o conteúdo do arquivo como resposta
      res.setHeader('Content-Type', 'text/html');
      res.send(data);
    }
  });
});

app.get('/home', (req, res) => {
    // Lê o arquivo home.html
    fs.readFile('app/src/home/home.html', (err, data) => {
      if (err) {
        // Se houver um erro, envia uma mensagem de erro ao navegador
        res.status(500).send('Ocorreu um erro ao ler o arquivo home.html');
      } else {
        // Se o arquivo for lido com sucesso, envia o conteúdo do arquivo como resposta
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
      }
    });
  });

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});