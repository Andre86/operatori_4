let numGatti = 44;
let file = 6;

let numerofile = Math.floor(numGatti / file);
console.log(numerofile);


let rimasti = numGatti % file;
console.log(rimasti);

let mancanti = file - rimasti;
console.log(mancanti);

console.log(`ci sono ${file} file di gatti e ne mancano ${mancanti} per una nuova fila con un avanzo di ${rimasti}`);