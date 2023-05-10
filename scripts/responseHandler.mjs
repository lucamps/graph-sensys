import LinearExpression from "./linearExpression.mjs";

export class ResponseHandler {
    constructor(respJson) {
        this.funcObj = new LinearExpression(respJson.funcObj);
        console.log("RH:");
        console.log(respJson);
        //console.log(this.funcObj);

        this.stList = [];
        //console.log("RH restr:");
        for (let i = 0; i < respJson.stList.length; i++) {
            this.stList.push(new LinearExpression(respJson.stList[i]));
            // console.log(this.stList[i].toString());
        }

        // console.log("RH regViavel:")
        this.regViavel = respJson.regViavel;
        // console.log(this.regViavel);

    }
}