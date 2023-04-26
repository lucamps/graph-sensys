
// Recebe uma matriz n x 2 e retorna uma string a ser usada pelo Desmos
function pointsToString(points){
    let pointsString = "";
    let size = points.length;
    for(let i = 0; i < size-1; i++){
        pointsString += '(' + points[i][0] + ',' + points[i][1] +  '),';
    }
    pointsString += '(' + points[size-1][0] + ',' + points[size-1][1] +  ')';
    
    return pointsString;
}

// Obtendo grafico
let elt = document.getElementById('graph');
let options = {zoomButtons:false,expressions:true};
let calculator = Desmos.GraphingCalculator(elt,options);

// Desenhando retas
calculator.setExpression({id:'reta1',latex:"2x + y = 5"});
calculator.setExpression({id:'reta',latex:"-8x + 7y = 9"});

// Desenhando um polígono
let points = [[1,2],[3,7],[7,4],[8,1]];
let pointsString = pointsToString(points);
let poligStr = `\\polygon(${pointsString})`;
calculator.setExpression({id:'polig1',latex:poligStr });