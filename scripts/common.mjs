
export default class Common {
    /**
     *  Gera combinacoes de `n` elementos, agrupados `m` a `m`, em ordem lexicografica.
     * 
     *  São geradas a partir de um array com `n` elementos: `(0, ..., n-1)`.
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