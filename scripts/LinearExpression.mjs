export default class LinearExpression {
    static Relationship = {
        greater: ">",
        lesser: "<",
        greaterOrEqual: ">=",
        lesserOrEqual: "<=",
        equal: "=",
        notEqual: "!=",
        none: ""
    }
    constructor({ a = 0, b = 0, rel = LinearExpression.Relationship.none, value = 0, id = "", nameA = "x", nameB = "y", isFO = false }) {
        this.a = a;
        this.b = b;
        this.rel = rel;
        this.value = value;
        this.id = id;
        this.nameVarA = nameA;
        this.nameVarB = nameB;
        this.isFO = isFO;
    }

    getFolga() {
        switch (this.rel) {
            case LinearExpression.Relationship.greater:
            case LinearExpression.Relationship.greaterOrEqual:
                return -1;
                break;
            case LinearExpression.Relationship.lesser:
            case LinearExpression.Relationship.lesserOrEqual:
                return 1;
                break;
            default:
                //TODO: excecao
                break;
        }
    }

    toString() {
        let sinal = this.b > 0 ? '+' : '';
        let rightSide = this.isFO ? "" : `=${this.value}`;
        return `${this.a}${this.nameVarA}${sinal}${this.b}${this.nameVarB}${rightSide}`;
    }
}
