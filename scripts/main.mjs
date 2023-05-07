import { Graph } from "./graph.mjs";

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

        let lista = JSON.parse(response);

        let [fo, ...restricoes] = lista;

        graph.funcaoObjetivo = fo;

        let restrObjs = [];
        for (let i = 0; i < restricoes.length; i++) {
            restrObjs.push({ id: `reta${i}`, latex: restricoes[i] });
        }
        graph.restricoes = restrObjs;

        graph.drawFuncaoObjetivo();
        graph.drawRestricoes();

        //TODO: try catch verificando se os dados existem ao mandar desenhar
        //TODO: funcao unica para desenhar tudo
    };
    xhr.send(outputText);
}






