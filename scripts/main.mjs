import { Graph } from "./graph.mjs";
import { ResponseHandler } from "./responseHandler.mjs";

let response = "";
let form = document.getElementById('form-input');
form.addEventListener('submit', submitForm);

const graph = new Graph('graph');

function submitForm(e) {
    e.preventDefault(); // Prevent the page from reloading

    // Get the form data
    const formData = new FormData(form);
    const content = formData.values().next().value;

    // Formatting data for Express
    const outputText = `text=${encodeURIComponent(content)}`;

    // Send the form data using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        response = xhr.response;
        console.log("Response recebida:");
        let respJson = JSON.parse(response);
        //console.log(respJson);

        let respH = new ResponseHandler(respJson);

        let fo = respH.funcObj.toString();;

        graph.funcaoObjetivo = fo;

        let restricoes = respH.stList;
        let restrObjs = [];
        for (let i = 0; i < restricoes.length; i++) {
            restrObjs.push({ id: `reta${i}`, latex: restricoes[i].toString() });
            // TODO: pegar id do parser e, se nao tiver, criar um padrao sem repetir
        }
        graph.restricoes = restrObjs;

        graph.regiaoViavel = respH.regViavel;

        graph.drawFuncaoObjetivo();
        graph.drawRestricoes();
        graph.drawRegiaoViavel();

        //TODO: try catch verificando se os dados existem ao mandar desenhar
        //TODO: funcao unica para desenhar tudo
    };
    xhr.send(outputText);
}






