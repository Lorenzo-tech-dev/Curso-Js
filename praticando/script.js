function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    const txt = `Agara são ${hora} horas`
    
    // console.log(txt)
    msg.innerHTML = txt


}