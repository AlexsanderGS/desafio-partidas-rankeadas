
function calculaSaldo(qtdVitorias, qtdDerrotas) {

    return qtdVitorias - qtdDerrotas

}

let result = calculaSaldo(320, 115)
let nivel = ""


if (result <= 10) {
    nivel = "Ferro";
} else if (result >= 11 && result <= 20) {
    nivel = "Bronze";
} else if (result >= 21 && result <= 50) {
    nivel = "Prata";
} else if (result >= 51 && result <= 80) {
    nivel = "Ouro";
} else if (result >= 81 && result <= 91) {
    nivel = "Diamante";
} else if (result >= 91 && result <= 100) {
    nivel = "Lendário";
} else if (result >= 101) {
    nivel = "Imortal";
}


console.log("O héroi tem saldo de " + result + " está no nível: " + nivel)



