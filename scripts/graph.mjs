export class Graph {
    static get PRECISION() { return 10; };
    get slider_fo_x_value_char() { return 'a'; }
    get slider_fo_y_value_char() { return 'b'; }
    get slider_fo_result_value_char() { return 'c'; }


    constructor(id = 'graph') {
        this.options = { zoomButtons: false, expressions: true };
        this.restricoes = []; //formato: { id: "identificador", latex: "ax + y = b"}
        this.funcaoObjetivo = {};
        this.regiaoViavel = {};

        if (id) {
            this.graphCalculator = this.getGraphCalculatorById(id);
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
        let a = Number(this.funcaoObjetivo.a).toFixed(Graph.PRECISION);
        let b = Number(this.funcaoObjetivo.b).toFixed(Graph.PRECISION);

        this.graphCalculator.setExpression({
            id: 'fo',
            latex: `${this.slider_fo_x_value_char}x + (${this.slider_fo_y_value_char}y) = ${this.slider_fo_result_value_char}`,
            lineStyle: Desmos.Styles.DASHED,
            color: Desmos.Colors.BLACK
        });

        this.drawOrUpdateFOSliderValue('fo-slider-result', this.funcaoObjetivo.value);
        this.drawOrUpdateFOSliderValue('fo-slider-x', a);
        this.drawOrUpdateFOSliderValue('fo-slider-y', b);
    }

    drawOrUpdateFOSliderValue(sliderId, value) {
        let sliderStr = '';
        let maxValue = 577; // ~tang(179.9°) 
        let minValue = 0;
        switch (sliderId) {
            case 'fo-slider-x':
                sliderStr = `${this.slider_fo_x_value_char}`;
                maxValue *= Number(this.funcaoObjetivo.b);
                minValue = -maxValue;
                break;
            case 'fo-slider-y':
                sliderStr = `${this.slider_fo_y_value_char}`;
                maxValue *= Number(this.funcaoObjetivo.a);
                minValue = -maxValue;
                break;
            case 'fo-slider-result':
                sliderStr = `${this.slider_fo_result_value_char}`;
                minValue = Number(value) - 50;
                maxValue = Number(value) + 50;
                break;
            default:
                break;
        }

        console.log(`max: ${maxValue}
        min:${minValue}`);

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
