import LinearExpression from "./linearExpression.mjs";

export default class ObjectiveFunction extends LinearExpression {
    static get Type() {
        return {
            max: "max",
            min: "min"
        };
    };

    constructor({ a = 0, b = 0, value = 0, nameA = "x", nameB = "y", type = ObjectiveFunction.Type.max }) {
        super({ a: a, b: b, value: value, nameA: nameA, nameB: nameB });
        this.type = type;
        this.maxValue = Number.MIN_VALUE;
        this.minValue = Number.MAX_VALUE;
        this.solutionMap = {};
        this.color = "#000000";

    }

    copy(other) {
        this.a = other.a;
        this.b = other.b;
        this.value = other.value;
        this.nameVarA = other.nameVarA;
        this.nameVarB = other.nameVarB;
        this.type = other.type;
        this.solutionMap = other.solutionMap;
        this.maxValue = other.maxValue;
        this.minValue = other.minValue;
    }

    /**
     * @param {Number[][]} points 
     */
    calculateSolutions(points) {
        this.solutionMap = {};
        let temp = 0;
        for (let i = 0; i < points.length; i++) {
            temp = (this.a * points[i][0]) + (this.b * points[i][1]);
            if (temp > this.maxValue) {
                this.maxValue = temp;
            }
            if (temp < this.minValue) {
                this.minValue = temp;
            }
            this.solutionMap[points[i]] = temp;
        }
        this.updateValue();
    }

    updateValue() {
        if (this.type == ObjectiveFunction.Type.max) {
            this.value = this.maxValue;
        }
        else if (this.type == ObjectiveFunction.Type.min) {
            this.value = this.minValue;
        }
        else {
            //TODO: excecao
        }
    }

}
