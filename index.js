import ParserImpl from "./scripts/parser/impl/parserImp.mjs";
import Solver from "./scripts/solver.mjs";

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
        const debug = false;

        const inputText = req.body.text;
        let ps = new ParserImpl(inputText, debug);
        let solver = new Solver(ps.listener, debug);

        if (debug) {
            console.log("PARSER DATA:");
            console.log(ps.listener.funcObj.toString());
            console.log(ps.listener.stList);
        }

        let responseData = {
            funcObj: solver.funcObj,
            stList: solver.stList,
            regViavel: solver.regiaoViavel
        }

        res.status(200).send(responseData);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});


app.use(express.static(__dirname + '/scss'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));

// eslint-disable-next-line no-undef
app.listen(process.env.port || 3000);

