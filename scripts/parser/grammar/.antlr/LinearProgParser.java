// Generated from d:\Documentos\Github\graph-sensys\scripts\parser\grammar\LinearProg.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LinearProgParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INIT=1, ST=2, END=3, VARIABLE=4, SCIENTIFIC_NUMBER=5, LPAREN=6, RPAREN=7, 
		PLUS=8, MINUS=9, TIMES=10, DIV=11, GTEQ=12, LTEQ=13, GT=14, LT=15, EQ=16, 
		POINT=17, POW=18, SMCOL=19, ID=20, ENDL=21, WS=22;
	public static final int
		RULE_file_ = 0, RULE_init = 1, RULE_funcObj = 2, RULE_res = 3, RULE_id = 4, 
		RULE_equation = 5, RULE_st = 6, RULE_sep = 7, RULE_expression = 8, RULE_atom = 9, 
		RULE_addOrSub = 10, RULE_scientific = 11, RULE_variable = 12, RULE_relop = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"file_", "init", "funcObj", "res", "id", "equation", "st", "sep", "expression", 
			"atom", "addOrSub", "scientific", "variable", "relop"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, "'('", "')'", "'+'", "'-'", "'*'", 
			"'/'", null, null, "'>'", "'<'", "'='", "'.'", "'^'", "';'", null, "'\n'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INIT", "ST", "END", "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", 
			"RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GTEQ", "LTEQ", "GT", "LT", 
			"EQ", "POINT", "POW", "SMCOL", "ID", "ENDL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LinearProg.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LinearProgParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class File_Context extends ParserRuleContext {
		public FuncObjContext funcObj() {
			return getRuleContext(FuncObjContext.class,0);
		}
		public StContext st() {
			return getRuleContext(StContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LinearProgParser.EOF, 0); }
		public List<SepContext> sep() {
			return getRuleContexts(SepContext.class);
		}
		public SepContext sep(int i) {
			return getRuleContext(SepContext.class,i);
		}
		public List<ResContext> res() {
			return getRuleContexts(ResContext.class);
		}
		public ResContext res(int i) {
			return getRuleContext(ResContext.class,i);
		}
		public TerminalNode END() { return getToken(LinearProgParser.END, 0); }
		public File_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file_; }
	}

	public final File_Context file_() throws RecognitionException {
		File_Context _localctx = new File_Context(_ctx, getState());
		enterRule(_localctx, 0, RULE_file_);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			funcObj();
			setState(30); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(29);
				sep();
				}
				}
				setState(32); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SMCOL || _la==ENDL );
			setState(34);
			st();
			setState(42); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(36); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(35);
						sep();
						}
						}
						setState(38); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==SMCOL || _la==ENDL );
					setState(40);
					res();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(44); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SMCOL || _la==ENDL) {
				{
				{
				setState(46);
				sep();
				}
				}
				setState(51);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==END) {
				{
				setState(52);
				match(END);
				}
			}

			setState(55);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitContext extends ParserRuleContext {
		public TerminalNode INIT() { return getToken(LinearProgParser.INIT, 0); }
		public InitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init; }
	}

	public final InitContext init() throws RecognitionException {
		InitContext _localctx = new InitContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_init);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(INIT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncObjContext extends ParserRuleContext {
		public InitContext init() {
			return getRuleContext(InitContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<SepContext> sep() {
			return getRuleContexts(SepContext.class);
		}
		public SepContext sep(int i) {
			return getRuleContext(SepContext.class,i);
		}
		public FuncObjContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcObj; }
	}

	public final FuncObjContext funcObj() throws RecognitionException {
		FuncObjContext _localctx = new FuncObjContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_funcObj);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			init();
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SMCOL || _la==ENDL) {
				{
				{
				setState(60);
				sep();
				}
				}
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(66);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResContext extends ParserRuleContext {
		public EquationContext equation() {
			return getRuleContext(EquationContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ResContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_res; }
	}

	public final ResContext res() throws RecognitionException {
		ResContext _localctx = new ResContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_res);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(68);
				id();
				}
			}

			setState(71);
			equation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LinearProgParser.ID, 0); }
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EquationContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public RelopContext relop() {
			return getRuleContext(RelopContext.class,0);
		}
		public EquationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equation; }
	}

	public final EquationContext equation() throws RecognitionException {
		EquationContext _localctx = new EquationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_equation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			expression(0);
			setState(76);
			relop();
			setState(77);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StContext extends ParserRuleContext {
		public TerminalNode ST() { return getToken(LinearProgParser.ST, 0); }
		public StContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_st; }
	}

	public final StContext st() throws RecognitionException {
		StContext _localctx = new StContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_st);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(ST);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SepContext extends ParserRuleContext {
		public TerminalNode SMCOL() { return getToken(LinearProgParser.SMCOL, 0); }
		public TerminalNode ENDL() { return getToken(LinearProgParser.ENDL, 0); }
		public SepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sep; }
	}

	public final SepContext sep() throws RecognitionException {
		SepContext _localctx = new SepContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_sep);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			_la = _input.LA(1);
			if ( !(_la==SMCOL || _la==ENDL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(LinearProgParser.LPAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(LinearProgParser.RPAREN, 0); }
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode POW() { return getToken(LinearProgParser.POW, 0); }
		public TerminalNode TIMES() { return getToken(LinearProgParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(LinearProgParser.DIV, 0); }
		public AddOrSubContext addOrSub() {
			return getRuleContext(AddOrSubContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				{
				setState(84);
				match(LPAREN);
				setState(85);
				expression(0);
				setState(86);
				match(RPAREN);
				}
				break;
			case VARIABLE:
			case SCIENTIFIC_NUMBER:
			case PLUS:
			case MINUS:
				{
				setState(88);
				atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(103);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(101);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(91);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(92);
						match(POW);
						setState(93);
						expression(6);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(94);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(95);
						_la = _input.LA(1);
						if ( !(_la==TIMES || _la==DIV) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(96);
						expression(5);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(97);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(98);
						addOrSub();
						setState(99);
						expression(4);
						}
						break;
					}
					} 
				}
				setState(105);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AtomContext extends ParserRuleContext {
		public ScientificContext scientific() {
			return getRuleContext(ScientificContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public AddOrSubContext addOrSub() {
			return getRuleContext(AddOrSubContext.class,0);
		}
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_atom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLUS || _la==MINUS) {
				{
				setState(106);
				addOrSub();
				}
			}

			setState(114);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(109);
				scientific();
				}
				break;
			case 2:
				{
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SCIENTIFIC_NUMBER) {
					{
					setState(110);
					scientific();
					}
				}

				setState(113);
				variable();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddOrSubContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(LinearProgParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(LinearProgParser.MINUS, 0); }
		public AddOrSubContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addOrSub; }
	}

	public final AddOrSubContext addOrSub() throws RecognitionException {
		AddOrSubContext _localctx = new AddOrSubContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_addOrSub);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==MINUS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScientificContext extends ParserRuleContext {
		public TerminalNode SCIENTIFIC_NUMBER() { return getToken(LinearProgParser.SCIENTIFIC_NUMBER, 0); }
		public ScientificContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scientific; }
	}

	public final ScientificContext scientific() throws RecognitionException {
		ScientificContext _localctx = new ScientificContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_scientific);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(SCIENTIFIC_NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(LinearProgParser.VARIABLE, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(VARIABLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelopContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(LinearProgParser.EQ, 0); }
		public TerminalNode GT() { return getToken(LinearProgParser.GT, 0); }
		public TerminalNode LT() { return getToken(LinearProgParser.LT, 0); }
		public TerminalNode LTEQ() { return getToken(LinearProgParser.LTEQ, 0); }
		public TerminalNode GTEQ() { return getToken(LinearProgParser.GTEQ, 0); }
		public RelopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relop; }
	}

	public final RelopContext relop() throws RecognitionException {
		RelopContext _localctx = new RelopContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_relop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GTEQ) | (1L << LTEQ) | (1L << GT) | (1L << LT) | (1L << EQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\30\177\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\6\2!\n\2\r\2\16\2\"\3"+
		"\2\3\2\6\2\'\n\2\r\2\16\2(\3\2\3\2\6\2-\n\2\r\2\16\2.\3\2\7\2\62\n\2\f"+
		"\2\16\2\65\13\2\3\2\5\28\n\2\3\2\3\2\3\3\3\3\3\4\3\4\7\4@\n\4\f\4\16\4"+
		"C\13\4\3\4\3\4\3\5\5\5H\n\5\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3"+
		"\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\5\n\\\n\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\7\nh\n\n\f\n\16\nk\13\n\3\13\5\13n\n\13\3\13\3\13\5\13r\n\13"+
		"\3\13\5\13u\n\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\2\3\22\20\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\2\6\4\2\25\25\27\27\3\2\f\r\3\2\n\13"+
		"\3\2\16\22\2~\2\36\3\2\2\2\4;\3\2\2\2\6=\3\2\2\2\bG\3\2\2\2\nK\3\2\2\2"+
		"\fM\3\2\2\2\16Q\3\2\2\2\20S\3\2\2\2\22[\3\2\2\2\24m\3\2\2\2\26v\3\2\2"+
		"\2\30x\3\2\2\2\32z\3\2\2\2\34|\3\2\2\2\36 \5\6\4\2\37!\5\20\t\2 \37\3"+
		"\2\2\2!\"\3\2\2\2\" \3\2\2\2\"#\3\2\2\2#$\3\2\2\2$,\5\16\b\2%\'\5\20\t"+
		"\2&%\3\2\2\2\'(\3\2\2\2(&\3\2\2\2()\3\2\2\2)*\3\2\2\2*+\5\b\5\2+-\3\2"+
		"\2\2,&\3\2\2\2-.\3\2\2\2.,\3\2\2\2./\3\2\2\2/\63\3\2\2\2\60\62\5\20\t"+
		"\2\61\60\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\67\3\2\2"+
		"\2\65\63\3\2\2\2\668\7\5\2\2\67\66\3\2\2\2\678\3\2\2\289\3\2\2\29:\7\2"+
		"\2\3:\3\3\2\2\2;<\7\3\2\2<\5\3\2\2\2=A\5\4\3\2>@\5\20\t\2?>\3\2\2\2@C"+
		"\3\2\2\2A?\3\2\2\2AB\3\2\2\2BD\3\2\2\2CA\3\2\2\2DE\5\22\n\2E\7\3\2\2\2"+
		"FH\5\n\6\2GF\3\2\2\2GH\3\2\2\2HI\3\2\2\2IJ\5\f\7\2J\t\3\2\2\2KL\7\26\2"+
		"\2L\13\3\2\2\2MN\5\22\n\2NO\5\34\17\2OP\5\22\n\2P\r\3\2\2\2QR\7\4\2\2"+
		"R\17\3\2\2\2ST\t\2\2\2T\21\3\2\2\2UV\b\n\1\2VW\7\b\2\2WX\5\22\n\2XY\7"+
		"\t\2\2Y\\\3\2\2\2Z\\\5\24\13\2[U\3\2\2\2[Z\3\2\2\2\\i\3\2\2\2]^\f\7\2"+
		"\2^_\7\24\2\2_h\5\22\n\b`a\f\6\2\2ab\t\3\2\2bh\5\22\n\7cd\f\5\2\2de\5"+
		"\26\f\2ef\5\22\n\6fh\3\2\2\2g]\3\2\2\2g`\3\2\2\2gc\3\2\2\2hk\3\2\2\2i"+
		"g\3\2\2\2ij\3\2\2\2j\23\3\2\2\2ki\3\2\2\2ln\5\26\f\2ml\3\2\2\2mn\3\2\2"+
		"\2nt\3\2\2\2ou\5\30\r\2pr\5\30\r\2qp\3\2\2\2qr\3\2\2\2rs\3\2\2\2su\5\32"+
		"\16\2to\3\2\2\2tq\3\2\2\2u\25\3\2\2\2vw\t\4\2\2w\27\3\2\2\2xy\7\7\2\2"+
		"y\31\3\2\2\2z{\7\6\2\2{\33\3\2\2\2|}\t\5\2\2}\35\3\2\2\2\17\"(.\63\67"+
		"AG[gimqt";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}