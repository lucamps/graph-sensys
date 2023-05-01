/*
 This grammar was made from the modification of an arithmetic grammar.
 Source by:
 https://github.com/antlr/grammars-v4/tree/master/arithmetic.
 Under the following license:
 
 BSD
 License
 Copyright (c) 2013, Tom Everett
 All rights reserved.
 Redistribution and use in source
 and binary forms, with or without
 modification, are permitted provided that the following
 conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice,
 this list of conditions and the following disclaimer.
 2. Redistributions in binary form must
 reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. Neither the name of Tom
 Everett nor the names of its contributors
 may be used to endorse or promote products derived from
 this software
 without specific prior written permission.
 THIS SOFTWARE IS PROVIDED BY THE
 COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
 NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED
 TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Comando para compilar: antlr4 -Dlanguage=JavaScript linear_prog.g4

grammar LinearProg;

file_: funcObj sep+ st (sep+ res)+ sep* END? EOF;

init: INIT;

funcObj: init sep* expression;
res: id? equation;

id: ID;
equation: expression relop expression;

st: ST;

sep: SMCOL | ENDL;

expression:
	expression POW expression
	| expression (TIMES | DIV) expression
	| expression addOrSub expression
	| LPAREN expression RPAREN
	| atom;

atom: addOrSub? ( scientific | scientific? variable);

addOrSub: (PLUS | MINUS);

scientific: SCIENTIFIC_NUMBER;

variable: VARIABLE;

relop: EQ | GT | LT | LTEQ | GTEQ;

INIT: MAX | MIN;

ST: ('S' | 's') ( ('T' | 't') | ('A' | 'a'));

END: ('E' | 'e') ('N' | 'n') ('D' | 'd')
	| ('F' | 'f') ('I' | 'i') ('M' | 'm');

VARIABLE: VALID_ID_START VALID_ID_CHAR*;

fragment MAX: ('M' | 'm') ('A' | 'a') ('X' | 'x');

fragment MIN: ('M' | 'm') ('I' | 'i') ('N' | 'n');

fragment VALID_ID_START: ('a' .. 'z') | ('A' .. 'Z') | '_';

fragment VALID_ID_CHAR: VALID_ID_START | ('0' .. '9');

SCIENTIFIC_NUMBER: NUMBER (E SIGN? UNSIGNED_INTEGER)?;

fragment NUMBER: ('0' .. '9')+ ('.' ('0' .. '9')+)?;

fragment UNSIGNED_INTEGER: ('0' .. '9')+;

fragment E: 'E' | 'e';

fragment SIGN: ('+' | '-');

LPAREN: '(';

RPAREN: ')';

PLUS: '+';

MINUS: '-';

TIMES: '*';

DIV: '/';
GTEQ: GT EQ;
LTEQ: LT EQ;
GT: '>';

LT: '<';

EQ: '=';

POINT: '.';

POW: '^';
SMCOL: ';';

ID: VARIABLE RPAREN;
ENDL: '\n';
WS: [ \r\t]+ -> skip;