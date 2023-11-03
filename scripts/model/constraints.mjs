import LinearExpression from "./linearExpression.mjs";
import ObjectiveFunction from "./objectiveFunction.mjs";

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

    constructor({ a = 0, b = 0, value = 0, nameA = "x", nameB = "y", color = "", id = "", rel = Constraint.Relationship.none, sliderChar = 'd', label = "" }) {
        super({ a: a, b: b, value: value, nameA: nameA, nameB: nameB, color: color });
        this.id = id;
        this.rel = rel;
        this.sliderChar = sliderChar;
        this.minToShow = null;
        this.maxToShow = null;
        this.label = label;
    }

    /**
     * 
     * @param {ObjectiveFunction} fo 
     */
    calculateMinAndMaxToShow(fo) {
        let valorValido = fo.maxValue > Number.MIN_VALUE && fo.minValue < Number.MAX_VALUE;

        let maxValue = 0;
        if (valorValido) {
            maxValue = (fo.maxValue / fo.a) * this.a + (fo.maxValue / fo.b) * this.b;
            this.minToShow = 0 - 0.2 * maxValue;
            this.maxToShow = maxValue * 1.1;
        }
        else {
            maxValue = this.value * 10;
            this.minToShow = 0 - maxValue;
            this.maxToShow = maxValue;
        }

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