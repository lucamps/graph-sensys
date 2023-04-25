let elt = document.getElementById('graph');
let options = {zoomButtons:false,expressions:true}
let calculator = Desmos.GraphingCalculator(elt,options);

let poligStr = '\\polygon((1,2),(7,4),(3,7))'
calculator.setExpression({id:'polig1',latex:poligStr})