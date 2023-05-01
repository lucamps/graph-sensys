import antlr4 from 'antlr4';
import LinearProgLexer from './../antlr_files/LinearProgLexer.js';
import LinearProgParser from './../antlr_files/LinearProgParser.js';
import ParserListener from './ParserListener.mjs';

export default class ParserImpl {
    constructor(input) {
        this.#buildTree(input);
        this.listener = new ParserListener();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
    }

    #buildTree(input) {
        const chars = new antlr4.InputStream(input);
        const lexer = new LinearProgLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new LinearProgParser(tokens);
        parser.buildParseTrees = true;

        this.tree = parser.file_();
    }
}

