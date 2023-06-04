import LinearExpression from "./linearExpression.mjs";

export default class Constraint extends LinearExpression {
    static get Relationship() {
        return {
            greater: ">",
            lesser: "<",
            greaterOrEqual: ">=",
            lesserOrEqual: "<=",
            equal: "=",
            notEqual: "!=",
            none: ""
        };
    };

    constructor({ a = 0, b = 0, value = 0, nameA = "x", nameB = "y", color = "", id = "", rel = Constraint.Relationship.none, sliderChar = 'd' }) {
        super({ a: a, b: b, value: value, nameA: nameA, nameB: nameB, color: color });
        this.id = id;
        this.rel = rel;
        this.sliderChar = sliderChar;
    }

    getFolga() {
        switch (this.rel) {
            case Constraint.Relationship.greater:
            case Constraint.Relationship.greaterOrEqual:
                return -1;
                break;
            case Constraint.Relationship.lesser:
            case Constraint.Relationship.lesserOrEqual:
                return 1;
                break;
            default:
                //TODO: excecao
                break;
        }
    }
}