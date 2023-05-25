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

        graph.drawOrUpdateFOSliderValue('fo-slider-result', fo.value);
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

            graph.stList = respH.stList;

            graph.regiaoViavel = respH.regViavel;

            graph.drawFuncaoObjetivo();
            graph.drawRestricoes();
            graph.drawRegiaoViavel();
            graph.updateBounds(respH.maxW * (-0.36), respH.maxH * (-0.25), respH.maxW, respH.maxH);

            const selectMaxMin = document.getElementById('fo-type-select');

            bindObjectiveFunctionButtons(selectMaxMin, fo);
            changeObjectiveFunctionSelectedType(selectMaxMin, fo.type);

            const foDiv = document.getElementById('fo-div');
            foDiv.style.display = 'block';
            changeVariablesInInterface(respH.funcObj);


            fo_btns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    fo_btns.forEach(function (other_btn) {
                        if (other_btn != btn) {
                            other_btn.classList.remove('active');
                        }
                    });
                    let value = btn.innerHTML;
                    slider_fo.min = Number(value) - 50;
                    slider_fo.max = Number(value) + 50;
                    slider_fo.value = value;
                });
            });

            slider_fo.addEventListener('input', function () {
                const sliderValue = slider_fo.value;

                // Iterate through the buttons
                fo_btns.forEach(function (button) {
                    // Check if the button is the selected one
                    if (button.classList.contains('active')) {
                        button.innerHTML = sliderValue;

                        // Change the graph values
                        switch (button.id) {
                            case 'fo-x-value':
                                graph.drawOrUpdateFOSliderValue('fo-slider-x', sliderValue);
                                break;
                            case 'fo-y-value':
                                graph.drawOrUpdateFOSliderValue('fo-slider-y', sliderValue);
                                break;
                            case 'fo-value':
                                graph.drawOrUpdateFOSliderValue('fo-slider-result', sliderValue);
                                break;
                            default:
                                break;
                        }
                    }
                });
            });
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






