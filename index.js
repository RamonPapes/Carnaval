// const express = require('express');
// const fs = require('fs');

// const app = express();

// app.get('/', (req, res) => {
//   // Lê o arquivo index.html
//   fs.readFile('index.html', (err, data) => {
//     if (err) {
//       // Se houver um erro, envia uma mensagem de erro ao navegador
//       res.status(500).send('Ocorreu um erro ao ler o arquivo index.html');
//     } else {
//       // Se o arquivo for lido com sucesso, envia o conteúdo do arquivo como resposta
//       res.setHeader('Content-Type', 'text/html');
//       res.send(data);
//     }
//   });
// });

// app.get('/home', (req, res) => {
//     // Lê o arquivo home.html
//     fs.readFile('home.html', (err, data) => {
//       if (err) {
//         // Se houver um erro, envia uma mensagem de erro ao navegador
//         res.status(500).send('Ocorreu um erro ao ler o arquivo home.html');
//       } else {
//         // Se o arquivo for lido com sucesso, envia o conteúdo do arquivo como resposta
//         res.setHeader('Content-Type', 'text/html');
//         res.send(data);
//       }
//     });
// });

// app.listen(3000, () => {
//   console.log('Servidor iniciado na porta 3000');
// });

const express = require('express');
const app = express();
const path = require('path');

// Define a porta a ser usada pelo servidor
const PORT = process.env.PORT || 3000;

// Define a pasta onde os arquivos estáticos da aplicação estão localizados
app.use(express.static(path.join(__dirname, 'dist')));

// Configura uma rota para a página inicial
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', '/app/src/html/index.html'));
});

// Configura uma rota para a página home
app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', '/app/src/html/home.html'));
});

// Inicia o servidor
app.listen(PORT, function () {
  console.log('Servidor iniciado na porta ' + PORT);
});