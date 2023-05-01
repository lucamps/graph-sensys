import ParserImpl from "./scripts/parser/impl/ParserImpl.mjs";

import express from 'express';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/", (req, res) => {
    const inputText = req.body.input_label;
    let ps = new ParserImpl(inputText);
    console.log("INPUT DATA:");
    console.log(ps.listener.funcObj);
    console.log(ps.listener.stList);
    return;
});


app.use(express.static(__dirname + '/scss'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));

// eslint-disable-next-line no-undef
app.listen(process.env.port || 3000);

