import { Graph } from "./graph.mjs";
import ObjectiveFunction from "./model/objectiveFunction.mjs";
import { ResponseHandler } from "./responseHandler.mjs";

let response = "";
let form = document.getElementById('form-input');
form.addEventListener('submit', submitForm);

const graph = new Graph('graph');

const alertDiv = document.getElementById('alertDiv');
const alertText = document.getElementById('alertText');


const fo_btns = [
    document.getElementById('fo-x-value'),
    document.getElementById('fo-y-value'),
    document.getElementById('fo-value')
];

const slider_fo = document.getElementById('fo_custom_range');

function linkSliderToBtn(btn) {
    return function () {
        btn.innerHTML = slider_fo.value;
    }
}

const bind_fo_slider_to_btn = (btn) => {
    let value = btn.innerHTML;
    slider_fo.min = Number(value) - 50;
    slider_fo.max = Number(value) + 50;
    slider_fo.value = value;

    slider_fo.addEventListener('input', linkSliderToBtn(btn));
}

const switch_fo_selected_btn = (btn) => {
    return function () {
        for (let i = 0; i < fo_btns.length; i++) {
            if (btn != fo_btns[i]) {
                fo_btns[i].classList.remove('active');
                // slider_fo.removeEventListener('input', linkSliderToBtn);
            }
            else {
                console.log(`Valor do botao selecionado: ${btn.innerHTML}`);

                bind_fo_slider_to_btn(btn);
            }
        }
    };
}

/**
 * @param {ObjectiveFunction.Type.max|ObjectiveFunction.Type.min} foType 
*/
const changeObjectiveFunctionSelectedType = (selectMaxMin, foType) => {
    if (foType == ObjectiveFunction.Type.max || foType == ObjectiveFunction.Type.min) {
        selectMaxMin.value = foType;
    }
    // TODO: else com excecao
};

/**
 * 
 * @param {Text} selectMaxMin 
 * @param {ObjectiveFunction} fo 
 */
const bindObjectiveFunctionButtons = (selectMaxMin, fo) => {
    selectMaxMin.addEventListener('change', () => {
        fo.type = selectMaxMin.value;
        fo.updateValue();

        graph.drawOrUpdateFOSliderResult(fo.value);
        setButtonLabel('fo-value', fo.value);
    });
};

/**
 * @param {ObjectiveFunction} fo 
 */
const changeVariablesInInterface = (fo) => {
    let xDivFo = document.getElementById('x-text-fo');
    let yDivFo = document.getElementById('y-text-fo');

    xDivFo.innerHTML = `${fo.nameVarA} + `;
    yDivFo.innerHTML = `${fo.nameVarB} = `;

    //TODO: para as restriçoes -> unificar id do backend com id do html, percorrer a lista e fazer o mesmo que foi feito para a FO
}

const setButtonLabel = (id, valor) => {
    const btn = document.getElementById(id).firstChild;
    btn.data = Number(valor).toFixed(2);
}

const showAlert = (msg) => {
    alertText.innerHTML = msg;
    alertDiv.classList.add('active');
}

const hideAlert = () => {
    alertDiv.classList.remove('active');
}

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
    xhr.onerror = () => {
        console.log('Erro no OnError: ' + xhr.status);
    }

    xhr.onload = function () {
        if (xhr.status == 200) {
            graph.clearData();

            hideAlert();

            response = xhr.response;
            console.log("Response recebida:");
            let respJson = JSON.parse(response);

            let respH = new ResponseHandler(respJson);

            let fo = respH.funcObj;

            setButtonLabel('fo-x-value', fo.a);
            setButtonLabel('fo-y-value', fo.b);
            setButtonLabel('fo-value', fo.value);

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

            const selectMaxMin = document.getElementById('fo-type-select');

            bindObjectiveFunctionButtons(selectMaxMin, fo);
            changeObjectiveFunctionSelectedType(selectMaxMin, fo.type);

            const foDiv = document.getElementById('fo-div');
            foDiv.style.display = 'block';
            changeVariablesInInterface(respH.funcObj);

            for (let i in fo_btns) {
                fo_btns[i].addEventListener('click', switch_fo_selected_btn(fo_btns[i]));
            }

            //let slider_fo_a = graph.graphCalculator.HelperExpression({latex: graph.slider_fo_x_value_char});

            //TODO: try catch verificando se os dados existem ao mandar desenhar
            //TODO: funcao unica para desenhar tudo
        }
        else {
            console.log('Erro encontrado no OnLoad, de status: ' + xhr.status);
            if (xhr.status == 400) {
                showAlert("<b>Erro no input:</b> " + xhr.response);
            }
            else {
                showAlert("Erro: " + xhr.response);
            }
        }

    };
    xhr.send(outputText);
}






