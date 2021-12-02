alert('Rispondi a questo breve questionario per ricevere assolutamente niente')

const birth = prompt ('Qual è la tua data di nascita?')
const game = prompt ('Qual è il tuo gioco preferito?')
const film = prompt ('Qual è il tuo film preferito?')

let element = document.getElementById('password');
element.innerHTML = `Ecco il risultato del tuo questionario: <br> Data di nascita: ${birth}. <br> Gioco preferito: ${game}. <br> Film Preferito: ${film}.`;
