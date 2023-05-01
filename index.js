import ParserImpl from "./scripts/parser/impl/ParserImpl.mjs";

import express from 'express';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.use('/', router);

app.use(express.static(__dirname + '/scss'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));

// eslint-disable-next-line no-undef
app.listen(process.env.port || 3000);

let input = `max 3u + 2z
sa
insumo) 5u + z < 2`;
// eslint-disable-next-line no-unused-vars
let ps = new ParserImpl(input);

console.log(ps.listener.funcObj);
console.log(ps.listener.stList);
