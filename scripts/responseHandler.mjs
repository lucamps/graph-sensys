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
        this.maxX = respJson.maxX;
        this.maxY = respJson.maxY;

        console.log(this.funcObj);

        this.stList = [];
        for (let i = 0; i < respJson.stList.length; i++) {
            this.stList.push(new Constraint(respJson.stList[i]));
        }

        this.regViavel = respJson.regViavel;

    }

    getInputText() {
        let x = this.funcObj.nameVarA;
        let y = this.funcObj.nameVarB;
        let txt = `${this.funcObj.type} ${this.funcObj.toString(false, x, y, false)}\nst\n`;
        this.stList.forEach((e) => {
            txt += `${e.label}) ${e.toString(true, x, y, true)}\n`;
        });
        return txt;
    }
}