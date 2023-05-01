


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
    constructor({ a = 0, b = 0, rel = LinearExpression.Relationship.none, value = 0, id = "", nameA = "x", nameB = "y", isObjectiveFuncion = false }) {
        this.a = a;
        this.b = b;
        this.rel = rel;
        this.value = value;
        this.id = id;
        this.nameA = nameA;
        this.nameB = nameB;
        this.isObjectiveFuncion = isObjectiveFuncion;
    }
}
