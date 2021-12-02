const Nome = prompt ("inserisci il tuo nome")
const Cognome = prompt ("inserisci il tuo cognome")
const Colore = prompt ("inserisci il tuo colore preferito")

let result = document.getElementById('password')
result.innerHTML = `Ecco la tua password:"${Nome} ${Cognome} ${Colore}"`;