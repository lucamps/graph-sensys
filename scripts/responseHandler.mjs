import ObjectiveFunction from "./model/objectiveFunction.mjs";
import Constraint from "./model/constraints.mjs";

// Talvez essa classe seja desnecessaria no momento mas acredito que seja util mais para frente
export class ResponseHandler {
    /**
     * @param {ObjectiveFunction} respJson 
     */
    constructor(respJson) {
        this.funcObj = new ObjectiveFunction({});
        this.funcObj.copy(respJson.funcObj);
        console.log(this.funcObj);

        this.stList = [];
        for (let i = 0; i < respJson.stList.length; i++) {
            this.stList.push(new Constraint(respJson.stList[i]));
        }

        this.regViavel = respJson.regViavel;

    }
}