// Generated from scripts/parser/grammar/LinearProg.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import LinearProgListener from './LinearProgListener.js';
const serializedATN = [4,1,23,125,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,4,0,31,8,0,11,0,12,0,32,1,0,1,0,4,0,37,8,0,11,0,12,0,38,
1,0,1,0,4,0,43,8,0,11,0,12,0,44,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,3,0,
54,8,0,1,0,1,0,1,1,1,1,1,2,1,2,5,2,62,8,2,10,2,12,2,65,9,2,1,2,1,2,1,3,3,
3,70,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,90,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,102,8,8,10,
8,12,8,105,9,8,1,9,3,9,108,8,9,1,9,1,9,3,9,112,8,9,1,9,3,9,115,8,9,1,10,
1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,0,1,16,14,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,0,4,2,0,19,19,22,22,1,0,10,11,1,0,8,9,1,0,12,16,124,0,28,
1,0,0,0,2,57,1,0,0,0,4,59,1,0,0,0,6,69,1,0,0,0,8,73,1,0,0,0,10,75,1,0,0,
0,12,79,1,0,0,0,14,81,1,0,0,0,16,89,1,0,0,0,18,107,1,0,0,0,20,116,1,0,0,
0,22,118,1,0,0,0,24,120,1,0,0,0,26,122,1,0,0,0,28,30,3,4,2,0,29,31,3,14,
7,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,
0,34,42,3,12,6,0,35,37,3,14,7,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,
0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,3,6,3,0,41,43,1,0,0,0,42,36,1,0,0,0,
43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,49,1,0,0,0,46,48,3,14,7,0,47,
46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,53,1,0,0,0,51,49,
1,0,0,0,52,54,5,3,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,56,5,
0,0,1,56,1,1,0,0,0,57,58,5,1,0,0,58,3,1,0,0,0,59,63,3,2,1,0,60,62,3,14,7,
0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,
65,63,1,0,0,0,66,67,3,16,8,0,67,5,1,0,0,0,68,70,3,8,4,0,69,68,1,0,0,0,69,
70,1,0,0,0,70,71,1,0,0,0,71,72,3,10,5,0,72,7,1,0,0,0,73,74,5,21,0,0,74,9,
1,0,0,0,75,76,3,16,8,0,76,77,3,26,13,0,77,78,3,16,8,0,78,11,1,0,0,0,79,80,
5,2,0,0,80,13,1,0,0,0,81,82,7,0,0,0,82,15,1,0,0,0,83,84,6,8,-1,0,84,85,5,
6,0,0,85,86,3,16,8,0,86,87,5,7,0,0,87,90,1,0,0,0,88,90,3,18,9,0,89,83,1,
0,0,0,89,88,1,0,0,0,90,103,1,0,0,0,91,92,10,5,0,0,92,93,5,18,0,0,93,102,
3,16,8,6,94,95,10,4,0,0,95,96,7,1,0,0,96,102,3,16,8,5,97,98,10,3,0,0,98,
99,3,20,10,0,99,100,3,16,8,4,100,102,1,0,0,0,101,91,1,0,0,0,101,94,1,0,0,
0,101,97,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,17,
1,0,0,0,105,103,1,0,0,0,106,108,3,20,10,0,107,106,1,0,0,0,107,108,1,0,0,
0,108,114,1,0,0,0,109,115,3,22,11,0,110,112,3,22,11,0,111,110,1,0,0,0,111,
112,1,0,0,0,112,113,1,0,0,0,113,115,3,24,12,0,114,109,1,0,0,0,114,111,1,
0,0,0,115,19,1,0,0,0,116,117,7,2,0,0,117,21,1,0,0,0,118,119,5,5,0,0,119,
23,1,0,0,0,120,121,5,4,0,0,121,25,1,0,0,0,122,123,7,3,0,0,123,27,1,0,0,0,
13,32,38,44,49,53,63,69,89,101,103,107,111,114];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LinearProgParser extends antlr4.Parser {

    static grammarFileName = "LinearProg.g4";
    static literalNames = [ null, null, null, null, null, null, "'('", "')'", 
                            "'+'", "'-'", "'*'", "'/'", null, null, "'>'", 
                            "'<'", "'='", "'.'", "'^'", "';'", "':'", null, 
                            "'\\n'" ];
    static symbolicNames = [ null, "INIT", "ST", "END", "VARIABLE", "SCIENTIFIC_NUMBER", 
                             "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", 
                             "DIV", "GTEQ", "LTEQ", "GT", "LT", "EQ", "POINT", 
                             "POW", "SMCOL", "COL", "ID", "ENDL", "WS" ];
    static ruleNames = [ "file_", "init", "funcObj", "res", "id", "equation", 
                         "st", "sep", "expression", "atom", "addOrSub", 
                         "scientific", "variable", "relop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LinearProgParser.ruleNames;
        this.literalNames = LinearProgParser.literalNames;
        this.symbolicNames = LinearProgParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LinearProgParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.funcObj();
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.sep();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===19 || _la===22);
	        this.state = 34;
	        this.st();
	        this.state = 42; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 36; 
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		do {
	        		    this.state = 35;
	        		    this.sep();
	        		    this.state = 38; 
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		} while(_la===19 || _la===22);
	        		this.state = 40;
	        		this.res();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 44; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===22) {
	            this.state = 46;
	            this.sep();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 52;
	            this.match(LinearProgParser.END);
	        }

	        this.state = 55;
	        this.match(LinearProgParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LinearProgParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(LinearProgParser.INIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcObj() {
	    let localctx = new FuncObjContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LinearProgParser.RULE_funcObj);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.init();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===22) {
	            this.state = 60;
	            this.sep();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	res() {
	    let localctx = new ResContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LinearProgParser.RULE_res);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 68;
	            this.id();
	        }

	        this.state = 71;
	        this.equation();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LinearProgParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(LinearProgParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LinearProgParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.expression(0);
	        this.state = 76;
	        this.relop();
	        this.state = 77;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st() {
	    let localctx = new StContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LinearProgParser.RULE_st);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(LinearProgParser.ST);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sep() {
	    let localctx = new SepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LinearProgParser.RULE_sep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===22)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, LinearProgParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.state = 84;
	            this.match(LinearProgParser.LPAREN);
	            this.state = 85;
	            this.expression(0);
	            this.state = 86;
	            this.match(LinearProgParser.RPAREN);
	            break;
	        case 4:
	        case 5:
	        case 8:
	        case 9:
	            this.state = 88;
	            this.atom();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 101;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LinearProgParser.RULE_expression);
	                    this.state = 91;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 92;
	                    this.match(LinearProgParser.POW);
	                    this.state = 93;
	                    this.expression(6);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LinearProgParser.RULE_expression);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 95;
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 96;
	                    this.expression(5);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LinearProgParser.RULE_expression);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 98;
	                    this.addOrSub();
	                    this.state = 99;
	                    this.expression(4);
	                    break;

	                } 
	            }
	            this.state = 105;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LinearProgParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8 || _la===9) {
	            this.state = 106;
	            this.addOrSub();
	        }

	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 109;
	            this.scientific();
	            break;

	        case 2:
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 110;
	                this.scientific();
	            }

	            this.state = 113;
	            this.variable();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addOrSub() {
	    let localctx = new AddOrSubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LinearProgParser.RULE_addOrSub);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scientific() {
	    let localctx = new ScientificContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LinearProgParser.RULE_scientific);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(LinearProgParser.SCIENTIFIC_NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LinearProgParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(LinearProgParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LinearProgParser.RULE_relop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126976) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LinearProgParser.EOF = antlr4.Token.EOF;
LinearProgParser.INIT = 1;
LinearProgParser.ST = 2;
LinearProgParser.END = 3;
LinearProgParser.VARIABLE = 4;
LinearProgParser.SCIENTIFIC_NUMBER = 5;
LinearProgParser.LPAREN = 6;
LinearProgParser.RPAREN = 7;
LinearProgParser.PLUS = 8;
LinearProgParser.MINUS = 9;
LinearProgParser.TIMES = 10;
LinearProgParser.DIV = 11;
LinearProgParser.GTEQ = 12;
LinearProgParser.LTEQ = 13;
LinearProgParser.GT = 14;
LinearProgParser.LT = 15;
LinearProgParser.EQ = 16;
LinearProgParser.POINT = 17;
LinearProgParser.POW = 18;
LinearProgParser.SMCOL = 19;
LinearProgParser.COL = 20;
LinearProgParser.ID = 21;
LinearProgParser.ENDL = 22;
LinearProgParser.WS = 23;

LinearProgParser.RULE_file_ = 0;
LinearProgParser.RULE_init = 1;
LinearProgParser.RULE_funcObj = 2;
LinearProgParser.RULE_res = 3;
LinearProgParser.RULE_id = 4;
LinearProgParser.RULE_equation = 5;
LinearProgParser.RULE_st = 6;
LinearProgParser.RULE_sep = 7;
LinearProgParser.RULE_expression = 8;
LinearProgParser.RULE_atom = 9;
LinearProgParser.RULE_addOrSub = 10;
LinearProgParser.RULE_scientific = 11;
LinearProgParser.RULE_variable = 12;
LinearProgParser.RULE_relop = 13;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_file_;
    }

	funcObj() {
	    return this.getTypedRuleContext(FuncObjContext,0);
	};

	st() {
	    return this.getTypedRuleContext(StContext,0);
	};

	EOF() {
	    return this.getToken(LinearProgParser.EOF, 0);
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	res = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ResContext);
	    } else {
	        return this.getTypedRuleContext(ResContext,i);
	    }
	};

	END() {
	    return this.getToken(LinearProgParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitFile_(this);
		}
	}


}



class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_init;
    }

	INIT() {
	    return this.getToken(LinearProgParser.INIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitInit(this);
		}
	}


}



class FuncObjContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_funcObj;
    }

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	sep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SepContext);
	    } else {
	        return this.getTypedRuleContext(SepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterFuncObj(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitFuncObj(this);
		}
	}


}



class ResContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_res;
    }

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterRes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitRes(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_id;
    }

	ID() {
	    return this.getToken(LinearProgParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitId(this);
		}
	}


}



class EquationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_equation;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	relop() {
	    return this.getTypedRuleContext(RelopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitEquation(this);
		}
	}


}



class StContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_st;
    }

	ST() {
	    return this.getToken(LinearProgParser.ST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitSt(this);
		}
	}


}



class SepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_sep;
    }

	SMCOL() {
	    return this.getToken(LinearProgParser.SMCOL, 0);
	};

	ENDL() {
	    return this.getToken(LinearProgParser.ENDL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterSep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitSep(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_expression;
    }

	LPAREN() {
	    return this.getToken(LinearProgParser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(LinearProgParser.RPAREN, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	POW() {
	    return this.getToken(LinearProgParser.POW, 0);
	};

	TIMES() {
	    return this.getToken(LinearProgParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(LinearProgParser.DIV, 0);
	};

	addOrSub() {
	    return this.getTypedRuleContext(AddOrSubContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitExpression(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_atom;
    }

	scientific() {
	    return this.getTypedRuleContext(ScientificContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	addOrSub() {
	    return this.getTypedRuleContext(AddOrSubContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitAtom(this);
		}
	}


}



class AddOrSubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_addOrSub;
    }

	PLUS() {
	    return this.getToken(LinearProgParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(LinearProgParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterAddOrSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitAddOrSub(this);
		}
	}


}



class ScientificContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_scientific;
    }

	SCIENTIFIC_NUMBER() {
	    return this.getToken(LinearProgParser.SCIENTIFIC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterScientific(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitScientific(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(LinearProgParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitVariable(this);
		}
	}


}



class RelopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LinearProgParser.RULE_relop;
    }

	EQ() {
	    return this.getToken(LinearProgParser.EQ, 0);
	};

	GT() {
	    return this.getToken(LinearProgParser.GT, 0);
	};

	LT() {
	    return this.getToken(LinearProgParser.LT, 0);
	};

	LTEQ() {
	    return this.getToken(LinearProgParser.LTEQ, 0);
	};

	GTEQ() {
	    return this.getToken(LinearProgParser.GTEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LinearProgListener ) {
	        listener.exitRelop(this);
		}
	}


}




LinearProgParser.File_Context = File_Context; 
LinearProgParser.InitContext = InitContext; 
LinearProgParser.FuncObjContext = FuncObjContext; 
LinearProgParser.ResContext = ResContext; 
LinearProgParser.IdContext = IdContext; 
LinearProgParser.EquationContext = EquationContext; 
LinearProgParser.StContext = StContext; 
LinearProgParser.SepContext = SepContext; 
LinearProgParser.ExpressionContext = ExpressionContext; 
LinearProgParser.AtomContext = AtomContext; 
LinearProgParser.AddOrSubContext = AddOrSubContext; 
LinearProgParser.ScientificContext = ScientificContext; 
LinearProgParser.VariableContext = VariableContext; 
LinearProgParser.RelopContext = RelopContext; 
