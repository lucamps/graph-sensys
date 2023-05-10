import ObjectiveFunction from "./objectiveFunction.mjs";

export default class LinearExpression {
    constructor({ a = 0, b = 0, value = 0, nameA = "x", nameB = "y" }) {
        this.a = a;
        this.b = b;
        this.value = value;
        this.nameVarA = nameA;
        this.nameVarB = nameB;
    }

    toString() {
        let sinal = this.b >= 0 ? '+' : '';
        let rightSide = this instanceof ObjectiveFunction ? "" : `=${this.value}`;
        return `${this.a}${this.nameVarA}${sinal}${this.b}${this.nameVarB}${rightSide}`;
    }
}
