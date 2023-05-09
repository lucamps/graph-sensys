import LinearExpression from "./linearExpression.mjs";

export class ResponseHandler {
    constructor(respJson) {
        this.funcObj = new LinearExpression(respJson.funcObj);
        console.log(this.funcObj);
    }
}