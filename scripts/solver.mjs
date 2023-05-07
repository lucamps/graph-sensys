import Common from "./common.mjs";
import ParserListener from "./parser/impl/parserListener.mjs";
import LinearExpression from "./linearExpression.mjs";
import { matrix, det, inv, multiply } from "mathjs";

export default class Solver {
    #matriz = [];
    #values = [];
    #matrizT = [];
    #regiaoViavel = [];

    /**
     * @param {ParserListener} parserListener 
     * @param {Boolean} debug 
     */
    constructor(parserListener, debug = false) {
        this.debug = debug;
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

        this.#calculateRegiaoViavel();

        if (debug) {
            console.log("---------");
            console.log(this.#regiaoViavel);
        }

    }

    #calculateRegiaoViavel() {
        let linhas = this.#matrizT.length;
        let colunas = this.#matrizT[0].length;
        let comb = Common.getComb(linhas, colunas);

        if (this.debug) {
            console.log("---------");
            console.log("Comb:");
            console.log(comb);
        }

        const mLen = this.stList.length + 2;

        // percorrendo linhas da matrix de combinacoes
        for (let linComb = 0; linComb < comb.length; linComb++) {
            let matrixTemp = Common.getMatriz(mLen, mLen, 0);
            let linha = 0;
            let temX = false;
            let temY = false;

            for (let colComb = 0; colComb < comb[0].length; colComb++) {
                let elem = comb[linComb][colComb];

                if (elem == 0) {
                    temX = true;
                }
                else if (elem == 1) {
                    temY = true;
                }

                for (let i = 0; i < mLen; i++) {
                    matrixTemp[linha][i] = this.#matrizT[elem][i];
                }

                linha++;
            }

            matrixTemp = Common.getMatrizTransposta(matrixTemp);

            let mathJsMatrix = matrix(matrixTemp);

            if (det(mathJsMatrix) == 0) {
                continue;
            }

            mathJsMatrix = inv(mathJsMatrix);
            mathJsMatrix = multiply(mathJsMatrix, matrix(this.#values));

            let valido = true;

            matrixTemp = mathJsMatrix.valueOf();

            for (let i = 0; i < matrixTemp.length; i++) {
                let value = matrixTemp[i][0];
                if (value < 0) {
                    valido = false;
                    break;
                }
            }

            if (!valido) {
                continue;
            }


            if (temX) {
                if (temY) {
                    // pos 0 e 1 da resp serao utilizadas com os valores de x e y no ponto
                    this.#regiaoViavel.push([matrixTemp[0][0], matrixTemp[1][0]]);
                }
                else {
                    // pos 0 da resp sera utilizada com o valor x no ponto
                    this.#regiaoViavel.push([matrixTemp[0][0], 0]);
                }
            }
            else if (temY) {
                // pos 0 da resp sera utilizada com o valor y no ponto
                this.#regiaoViavel.push([0, matrixTemp[0][0]]);
            }
            else {
                this.#regiaoViavel.push([0, 0]);
            }
        }
    }


    /**
     * Obtem os valores iniciais da matriz e do vetor que representam as restricoes.
     */
    #getInitialData() {
        const mLen = this.stList.length + 2; // +2 por causa das restricoes de nao negatividade

        // Criando matriz quadrada
        this.#matriz = Common.getMatriz(mLen, mLen + 2, 0);

        // Vetor representando o lado direito das restricoes
        this.#values = Common.getMatriz(mLen, 1, 0);

        // Preenchendo dados
        let folgaCol = 2;
        for (let i in this.stList) {
            this.#matriz[i][0] = this.stList[i].a;
            this.#matriz[i][1] = this.stList[i].b;
            this.#matriz[i][folgaCol] = this.stList[i].getFolga();

            this.#values[i][0] = this.stList[i].value;
            folgaCol++;
        }

        // primeira linha ainda nao preenchida da matriz
        let linha = mLen - 2;

        // restricao x > 0
        this.#matriz[linha][0] = 1;
        this.#matriz[linha][1] = 0;
        this.#values[linha][0] = 0;
        this.#matriz[linha][folgaCol] = -1;

        linha++;
        folgaCol++;

        // restricao y > 0
        this.#matriz[linha][0] = 0;
        this.#matriz[linha][1] = 1;
        this.#values[linha][0] = 0;
        this.#matriz[linha][folgaCol] = -1;
    }
}