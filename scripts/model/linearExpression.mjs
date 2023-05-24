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

    toString() {
        let sinal = this.b >= 0 ? '+' : '';
        let rightSide = this instanceof ObjectiveFunction ? "" : `=${this.value}`;
        return `${this.a}x${sinal}${this.b}y${rightSide}`;
    }
}
