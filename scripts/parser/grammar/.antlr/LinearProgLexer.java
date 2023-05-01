// Generated from d:\Documentos\Github\graph-sensys\scripts\parser\grammar\LinearProg.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LinearProgLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INIT=1, ST=2, END=3, VARIABLE=4, SCIENTIFIC_NUMBER=5, LPAREN=6, RPAREN=7, 
		PLUS=8, MINUS=9, TIMES=10, DIV=11, GTEQ=12, LTEQ=13, GT=14, LT=15, EQ=16, 
		POINT=17, POW=18, SMCOL=19, ID=20, ENDL=21, WS=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INIT", "ST", "END", "VARIABLE", "MAX", "MIN", "VALID_ID_START", "VALID_ID_CHAR", 
			"SCIENTIFIC_NUMBER", "NUMBER", "UNSIGNED_INTEGER", "E", "SIGN", "LPAREN", 
			"RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GTEQ", "LTEQ", "GT", "LT", 
			"EQ", "POINT", "POW", "SMCOL", "ID", "ENDL", "WS"
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


	public LinearProgLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LinearProg.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\30\u00ae\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\3\2"+
		"\3\2\5\2B\n\2\3\3\3\3\5\3F\n\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4N\n\4\3\5\3"+
		"\5\7\5R\n\5\f\5\16\5U\13\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\5\b`\n"+
		"\b\3\t\3\t\5\td\n\t\3\n\3\n\3\n\5\ni\n\n\3\n\3\n\5\nm\n\n\3\13\6\13p\n"+
		"\13\r\13\16\13q\3\13\3\13\6\13v\n\13\r\13\16\13w\5\13z\n\13\3\f\6\f}\n"+
		"\f\r\f\16\f~\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22"+
		"\3\23\3\23\3\24\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\30\3\30"+
		"\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\37"+
		"\6\37\u00a9\n\37\r\37\16\37\u00aa\3\37\3\37\2\2 \3\3\5\4\7\5\t\6\13\2"+
		"\r\2\17\2\21\2\23\7\25\2\27\2\31\2\33\2\35\b\37\t!\n#\13%\f\'\r)\16+\17"+
		"-\20/\21\61\22\63\23\65\24\67\259\26;\27=\30\3\2\17\4\2UUuu\6\2CCVVcc"+
		"vv\4\2GGgg\4\2PPpp\4\2FFff\4\2HHhh\4\2KKkk\4\2OOoo\4\2CCcc\4\2ZZzz\5\2"+
		"C\\aac|\4\2--//\5\2\13\13\17\17\"\"\2\u00b0\2\3\3\2\2\2\2\5\3\2\2\2\2"+
		"\7\3\2\2\2\2\t\3\2\2\2\2\23\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\3A\3\2\2\2\5C\3\2\2\2\7M\3\2\2\2\tO\3\2\2\2"+
		"\13V\3\2\2\2\rZ\3\2\2\2\17_\3\2\2\2\21c\3\2\2\2\23e\3\2\2\2\25o\3\2\2"+
		"\2\27|\3\2\2\2\31\u0080\3\2\2\2\33\u0082\3\2\2\2\35\u0084\3\2\2\2\37\u0086"+
		"\3\2\2\2!\u0088\3\2\2\2#\u008a\3\2\2\2%\u008c\3\2\2\2\'\u008e\3\2\2\2"+
		")\u0090\3\2\2\2+\u0093\3\2\2\2-\u0096\3\2\2\2/\u0098\3\2\2\2\61\u009a"+
		"\3\2\2\2\63\u009c\3\2\2\2\65\u009e\3\2\2\2\67\u00a0\3\2\2\29\u00a2\3\2"+
		"\2\2;\u00a5\3\2\2\2=\u00a8\3\2\2\2?B\5\13\6\2@B\5\r\7\2A?\3\2\2\2A@\3"+
		"\2\2\2B\4\3\2\2\2CE\t\2\2\2DF\t\3\2\2ED\3\2\2\2F\6\3\2\2\2GH\t\4\2\2H"+
		"I\t\5\2\2IN\t\6\2\2JK\t\7\2\2KL\t\b\2\2LN\t\t\2\2MG\3\2\2\2MJ\3\2\2\2"+
		"N\b\3\2\2\2OS\5\17\b\2PR\5\21\t\2QP\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3\2"+
		"\2\2T\n\3\2\2\2US\3\2\2\2VW\t\t\2\2WX\t\n\2\2XY\t\13\2\2Y\f\3\2\2\2Z["+
		"\t\t\2\2[\\\t\b\2\2\\]\t\5\2\2]\16\3\2\2\2^`\t\f\2\2_^\3\2\2\2`\20\3\2"+
		"\2\2ad\5\17\b\2bd\4\62;\2ca\3\2\2\2cb\3\2\2\2d\22\3\2\2\2el\5\25\13\2"+
		"fh\5\31\r\2gi\5\33\16\2hg\3\2\2\2hi\3\2\2\2ij\3\2\2\2jk\5\27\f\2km\3\2"+
		"\2\2lf\3\2\2\2lm\3\2\2\2m\24\3\2\2\2np\4\62;\2on\3\2\2\2pq\3\2\2\2qo\3"+
		"\2\2\2qr\3\2\2\2ry\3\2\2\2su\7\60\2\2tv\4\62;\2ut\3\2\2\2vw\3\2\2\2wu"+
		"\3\2\2\2wx\3\2\2\2xz\3\2\2\2ys\3\2\2\2yz\3\2\2\2z\26\3\2\2\2{}\4\62;\2"+
		"|{\3\2\2\2}~\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\30\3\2\2\2\u0080\u0081"+
		"\t\4\2\2\u0081\32\3\2\2\2\u0082\u0083\t\r\2\2\u0083\34\3\2\2\2\u0084\u0085"+
		"\7*\2\2\u0085\36\3\2\2\2\u0086\u0087\7+\2\2\u0087 \3\2\2\2\u0088\u0089"+
		"\7-\2\2\u0089\"\3\2\2\2\u008a\u008b\7/\2\2\u008b$\3\2\2\2\u008c\u008d"+
		"\7,\2\2\u008d&\3\2\2\2\u008e\u008f\7\61\2\2\u008f(\3\2\2\2\u0090\u0091"+
		"\5-\27\2\u0091\u0092\5\61\31\2\u0092*\3\2\2\2\u0093\u0094\5/\30\2\u0094"+
		"\u0095\5\61\31\2\u0095,\3\2\2\2\u0096\u0097\7@\2\2\u0097.\3\2\2\2\u0098"+
		"\u0099\7>\2\2\u0099\60\3\2\2\2\u009a\u009b\7?\2\2\u009b\62\3\2\2\2\u009c"+
		"\u009d\7\60\2\2\u009d\64\3\2\2\2\u009e\u009f\7`\2\2\u009f\66\3\2\2\2\u00a0"+
		"\u00a1\7=\2\2\u00a18\3\2\2\2\u00a2\u00a3\5\t\5\2\u00a3\u00a4\5\37\20\2"+
		"\u00a4:\3\2\2\2\u00a5\u00a6\7\f\2\2\u00a6<\3\2\2\2\u00a7\u00a9\t\16\2"+
		"\2\u00a8\u00a7\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa\u00ab"+
		"\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\b\37\2\2\u00ad>\3\2\2\2\20\2"+
		"AEMS_chlqwy~\u00aa\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}