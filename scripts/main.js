let response = "";

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
        // Obtendo grafico
        let elt = document.getElementById('graph');
        let options = { zoomButtons: false, expressions: true };
        // eslint-disable-next-line no-undef
        let calculator = Desmos.GraphingCalculator(elt, options);

        // Desenhando retas
        let lista = JSON.parse(response);
        for (i in lista) {
            // TODO: se i = 0 (FO), setar slider com o valor
            // if (i == 0) {
            //     calculator.setExpression({ id: 'valorFO', latex: 'v=8' });
            //     calculator.setExpression({
            //         id: 'valorFO',
            //         sliderBounds: { min: 0, max: 20 }
            //     });
            //     // TODO: fazer FO = v
            // }
            if (i != 0) {
                calculator.setExpression({ latex: lista[i] });
            }
        }
    };
    xhr.send(outputText);
}

// Recebe uma matriz n x 2 e retorna uma string a ser usada pelo Desmos
function pointsToString(points) {
    let pointsString = "";
    let size = points.length;
    for (let i = 0; i < size - 1; i++) {
        pointsString += '(' + points[i][0] + ',' + points[i][1] + '),';
    }
    pointsString += '(' + points[size - 1][0] + ',' + points[size - 1][1] + ')';

    return pointsString;
}

let form = document.getElementById('form-input');
form.addEventListener('submit', submitForm);



// Desenhando um polígono
// let points = [[1, 2], [3, 7], [7, 4], [8, 1]];
// let pointsString = pointsToString(points);
// let poligStr = `\\polygon(${pointsString})`;
// calculator.setExpression({ id: 'polig1', latex: poligStr });

