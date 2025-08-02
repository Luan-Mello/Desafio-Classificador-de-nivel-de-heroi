
let nome = "Koda";
let xp = 9400;

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
    nivel = "Ascedente";
}  else if (xp <= 10000) {
    nivel = "IMORTAL";
}  else {
    nivel = "RADIANTE";
}

const mensagem = ("o Heroi de nome " + nome + " está no nivel " + nivel );

console.log(mensagem)





