import { atan2, pi } from "mathjs";

export default class Common {
    /**
     * Ordena o array de pontos com base no angulo com o ponto centroide.
     * @param {number[][]} points 
     */
    static sortByAngle(points) {
        let center = this.findCentroid(points);
        points.sort((a, b) => {
            let a1 = (this.degrees(atan2(a[0] - center[0], a[1] - center[1])) + 360) % 360;
            let a2 = (this.degrees(atan2(b[0] - center[0], b[1] - center[1])) + 360) % 360;
            console.log(a2);
            return parseInt(a1 - a2);
        });
    }

    /**
     * Converte o valor de radianos para graus
     * @param {number} rad 
     * @returns 
     */
    static degrees(rad) {
        return rad * (180 / pi);
    }

    /**
     * @param {Number[][]} points 
     * @returns o ponto centroide do array de pontos
     */
    static findCentroid(points) {
        let x = 0;
        let y = 0;
        for (let i in points) {
            x += points[i][0];
            y += points[i][1];
        }
        x /= points.length;
        y /= points.length;

        let center = [x, y];
        console.log(`Center: ${center}`);
        return center;
    }

    /**
     * @param {Number} n 
     * @param {Number} m 
     * @param {Number} valor igual a zero por default
     * @returns {Number[][]} matriz `n` x `m` preenchida com o `valor` fornecido
     */
    static getMatriz(n, m, valor = 0) {
        let resp = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            resp[i] = Array(m).fill(valor);
        }
        return resp;
    }

    /**
     * Retorna a transposta da matriz recebida como parametro.
     * @param {Number[][]} matriz 
     * @returns {Number[][]} matriz transposta
     */
    static getMatrizTransposta(matriz) {
        let linhas = matriz.length;
        let colunas = matriz[0].length;

        // Iniciando matriz do resultado
        let resp = Common.getMatriz(colunas, linhas, 0);

        // Transpondo
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                resp[j][i] = matriz[i][j];
            }
        }

        return resp;
    }

    /**
     *  Gera combinacoes de `n` elementos, agrupados `m` a `m`, em ordem lexicografica.
     *  @returns {Number[][]} matriz com as combinacoes possiveis
     */
    static getComb(n, m) {
        let c = Array(n).fill(false);

        let resp = [];
        let v = Array(n);

        for (let i = 0; i < n; i++) {
            v[i] = i;
        }

        this.#geraSub(v, c, 0, n, m, resp);
        return resp;
    }

    /** 
     * Funcao auxiliar que gera todos os subconjuntos recursivamente.
     */
    static #geraSub(v, c, k, n, m, result) {
        if (k === n) {
            let comb = [];
            let cont = 0;
            // se terminou de gerar um subconjunto
            for (let i = 0; i < n; i++) {
                if (c[i] === true) {
                    cont++;
                    comb.push(v[i]);
                    if (cont > m) break;
                }
            }
            if (cont === m) {
                result.push(comb);
            }
            return;
        }
        c[k] = true; // subconjuntos com o elemento k
        const aux = k + 1;
        this.#geraSub(v, c, aux, n, m, result);
        c[k] = false; // subconjuntos sem o elemento k
        this.#geraSub(v, c, aux, n, m, result);
    }

}