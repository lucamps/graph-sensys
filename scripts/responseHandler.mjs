import LinearExpression from "./linearExpression.mjs";

// Talvez essa classe seja desnecessaria no momento mas acredito que seja util mais para frente
export class ResponseHandler {
    constructor(respJson) {
        this.funcObj = new LinearExpression(respJson.funcObj);

        this.stList = [];
        for (let i = 0; i < respJson.stList.length; i++) {
            this.stList.push(new LinearExpression(respJson.stList[i]));
        }

        this.regViavel = respJson.regViavel;

    }
}