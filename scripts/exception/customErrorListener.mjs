import { DiagnosticErrorListener } from "antlr4";

export default class CustomErrorListener extends DiagnosticErrorListener {
    // override
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        super.syntaxError(recognizer, offendingSymbol, line, column, msg, e);
        throw new Error(`linha ${line}, coluna ${column}: ${msg}`);
    }
}