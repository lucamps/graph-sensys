import antlr4, { ErrorListener, ParseTreeWalker } from 'antlr4';
import LinearProgLexer from '../antlr_files/LinearProgLexer.js';
import LinearProgParser from '../antlr_files/LinearProgParser.js';
import ParserListener from './parserListener.mjs';
import CustomErrorListener from '../../exception/customErrorListener.mjs';

export default class ParserImpl {
    constructor(input, debug = false) {
        this.#buildTree(input);
        this.listener = new ParserListener(debug);

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
    }

    #buildTree(input) {
        const chars = new antlr4.InputStream(input);
        const lexer = new LinearProgLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new LinearProgParser(tokens);
        parser.buildParseTrees = true;

        let errorListener = new CustomErrorListener();
        parser.addErrorListener(errorListener);

        try {
            this.tree = parser.file_();
        }
        catch (e) {
            throw e;
        }
    }
}

