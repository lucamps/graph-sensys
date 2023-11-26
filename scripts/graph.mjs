import Constants from "./constants.mjs";

export class Graph {
    static get PRECISION() { return 10; };
    get slider_fo_x_value_char() { return 'a'; }
    get slider_fo_y_value_char() { return 'b'; }
    get slider_fo_result_value_char() { return 'c'; }

    constructor(id = 'graph') {
        this.options = { zoomButtons: false, expressions: false };
        this.stList = [];
        this.funcaoObjetivo = {};
        this.regiaoViavel = {};
        this.hiddenElements = new Map();

        if (id) {
            this.graphCalculator = this.getGraphCalculatorById(id);
        }
    }

    // Exibe ou esconde um elemento no grafico a partir do id
    hideOrShowElement(id, hide) {
        let expressionsList = this.graphCalculator.getExpressions();
        for (let i = 0; i < expressionsList.length; i++) {
            if (expressionsList[i].id == id) {
                expressionsList[i].hidden = hide;
                this.graphCalculator.setExpression(expressionsList[i]);

                if (hide) {
                    this.hiddenElements.set(id, expressionsList[i]);
                }
                else {
                    this.hiddenElements.delete(id);
                }

                break;
            }
        }
    }

    // Recebe uma matriz n x 2 e retorna uma string a ser usada pelo Desmos
    pointsToString(points) {
        let pointsString = "";
        let size = points.length;

        let i = 0;
        let x = 0;
        let y = 0;
        while (i < size - 1) {
            x = Number(points[i][0]).toFixed(Graph.PRECISION);
            y = Number(points[i][1]).toFixed(Graph.PRECISION);
            pointsString += `(${x}, ${y}),`;
            i++;
        }
        x = Number(points[i][0]).toFixed(Graph.PRECISION);
        y = Number(points[i][1]).toFixed(Graph.PRECISION);
        pointsString += `(${x}, ${y})`;

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
        const pointsString = this.pointsToString(this.regiaoViavel);
        const poligStr = `\\polygon(${pointsString})`;
        this.graphCalculator.setExpression({ id: 'regiaoViavel', latex: poligStr, color: '#777777' });
    }

    setResValue(res) {
        let value = res.value;
        const valueToUse = Number(Number(value).toFixed(Graph.PRECISION));

        res.calculateMinAndMaxToShow(this.funcaoObjetivo);


        this.graphCalculator.setExpression({
            id: res.sliderChar,
            latex: `${res.sliderChar}=${valueToUse}`,
            sliderBounds: { min: res.minToShow, max: res.maxToShow }
        });
    }

    getResById(resId) {
        //TODO: mudar a estrutura para um mapa vai tornar mais eficiente
        for (let i in this.stList) {
            if (this.stList[i].id == resId) {
                return this.stList[i];
            }
        }
        return null;
    }

    updateResValue(resId, valueToUse) {
        let res = this.getResById(resId);
        this.graphCalculator.setExpression({
            id: res.sliderChar,
            latex: `${res.sliderChar}=${valueToUse}`
        });
    }


    drawRestricoes() {
        for (let i = 0; i < this.stList.length; i++) {
            let restExp = {
                id: this.stList[i].id,
                latex: `${this.stList[i].toString(false)} = ${this.stList[i].sliderChar}`,
                color: this.stList[i].color
            }

            console.log(restExp);

            this.graphCalculator.setExpression(restExp);

            this.setResValue(this.stList[i]);
        }
    }


    drawFuncaoObjetivo() {
        let a = Number(this.funcaoObjetivo.a).toFixed(Graph.PRECISION);
        let b = Number(this.funcaoObjetivo.b).toFixed(Graph.PRECISION);

        this.graphCalculator.setExpression({
            id: 'fo',
            latex: `${this.slider_fo_x_value_char}x + (${this.slider_fo_y_value_char}y) = ${this.slider_fo_result_value_char}`,
            lineStyle: Desmos.Styles.DASHED,
            color: this.funcaoObjetivo.color
        });

        this.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_RESULT, this.funcaoObjetivo.value, this.funcaoObjetivo.minValue * (-1.5), this.funcaoObjetivo.maxValue * (1.5));
        this.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_X, a);
        this.drawOrUpdateFOSliderValue(Constants.FO_ID.SLIDER_Y, b);
    }

    drawOrUpdateFOSliderValue(sliderId, value, minValue = 0, maxValue = 500) {
        let sliderStr = '';

        switch (sliderId) {
            case Constants.FO_ID.SLIDER_X:
                sliderStr = `${this.slider_fo_x_value_char}`;
                break;
            case Constants.FO_ID.SLIDER_Y:
                sliderStr = `${this.slider_fo_y_value_char}`;
                break;
            case Constants.FO_ID.SLIDER_RESULT:
                sliderStr = `${this.slider_fo_result_value_char}`;
                break;
            default:
                break;
        }

        if (sliderStr) {
            const valueToUse = Number(value).toFixed(Graph.PRECISION);
            this.graphCalculator.setExpression({ id: sliderId, latex: `${sliderStr}=${valueToUse}`, sliderBounds: { min: minValue, max: maxValue } });
        }
    }

    clearData() {
        this.graphCalculator.setBlank();
    }

    // GS-8
    updateBounds(minX = -10, minY = -10, maxX = 100, maxY = 100) {
        this.graphCalculator.setMathBounds({
            left: minX,
            right: maxX,
            bottom: minY,
            top: maxY
        });
    }
}
