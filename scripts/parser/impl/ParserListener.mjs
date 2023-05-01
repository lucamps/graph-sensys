import LinearProgListener from "../antlr_files/LinearProgListener.js";
import LinearExpression from "../../LinearExpression.mjs";
import LinearProgParser from "../antlr_files/LinearProgParser.js";

export default class ParserListener extends LinearProgListener {
	constructor() {
		super();
		this.entrouRes = false;
		this.naEquacao = false;
		this.leftSide = true;
		this.subSign = false;
		this.variaveis = [];
		this.stIndex = 0;
		this.stList = new Array();

		this.funcObj = new LinearExpression({ isObjectiveFuncion: true });
	}
	// Enter a parse tree produced by linear_progParser#file_.
	enterFile_(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#file_.
	exitFile_(ctx) {
	}


	// Enter a parse tree produced by linear_progParser#init.
	enterInit(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#init.
	exitInit(ctx) {
		let msg;

		let tipo = ctx.getText().toLowerCase();
		switch (tipo) {
			case "max":
				msg = "max";
				break;
			case "min":
				msg = "min";
				break;
			default:
			// nao esta sendo usado
			// msg = "Inicializador inválido! Tente iniciar com 'MAX' ou 'MIN'.";
			// throw ParserExeption(msg: msg, type: ErrorType.semantic);
		}
		console.log(msg);
	}


	// Enter a parse tree produced by linear_progParser#funcObj.
	enterFuncObj(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#funcObj.
	exitFuncObj(ctx) {
		this.variaveis.sort()
		this.funcObj.nameVarA = this.variaveis[0];
		this.funcObj.nameVarB = this.variaveis[1];
		console.log(this.funcObj);
	}


	// Enter a parse tree produced by linear_progParser#res.
	enterRes(ctx) {
		this.stList.push(new LinearExpression({}));
		this.entrouRes = true;
	}

	// Exit a parse tree produced by linear_progParser#res.
	exitRes(ctx) {
		this.variaveis.sort();
		if (this.variaveis.length != 2) {
			console.log("ERRO: quantidade de variaveis inválida, tratar erros depois");
		}
		this.stList[this.stIndex].nameVarA = this.variaveis[0];
		this.stList[this.stIndex].nameVarB = this.variaveis[1];
		this.stIndex++;
	}


	// Enter a parse tree produced by linear_progParser#id.
	enterId(ctx) {
		this.stList[this.stIndex].id = ctx.getText().split(')')[0];
	}

	// Exit a parse tree produced by linear_progParser#id.
	exitId(ctx) {
	}


	// Enter a parse tree produced by linear_progParser#equation.
	enterEquation(ctx) {
		this.naEquacao = true;
		this.leftSide = true;
	}

	// Exit a parse tree produced by linear_progParser#equation.
	exitEquation(ctx) {
		this.naEquacao = false;
	}


	// Enter a parse tree produced by linear_progParser#st.
	enterSt(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#st.
	exitSt(ctx) {
	}


	// Enter a parse tree produced by linear_progParser#sep.
	enterSep(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#sep.
	exitSep(ctx) {
		console.log("\nSEPARADOR\n");
	}


	// Enter a parse tree produced by linear_progParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#expression.
	exitExpression(ctx) {
	}


	// Enter a parse tree produced by linear_progParser#atom.
	enterAtom(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#atom.
	exitAtom(ctx) {
		let constante = false;

		// Tratando restricao
		let atom = ctx.getText();

		// Armazenando a lista de filhos
		let listaFilhos = ctx.children;

		let valDouble = 1; // Numero em Double
		let varName = ""; // Nome da variavel

		for (let i = 0; i < listaFilhos.length; i++) {
			// Percorrendo os filhos
			if (listaFilhos[i] instanceof LinearProgParser.ScientificContext) {
				// Verificando se e' um numero
				valDouble = parseFloat(listaFilhos[i].getText());
			} else if (listaFilhos[i] instanceof LinearProgParser.VariableContext) {
				// Se e' uma variavel, salvamos o nome
				varName = listaFilhos[i].getText();
			}
		}

		// Se tem nome e' variavel
		if (varName) {
			// tratando sinal
			if (!this.leftSide) {
				this.subSign = !this.subSign;
			}
			console.log(atom);
			console.log(`Variavel:  ${varName} \t Valor: ${valDouble} \t Negativo: ${this.subSign}`);
		}
		// Se nao tem nome e' uma constante
		else {
			constante = true;
			// tratando sinal
			if (this.leftSide) {
				this.subSign = !this.subSign;
			}
			console.log(atom);
			console.log(`Constante de valor: ${valDouble} \t Negativo: ${this.subSign}`);
		}

		if (this.subSign) {
			valDouble *= -1;
		}

		if (this.entrouRes) {
			// se e' restricao, atualiza os dados de stList em stIndex
			if (constante) {
				this.stList[this.stIndex].value += valDouble;
			} else {
				if (varName == this.variaveis.first) {
					this.stList[this.stIndex].a += valDouble;
				} else {
					this.stList[this.stIndex].b += valDouble;
				}
			}
		} else {
			// TODO: verificar se esse else e' necessario
			// senão, atualiza os dados da função objetivo
			if (constante) {
				this.funcObj.value += valDouble;
			} else {
				if (varName == this.variaveis.first) {
					this.funcObj.a += valDouble;
				} else {
					this.funcObj.b += valDouble;
				}
			}
		}

		this.subSign = false;
	}


	// Enter a parse tree produced by linear_progParser#addOrSub.
	enterAddOrSub(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#addOrSub.
	exitAddOrSub(ctx) {
		let text = ctx.getText();
		if (text == "-") {
			this.subSign = true;
		}
	}


	// Enter a parse tree produced by linear_progParser#scientific.
	enterScientific(ctx) {
	}

	// Exit a parse tree produced by linear_progParser#scientific.
	exitScientific(ctx) {
	}


	// Enter a parse tree produced by linear_progParser#variable.
	enterVariable(ctx) {
		// TODO: tratar erros
		// let msg =
		// 	`Variável \'${ctx.getText()}\' não pode ser utilizada. Podemos ter no máximo 2 variáveis.`;

		if (!this.variaveis.includes(ctx.getText())) {
			if (this.variaveis.length < 2) {
				this.variaveis.push(ctx.getText());
			}
			// else {
			// 	throw ParserExeption(msg: msg, type: ErrorType.semantic);
			// }
		}
	}

	// Exit a parse tree produced by linear_progParser#variable.
	exitVariable(ctx) {
	}


	// Enter a parse tree produced by linear_progParser#relop.
	enterRelop(ctx) {
		this.stList[this.stIndex].rel = ctx.getText();
	}

	// Exit a parse tree produced by linear_progParser#relop.
	exitRelop(ctx) {
		this.leftSide = false;
	}
}