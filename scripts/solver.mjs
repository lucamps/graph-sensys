import Common from "./common.mjs";
import Constraint from "./model/constraints.mjs";
import ParserListener from "./parser/impl/parserListener.mjs";
import { matrix, det, inv, multiply, max } from "mathjs";

export default class Solver {
    static MAX_X = 0;
    static MAX_Y = 0;
    static MAX_H = 0;
    static MAX_W = 0;

    #matriz = [];
    #values = [];
    #matrizT = [];
    regiaoViavel = [];

    /**
     * @param {ParserListener} parserListener 
     * @param {Boolean} debug 
     */
    constructor(parserListener, debug = false) {
        Solver.MAX_X = 0;
        Solver.MAX_Y = 0;

        this.debug = debug;
        this.stList = parserListener.stList;
        this.funcObj = parserListener.funcObj;
        this.regiaoViavel = [];
        this.colorList = Object.values(Common.Colors);
        this.idList = [];
        this.sliderIdList = ['a', 'b', 'c', 'x', 'y'];

        this.#getInitialDataAndSetColors();

        this.#matrizT = Common.getMatrizTransposta(this.#matriz);


        if (debug) {
            console.log(this.#matriz);
            console.log("---------");
            console.log(this.#values);
            console.log("---------");
            console.log(this.#matrizT);
        }

        this.#calculateRegiaoViavel();
        if (this.regiaoViavel.length > 0) {
            Common.sortByAngle(this.regiaoViavel);
            this.funcObj.calculateSolutions(this.regiaoViavel);
        }

        if (debug) {
            console.log("---------");
            console.log(this.regiaoViavel);
        }
    }


    /**
     * Preenche o array de pontos `this.#regiaoViavel`.
     */
    #calculateRegiaoViavel() {
        const linhas = this.#matrizT.length;
        const colunas = this.#matrizT[0].length;
        const comb = Common.getComb(linhas, colunas);
        const mLen = this.stList.length + 2;

        if (this.debug) {
            console.log("---------");
            console.log("Comb:");
            console.log(comb);
        }

        // percorrendo linhas da matriz de combinacoes
        for (let linComb = 0; linComb < comb.length; linComb++) {
            let matrixTemp = Common.getMatriz(mLen, mLen, 0);
            let linha = 0;
            let temX = false;
            let temY = false;

            // percorrendo colunas da matriz de combinacoes
            for (let colComb = 0; colComb < comb[0].length; colComb++) {
                let elem = comb[linComb][colComb];
                if (elem == 0) {
                    temX = true;
                }
                else if (elem == 1) {
                    temY = true;
                }
                matrixTemp[linha] = this.#matrizT[elem];
                linha++;
            }

            // passando a transposta da matriz para um objeto da classe Matrix (mathjs)
            matrixTemp = Common.getMatrizTransposta(matrixTemp);
            let mathJsMatrix = matrix(matrixTemp);

            // invertendo e multiplicando a matriz com o array de valores
            if (det(mathJsMatrix) == 0) {
                continue;
            }
            mathJsMatrix = inv(mathJsMatrix);
            mathJsMatrix = multiply(mathJsMatrix, matrix(this.#values));
            matrixTemp = mathJsMatrix.valueOf();

            // verificando validade do resultado
            let valido = true;
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

            // adicionando pontos no array da regiao viavel
            if (temX) {
                if (temY) {
                    // pos 0 e 1 da resp serao utilizadas com os valores de x e y no ponto
                    this.regiaoViavel.push([matrixTemp[0][0], matrixTemp[1][0]]);
                }
                else {
                    // pos 0 da resp sera utilizada com o valor x no ponto
                    this.regiaoViavel.push([matrixTemp[0][0], 0]);
                }
            }
            else if (temY) {
                // pos 0 da resp sera utilizada com o valor y no ponto
                this.regiaoViavel.push([0, matrixTemp[0][0]]);
            }
            else {
                this.regiaoViavel.push([0, 0]);
            }

        } // fim do for

    } // fim do metodo #calculateRegiaoViavel

    #generateNewId(num = 1) {
        const i = num;
        let newId = `R${i}`;

        while (this.idList.includes(newId)) {
            i++;
            newId = `R${i}`;
        }

        this.idList.push(newId);
        return newId;
    }

    #generateNewSliderId() {
        let id_code = 'A'.charCodeAt(0) - 1;
        let letra = String.fromCharCode(id_code);
        do {
            id_code++;
            letra = String.fromCharCode(id_code)
            if (letra == 'x' || letra == 'y') {
                continue;
            }
            if (id_code > 'Z'.charCodeAt(0) && id_code < 'd'.charCodeAt(0)) {
                letra = 'd';
                id_code = letra.charCodeAt(0);
            }
            if (letra > 'z') {
                throw Error('número máximo de restrições atingido.');
            }
        } while (this.sliderIdList.includes(letra));

        this.sliderIdList.push(letra);
        return letra;
    }

    /**
     * @param {Constraint} rest 
     */
    #setRestValidId(rest, i = 0) {
        let elemId = rest.id;

        if (!elemId || this.idList.includes(elemId)) {
            elemId = this.#generateNewId(i);
            rest.id = elemId;
        }

        rest.sliderChar = this.#generateNewSliderId();
    }

    /**
     * Obtem os valores iniciais da matriz e do vetor que representam as restricoes.
     */
    #getInitialDataAndSetColors() {
        const mLen = this.stList.length + 4; // +4 por causa das 2 restricoes de nao negatividade e 2 restricoes fakes de 'nao infinitude'

        // Criando matriz
        this.#matriz = Common.getMatriz(mLen, mLen + 2, 0);

        // Vetor representando o lado direito das restricoes
        this.#values = Common.getMatriz(mLen, 1, 0);

        // Preenchendo dados
        let folgaCol = 2;
        for (let i = 0; i < this.stList.length; i++) {
            this.#setRestValidId(this.stList[i], i + 1);

            // Selecionando a cor
            if (this.colorList.length == 0) {
                this.colorList = Object.values(Common.Colors);
            }
            this.stList[i].color = this.colorList.pop();

            this.#matriz[i][0] = this.stList[i].a;
            this.#matriz[i][1] = this.stList[i].b;
            this.#matriz[i][folgaCol] = this.stList[i].getFolga();

            this.#values[i][0] = this.stList[i].value;
            folgaCol++;

            let raizX = this.stList[i].getRaizX();
            let raizY = this.stList[i].getRaizY();

            Solver.MAX_X = max(Solver.MAX_X, Number(raizX));
            Solver.MAX_Y = max(Solver.MAX_Y, Number(raizY));
        }
        console.log('________________ slider ids =');
        console.log(this.sliderIdList);

        Solver.MAX_W = max(Solver.MAX_W, Solver.MAX_X * 50);
        Solver.MAX_H = max(Solver.MAX_H, Solver.MAX_Y * 50);

        // primeira linha ainda nao preenchida da matriz
        let linha = mLen - 4;

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

        linha++;
        folgaCol++;

        // restricao x < +inf
        this.#matriz[linha][0] = 1;
        this.#matriz[linha][1] = 0;
        this.#values[linha][0] = Solver.MAX_W;
        this.#matriz[linha][folgaCol] = 1;

        linha++;
        folgaCol++;

        // restrição y < +inf
        this.#matriz[linha][0] = 0;
        this.#matriz[linha][1] = 1;
        this.#values[linha][0] = Solver.MAX_H;
        this.#matriz[linha][folgaCol] = 1;

    }
}