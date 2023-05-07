export default class Common {
    /**
     * @param {Number} n 
     * @param {Number} m 
     * @param {Number} valor igual a zero por default
     * @returns {Array<Array<Number>>} matriz `n` x `m` preenchida com o `valor` fornecido
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
     * @param {Array<Array<Number>>} matriz 
     * @returns {Array<Array<Number>>} matriz transposta
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
     *  @returns {Array<Array<Number>>} matriz com as combinacoes possiveis
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