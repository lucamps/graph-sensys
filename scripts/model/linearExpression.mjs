import ObjectiveFunction from "./objectiveFunction.mjs";

export default class LinearExpression {
    constructor({ a = 0, b = 0, value = 0, nameA = "x", nameB = "y", color = "" }) {
        this.a = a;
        this.b = b;
        this.value = value;
        this.nameVarA = nameA;
        this.nameVarB = nameB;
        this.color = color;
    }

    toString(showValue = true) {
        let sinal = this.b >= 0 ? '+' : '';
        let rightSide = (this instanceof ObjectiveFunction || !showValue) ? "" : `=${this.value}`;
        return `${this.a}x${sinal}${this.b}y${rightSide}`;
    }

    getRaizX() {
        if (this.a != 0) {
            return this.value / this.a;
        }
        return 0;
    }
    getRaizY() {
        if (this.b != 0) {
            return this.value / this.b;
        }
        return 0;
    }

}
