var a = 1;
var a = 2; 

let b = 3;
//let b = 4; // SyntaxError: Identifier 'b' has already been declared

const c = 5;
const c = 6; //SyntaxError: Identifier 'c' has already been declared

// Таким образом через var можно задать переменные с
//одинаковым именем (в результате создания второй 
//переменной значение a перезаписывается), а операторы
//let и const выбрасывают Syntax Error
