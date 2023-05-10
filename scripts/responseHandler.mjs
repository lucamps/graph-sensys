import ObjectiveFunction from "./model/objectiveFunction.mjs";
import Constraint from "./model/constraints.mjs";

// Talvez essa classe seja desnecessaria no momento mas acredito que seja util mais para frente
export class ResponseHandler {
    constructor(respJson) {
        this.funcObj = new ObjectiveFunction(respJson.funcObj);

        this.stList = [];
        for (let i = 0; i < respJson.stList.length; i++) {
            this.stList.push(new Constraint(respJson.stList[i]));
        }

        this.regViavel = respJson.regViavel;

    }
}