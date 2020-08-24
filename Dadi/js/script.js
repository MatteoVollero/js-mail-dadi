/*Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


//Dichiaro i due dadi per il Gioco
var dado1;
var dado2;

//Calcolo con il rand i due numeri
dado1 = Math.random() * (6-1) + 1;
dado2 = Math.random() * (6-1) + 1;

dado1 = parseInt(dado1);
dado2 = parseInt(dado2);

//Mostro i risultati dei due Dadi
console.log("dado1 ----> " + dado1);
console.log("dado2 ----> " + dado2);


//Decreto il vincitore
if(dado1 > dado2){
  console.log("Il primo giocatore ha vinto");
}else if(dado1 < dado2){
  console.log("Il secondo giocatore ha vinto");
}else{
  console.log("Pareggio");
}
