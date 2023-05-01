import ParserImpl from "./scripts/parser/impl/ParserImpl.mjs";

import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/", (req, res) => {
    try {
        const inputText = req.body.text;
        let ps = new ParserImpl(inputText);
        console.log("PARSER DATA:");
        console.log(ps.listener.funcObj.toString());
        console.log(ps.listener.stList);

        let expressionList = ps.listener.stList;
        expressionList.unshift(ps.listener.funcObj);

        let stringList = [];
        for (let i in expressionList) {
            stringList.push(expressionList[i].toString());
        }

        res.status(200).send(stringList);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});


app.use(express.static(__dirname + '/scss'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));

// eslint-disable-next-line no-undef
app.listen(process.env.port || 3000);

