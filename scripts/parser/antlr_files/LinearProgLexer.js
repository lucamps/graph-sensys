// Generated from scripts/parser/grammar/LinearProg.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,23,235,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,
3,0,86,8,0,1,1,1,1,1,1,3,1,91,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,101,
8,2,1,3,1,3,5,3,105,8,3,10,3,12,3,108,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,3,4,119,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,130,8,5,1,6,1,
6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,
14,1,15,1,15,1,16,1,16,1,17,3,17,155,8,17,1,18,1,18,3,18,159,8,18,1,19,1,
19,1,19,3,19,164,8,19,1,19,1,19,3,19,168,8,19,1,20,4,20,171,8,20,11,20,12,
20,172,1,20,1,20,4,20,177,8,20,11,20,12,20,178,3,20,181,8,20,1,21,4,21,184,
8,21,11,21,12,21,185,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,
27,1,27,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,32,1,32,1,33,
1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,3,38,225,8,38,
1,39,1,39,1,40,4,40,230,8,40,11,40,12,40,231,1,40,1,40,0,0,41,1,1,3,2,5,
3,7,4,9,0,11,0,13,0,15,0,17,0,19,0,21,0,23,0,25,0,27,0,29,0,31,0,33,0,35,
0,37,0,39,5,41,0,43,0,45,0,47,6,49,7,51,8,53,9,55,10,57,11,59,12,61,13,63,
14,65,15,67,16,69,17,71,18,73,19,75,20,77,21,79,22,81,23,1,0,14,2,0,65,65,
97,97,2,0,68,68,100,100,2,0,69,69,101,101,2,0,70,70,102,102,2,0,73,73,105,
105,2,0,77,77,109,109,2,0,78,78,110,110,2,0,83,83,115,115,2,0,84,84,116,
116,2,0,88,88,120,120,2,0,90,90,122,122,3,0,65,90,95,95,97,122,2,0,43,43,
45,45,3,0,9,9,13,13,32,32,231,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,39,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,
55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,
0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,
1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,1,85,1,0,0,0,3,87,1,0,0,0,5,100,1,0,0,
0,7,102,1,0,0,0,9,109,1,0,0,0,11,120,1,0,0,0,13,131,1,0,0,0,15,133,1,0,0,
0,17,135,1,0,0,0,19,137,1,0,0,0,21,139,1,0,0,0,23,141,1,0,0,0,25,143,1,0,
0,0,27,145,1,0,0,0,29,147,1,0,0,0,31,149,1,0,0,0,33,151,1,0,0,0,35,154,1,
0,0,0,37,158,1,0,0,0,39,160,1,0,0,0,41,170,1,0,0,0,43,183,1,0,0,0,45,187,
1,0,0,0,47,189,1,0,0,0,49,191,1,0,0,0,51,193,1,0,0,0,53,195,1,0,0,0,55,197,
1,0,0,0,57,199,1,0,0,0,59,201,1,0,0,0,61,204,1,0,0,0,63,207,1,0,0,0,65,209,
1,0,0,0,67,211,1,0,0,0,69,213,1,0,0,0,71,215,1,0,0,0,73,217,1,0,0,0,75,219,
1,0,0,0,77,221,1,0,0,0,79,226,1,0,0,0,81,229,1,0,0,0,83,86,3,9,4,0,84,86,
3,11,5,0,85,83,1,0,0,0,85,84,1,0,0,0,86,2,1,0,0,0,87,90,3,27,13,0,88,91,
3,29,14,0,89,91,3,13,6,0,90,88,1,0,0,0,90,89,1,0,0,0,91,4,1,0,0,0,92,93,
3,17,8,0,93,94,3,25,12,0,94,95,3,15,7,0,95,101,1,0,0,0,96,97,3,19,9,0,97,
98,3,21,10,0,98,99,3,23,11,0,99,101,1,0,0,0,100,92,1,0,0,0,100,96,1,0,0,
0,101,6,1,0,0,0,102,106,3,35,17,0,103,105,3,37,18,0,104,103,1,0,0,0,105,
108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,8,1,0,0,0,108,106,1,0,0,
0,109,110,3,23,11,0,110,111,3,13,6,0,111,118,3,31,15,0,112,113,3,21,10,0,
113,114,3,23,11,0,114,115,3,21,10,0,115,116,3,33,16,0,116,117,3,17,8,0,117,
119,1,0,0,0,118,112,1,0,0,0,118,119,1,0,0,0,119,10,1,0,0,0,120,121,3,23,
11,0,121,122,3,21,10,0,122,129,3,25,12,0,123,124,3,21,10,0,124,125,3,23,
11,0,125,126,3,21,10,0,126,127,3,33,16,0,127,128,3,17,8,0,128,130,1,0,0,
0,129,123,1,0,0,0,129,130,1,0,0,0,130,12,1,0,0,0,131,132,7,0,0,0,132,14,
1,0,0,0,133,134,7,1,0,0,134,16,1,0,0,0,135,136,7,2,0,0,136,18,1,0,0,0,137,
138,7,3,0,0,138,20,1,0,0,0,139,140,7,4,0,0,140,22,1,0,0,0,141,142,7,5,0,
0,142,24,1,0,0,0,143,144,7,6,0,0,144,26,1,0,0,0,145,146,7,7,0,0,146,28,1,
0,0,0,147,148,7,8,0,0,148,30,1,0,0,0,149,150,7,9,0,0,150,32,1,0,0,0,151,
152,7,10,0,0,152,34,1,0,0,0,153,155,7,11,0,0,154,153,1,0,0,0,155,36,1,0,
0,0,156,159,3,35,17,0,157,159,2,48,57,0,158,156,1,0,0,0,158,157,1,0,0,0,
159,38,1,0,0,0,160,167,3,41,20,0,161,163,3,17,8,0,162,164,3,45,22,0,163,
162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,3,43,21,0,166,168,1,
0,0,0,167,161,1,0,0,0,167,168,1,0,0,0,168,40,1,0,0,0,169,171,2,48,57,0,170,
169,1,0,0,0,171,172,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,180,1,0,
0,0,174,176,5,46,0,0,175,177,2,48,57,0,176,175,1,0,0,0,177,178,1,0,0,0,178,
176,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,174,1,0,0,0,180,181,1,0,
0,0,181,42,1,0,0,0,182,184,2,48,57,0,183,182,1,0,0,0,184,185,1,0,0,0,185,
183,1,0,0,0,185,186,1,0,0,0,186,44,1,0,0,0,187,188,7,12,0,0,188,46,1,0,0,
0,189,190,5,40,0,0,190,48,1,0,0,0,191,192,5,41,0,0,192,50,1,0,0,0,193,194,
5,43,0,0,194,52,1,0,0,0,195,196,5,45,0,0,196,54,1,0,0,0,197,198,5,42,0,0,
198,56,1,0,0,0,199,200,5,47,0,0,200,58,1,0,0,0,201,202,3,63,31,0,202,203,
3,67,33,0,203,60,1,0,0,0,204,205,3,65,32,0,205,206,3,67,33,0,206,62,1,0,
0,0,207,208,5,62,0,0,208,64,1,0,0,0,209,210,5,60,0,0,210,66,1,0,0,0,211,
212,5,61,0,0,212,68,1,0,0,0,213,214,5,46,0,0,214,70,1,0,0,0,215,216,5,94,
0,0,216,72,1,0,0,0,217,218,5,59,0,0,218,74,1,0,0,0,219,220,5,58,0,0,220,
76,1,0,0,0,221,224,3,7,3,0,222,225,3,49,24,0,223,225,3,75,37,0,224,222,1,
0,0,0,224,223,1,0,0,0,225,78,1,0,0,0,226,227,5,10,0,0,227,80,1,0,0,0,228,
230,7,13,0,0,229,228,1,0,0,0,230,231,1,0,0,0,231,229,1,0,0,0,231,232,1,0,
0,0,232,233,1,0,0,0,233,234,6,40,0,0,234,82,1,0,0,0,17,0,85,90,100,106,118,
129,154,158,163,167,172,178,180,185,224,231,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LinearProgLexer extends antlr4.Lexer {

    static grammarFileName = "LinearProg.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, "'('", "')'", 
                         "'+'", "'-'", "'*'", "'/'", null, null, "'>'", 
                         "'<'", "'='", "'.'", "'^'", "';'", "':'", null, 
                         "'\\n'" ];
	static symbolicNames = [ null, "INIT", "ST", "END", "VARIABLE", "SCIENTIFIC_NUMBER", 
                          "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", 
                          "DIV", "GTEQ", "LTEQ", "GT", "LT", "EQ", "POINT", 
                          "POW", "SMCOL", "COL", "ID", "ENDL", "WS" ];
	static ruleNames = [ "INIT", "ST", "END", "VARIABLE", "MAX", "MIN", "A", 
                      "D", "E", "F", "I", "M", "N", "S", "T", "X", "Z", 
                      "VALID_ID_START", "VALID_ID_CHAR", "SCIENTIFIC_NUMBER", 
                      "NUMBER", "UNSIGNED_INTEGER", "SIGN", "LPAREN", "RPAREN", 
                      "PLUS", "MINUS", "TIMES", "DIV", "GTEQ", "LTEQ", "GT", 
                      "LT", "EQ", "POINT", "POW", "SMCOL", "COL", "ID", 
                      "ENDL", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LinearProgLexer.EOF = antlr4.Token.EOF;
LinearProgLexer.INIT = 1;
LinearProgLexer.ST = 2;
LinearProgLexer.END = 3;
LinearProgLexer.VARIABLE = 4;
LinearProgLexer.SCIENTIFIC_NUMBER = 5;
LinearProgLexer.LPAREN = 6;
LinearProgLexer.RPAREN = 7;
LinearProgLexer.PLUS = 8;
LinearProgLexer.MINUS = 9;
LinearProgLexer.TIMES = 10;
LinearProgLexer.DIV = 11;
LinearProgLexer.GTEQ = 12;
LinearProgLexer.LTEQ = 13;
LinearProgLexer.GT = 14;
LinearProgLexer.LT = 15;
LinearProgLexer.EQ = 16;
LinearProgLexer.POINT = 17;
LinearProgLexer.POW = 18;
LinearProgLexer.SMCOL = 19;
LinearProgLexer.COL = 20;
LinearProgLexer.ID = 21;
LinearProgLexer.ENDL = 22;
LinearProgLexer.WS = 23;



