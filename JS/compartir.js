document.querySelector('.redes-compartir').addEventListener('mouseenter', () => {
    document.querySelector('.cuadroRedes').classList.add('cuadroRedes-aparecer');
})

document.querySelector('.redes-compartir').addEventListener('mouseleave', () => {
    document.querySelector('.cuadroRedes').classList.remove('cuadroRedes-aparecer');
})

var url = window.location;

function compartirEnFacebook() {
    let link = 'https://www.facebook.com/sharer.php?href=' + url.href.split('?')[0].split('#')[0] + '&t=¡Participá en el sorteo de los chicos de 6to T!%20';
    window.open(link, "_blank") || url.replace(link);
}

function compartirEnWhatsapp () {
    let link = 'https://wa.me/?text=¡Participá en el sorteo de los chicos de 6to T!%20' + url.href.split('?')[0].split('#')[0];
    window.open(link, "_blank") || url.replace(link);
}

function compartirEnTwitter () {
    let link = 'https://twitter.com/intent/tweet?text=¡Participa+en+el+sorteo+de+los+chicos+de+6to+T!%20&url=' + url.href.split('?')[0].split('#')[0];
    window.open(link, "_blank") || window.location.replace(link);
}

function copiarLink() {
    var aux = document.createElement('input');
    aux.setAttribute('value', window.location.href.split('?')[0].split('#')[0]);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    var css = document.createElement('style');
    var estilo = document.createTextNode('#aviso {position:fixed; z-index: 999; top: 6vh;left:50%;margin-left: -70px;padding: 2vh 3vh; font-weight: 500; color: #fff; background: #242424;border-radius: 4px;}');
    css.appendChild(estilo);
    document.head.appendChild(css);
    var aviso = document.createElement('div');
    aviso.setAttribute('id', 'aviso');
    var contenido = document.createTextNode('Enlace copiado');
    aviso.appendChild(contenido);
    document.body.appendChild(aviso);
    window.load = setTimeout('document.body.removeChild(aviso)', 2000);
}
