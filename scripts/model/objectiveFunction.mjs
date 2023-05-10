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
    }

}
