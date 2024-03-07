var agora = new Date() //pega as horas REAIS
var hora = agora.getHours() //agora.getHours //variavel para mostrar as horas reais

console.log(`Agora são ${hora} horas`)

if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <=23){
    console.log('Boa noite!')
}else {
    console.log('Boa madrugada!')
}