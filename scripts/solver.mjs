import Common from "./common.mjs";
import ParserListener from "./parser/impl/parserListener.mjs";
import LinearExpression from "./linearExpression.mjs";

export default class Solver {
    #matriz = [];
    #values = [];
    #matrizT = [];

    /**
     * @param {ParserListener} parserListener 
     * @param {Boolean} debug 
     */
    constructor(parserListener, debug = false) {
        this.stList = parserListener.stList;
        this.funcObj = parserListener.funcObj;
        this.regiaoViavel = [];

        this.#getInitialData();

        this.#matrizT = Common.getMatrizTransposta(this.#matriz);

        if (debug) {
            console.log(this.#matriz);
            console.log("---------");
            console.log(this.#values);
            console.log("---------");
            console.log(this.#matrizT);
        }

    }


    /**
     * Obtem os valores iniciais da matriz e do vetor que representam as restricoes.
     */
    #getInitialData() {
        const mLen = this.stList.length + 2; // +2 por causa das restricoes de nao negatividade

        // Criando matriz quadrada
        this.#matriz = Array(mLen);
        for (let i = 0; i < mLen; i++) {
            this.#matriz[i] = Array(mLen + 2).fill(0);
        }

        // Vetor representando o lado direito das restricoes
        this.#values = Array(mLen).fill(0);

        // Preenchendo dados
        let folgaCol = 2;
        for (let i in this.stList) {
            this.#matriz[i][0] = this.stList[i].a;
            this.#matriz[i][1] = this.stList[i].b;
            this.#matriz[i][folgaCol] = this.stList[i].getFolga();

            this.#values[i] = this.stList[i].value;
            folgaCol++;
        }

        // primeira linha ainda nao preenchida da matriz
        let linha = mLen - 2;

        // restricao x > 0
        this.#matriz[linha][0] = 1;
        this.#matriz[linha][1] = 0;
        this.#values[linha] = 0;
        this.#matriz[linha][folgaCol] = -1;

        linha++;
        folgaCol++;

        // restricao y > 0
        this.#matriz[linha][0] = 0;
        this.#matriz[linha][1] = 1;
        this.#values[linha] = 0;
        this.#matriz[linha][folgaCol] = -1;
    }
}