let numGatti = 44;
let file = 6;

let numerofile = Math.floor(numGatti / file);
console.log(numerofile);


let rimasti = numGatti % file;
console.log(rimasti);

let mancanti = file - rimasti;
console.log(mancanti);