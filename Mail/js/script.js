/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

//Mail consentite
var mailValide = ["owners@libero.it", "dipendente1@libero.it", "dipendente2@libero.it", "dipendente3@libero.it"];

//Chiedo la mail all'utente
var mail = prompt("Inserire la propria mail: ");

//Variabile per stabile se è stata trovata la mail
var presente = false;

//Stampa di debug
console.log("email valide -----> ");
for(var i = 0 ; i < mailValide.length; i ++){
  console.log(mailValide[i]);
}
console.log("email inserita ----> " + mail);

//Controlla che la mail inserita si trovi all'interno dell'array
for(var i = 0; i < mailValide.length; i ++){
  if(mail == mailValide[i]){
    presente = true;
  }
}

if(presente == true){
  console.log("Accesso consentito");
}else {
  console.log("Accesso negato");
}
