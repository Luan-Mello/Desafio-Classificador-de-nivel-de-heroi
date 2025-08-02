
let nome = "Koda";
let xp = 8450;


// Lista de missões concluídas com o XP ganho em cada uma
let missoes = [300, 450, 1200, 2000]; 

for (let i = 0; i < missoes.length; i++) {
    xp += missoes[i]; 
    console.log("Missão " + (i + 1) + ": ganhou " + missoes[i] + " XP.");
}

console.log(nome + " acumulou um total de " + xp + " de XP.");


let nivel;

if (xp < 100) {
    nivel = "FERRO";
} else if (xp <= 2000) {
    nivel = "BRONZE";
} else if (xp <= 5000) {
    nivel = "PRATA";    
} else if (xp <= 7000) {
    nivel = "OURO";
}  else if (xp <= 8000) {
    nivel = "PLATINA";
}  else if (xp <= 9000) {
    nivel = "Ascendente";
}  else if (xp <= 10000) {
    nivel = "IMORTAL";
}  else {
    nivel = "RADIANTE";
}

const mensagem = ("o Heroi de nome " + nome + " está no nivel " + nivel );

console.log(mensagem)





