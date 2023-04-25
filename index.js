const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',(req,res) => {
    res.sendFile( path.join( __dirname + '/index.html' ) );
});

app.use('/',router);

app.listen(process.env.port || 3000);

// const http = require('http');
// const hostname ='127.0.0.1';
// const port = 3000;

// const server = http.createServer( 
//     (req,res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type','text/plain');
//         res.end('index.html');
//     }
// );

// server.listen( port, hostname, 
//     () => {
//         console.log("Servidor rodando!");
//     }
// );