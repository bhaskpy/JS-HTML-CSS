
function carregar() {
    var msg = document.getElementById('msg') //var de obj para a div da mensagem
    var img = document.getElementById('imagem') //var de obj para a foto dentro da div
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` //o que vai aparecer na div mensagem

    if (hora >= 0 && hora < 12) {
        console.log('Bom dia!')
        img.src = 'fotomanha.png' //para mudar a imagem para a de bomdia
            document.body.style.background = '#cba3e5'
    } else if (hora >= 12 && hora <= 18) {
        console.log('Boa tarde!')
        img.src = 'fototarde.png'
            document.body.style.background = '#fcbe83'
    } else {
        console.log('Boa Noite!')
        img.src = 'fotonoite.png'
            document.body.style.background = '#583d5a' //atalho para a mudança de cor do background de acordo com o horário.
    }
}