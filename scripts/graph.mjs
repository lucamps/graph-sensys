
export class Graph {
    constructor(id = 'graph') {
        this.options = { zoomButtons: false, expressions: true };
        this.restricoes = []; //formato: { id: "identificador", latex: "ax + y = b"}
        this.funcaoObjetivo = "";
        this.valorOtimo = null;
        this.regiaoViavel = {};
        this.variaveis = [];


        if (id) {
            this.graphCalculator = this.getGraphCalculatorById(id);
        }
    }


    // Recebe uma matriz n x 2 e retorna uma string a ser usada pelo Desmos
    pointsToString(points) {
        let pointsString = "";
        let size = points.length;
        for (let i = 0; i < size - 1; i++) {
            pointsString += '(' + points[i][0] + ',' + points[i][1] + '),';
        }
        pointsString += '(' + points[size - 1][0] + ',' + points[size - 1][1] + ')';

        return pointsString;
    }


    getGraphCalculatorById(id) {
        let elt = document.getElementById(id);
        return Desmos.GraphingCalculator(elt, this.options);
    }

    drawRegiaoViavel() {
        if (!this.regiaoViavel) {
            return;
        }
        const pointsString = pointsToString(this.regiaoViavel);
        const poligStr = `\\polygon(${pointsString})`;
        this.graphCalculator.setExpression({ id: 'regiaoViavel', latex: poligStr });
    }

    drawRestricoes() {
        for (let i = 0; i < this.restricoes.length; i++) {
            console.log(this.restricoes[i]);
            this.graphCalculator.setExpression(this.restricoes[i]);
        }
        //TODO: tratar identificadores iguais e ausencia de identificador
    }

    drawFuncaoObjetivo() {
        let sliderChar = 'F';
        while (this.variaveis.includes(sliderChar)) { //TODO: trazer info sobre variaveis usadas para ca
            sliderChar++;
        }
        let value = this.valorOtimo;
        if (!value) {
            value = 10;
        }

        this.graphCalculator.setExpression({ id: 'fo', latex: `${this.funcaoObjetivo} = ${sliderChar}` });
        this.graphCalculator.setExpression({ id: 'fo-slider', latex: `${sliderChar}=${value}`, sliderBounds: { min: 0, max: value + 50 } });
    }

    clearData() {
        this.graphCalculator.setBlank();
    }
}
