import Constants from "./constants.mjs";
import { Graph } from "./graph.mjs";
import HtmlContentHandler from "./htmlContentHandler.mjs";
import ObjectiveFunction from "./model/objectiveFunction.mjs";
import { ResponseHandler } from "./responseHandler.mjs";

let response = "";
let form = document.getElementById('form-input');
form.addEventListener('submit', submitForm);

const graph = new Graph('graph');

const alertDiv = document.getElementById('alertDiv');
const alertText = document.getElementById('alertText');


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
 * @param {Text} selectMaxMin 
 * @param {ObjectiveFunction} fo 
 */
const bindObjectiveFunctionButtons = (selectMaxMin, fo) => {
    selectMaxMin.addEventListener('change', () => {
        fo.type = selectMaxMin.value;
        fo.updateValue();

        graph.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_RESULT, fo.value, fo.minValue - 50, fo.maxValue + 50);

        setButtonLabel(Constants.FO_ID.RESULT, fo.value);
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

const clearOldContent = () => {
    graph.clearData();
    // removendo restricoes anteriores (caso existam)
    let lista_ul_old = document.querySelectorAll('.dynamic-content');
    for (let i in lista_ul_old) {
        if (lista_ul_old[i].parentNode) {
            lista_ul_old[i].parentNode.removeChild(lista_ul_old[i]);
        }
    }
}

function resizeGraph(maxX, maxY) {
    graph.updateBounds(maxX * (-0.5), maxY * (-0.25), maxX * (1.3), maxY * (1.3));
}

function handleResponse(inputText, oldMapBounds = null) {
    // Formatting data for Express
    const requestTxt = `text=${encodeURIComponent(inputText)}`;

    // Send the form data using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onerror = () => {
        console.log('Erro no OnError: ' + xhr.status);
    }

    xhr.onload = function () {
        if (xhr.status == 200) {
            clearOldContent();

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

            if ((respH.regViavel != null) && respH.regViavel.length != 0) {
                graph.regiaoViavel = respH.regViavel;
                graph.drawRegiaoViavel();
            }
            else {
                showAlert("Aviso: não foi possível calcular a região viável para esses parâmetros.");
            }

            graph.drawFuncaoObjetivo();

            graph.drawRestricoes();
            if (oldMapBounds != null) {
                graph.graphCalculator.setMathBounds(oldMapBounds);
            }
            else {
                resizeGraph(respH.maxX, respH.maxY);
            }

            // Adicionando divs de restricoes
            let lista_ul = document.getElementById('list-ul');
            for (let i = 0; i < respH.stList.length; i++) {
                let res = respH.stList[i];
                lista_ul.innerHTML += HtmlContentHandler.getDivRes(res);
            }

            const selectMaxMin = document.getElementById('fo-type-select');

            changeObjectiveFunctionSelectedType(selectMaxMin, fo.type);
            bindObjectiveFunctionButtons(selectMaxMin, fo);

            const foDiv = document.getElementById('fo-div');
            foDiv.style.display = 'block';
            changeVariablesInInterface(respH.funcObj);


            const fo_btns = [
                document.getElementById(Constants.FO_ID.X_VALUE),
                document.getElementById(Constants.FO_ID.Y_VALUE),
                document.getElementById(Constants.FO_ID.RESULT)
            ];
            console.log("botoes:");
            console.log(fo_btns);

            const slider_fo = document.getElementById('fo_custom_range');
            fo_btns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    fo_btns.forEach(function (other_btn) {

                        if (other_btn != btn) {
                            other_btn.classList.remove('active');
                        }
                    });
                    let value = btn.innerHTML;
                    slider_fo.min = Number(fo.minValue - 50).toString();
                    slider_fo.max = Number(fo.maxValue + 50).toString();
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
                                graph.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_X, sliderValue);
                                break;
                            case 'fo-y-value':
                                graph.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_Y, sliderValue);
                                break;
                            case 'fo-value':
                                graph.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_RESULT, sliderValue, fo.minValue * (-1.5), fo.maxValue * (1.5));
                                break;
                            default:
                                break;
                        }
                    }
                });
            });

            respH.stList.forEach((res, idx) => {
                let sliderElem = document.getElementById(`range-${res.id}`);
                let valueElem = document.getElementById(`result-value-${res.id}`);
                let checkBox = document.getElementById(`check-${res.id}`);

                checkBox.addEventListener("change", () => {
                    checkBox.style.backgroundColor = checkBox.checked ? res.color : "#FFFFFF";
                })

                if (!res.minToShow || !res.maxToShow) {
                    res.calculateMinAndMaxToShow();
                }
                sliderElem.min = res.minToShow;
                sliderElem.max = res.maxToShow;
                sliderElem.value = res.value;

                sliderElem.addEventListener('input', function () {
                    valueElem.innerHTML = sliderElem.value;
                    graph.updateResValue(res.id, sliderElem.value);
                });

                sliderElem.addEventListener('mouseup', function () {
                    respH.stList[idx].value = sliderElem.value;
                    handleResponse(respH.getInputText(), graph.graphCalculator.graphpaperBounds.mathCoordinates);
                    return;
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
    xhr.send(requestTxt);
}

function submitForm(e) {
    e.preventDefault(); // Prevent the page from reloading

    // Get the form data
    const formData = new FormData(form);
    const content = formData.values().next().value;

    handleResponse(content);
}






