function showEnvelope() {
    // Ocultar la portada
    document.getElementById('cover').style.display = 'none';

    // Mostrar el sobre y aplicar la animación de sacudida
    const envelope = document.getElementById('envelope');
    envelope.style.display = 'flex';
    envelope.classList.add('shake');

    // Esperar a que la animación termine y luego permitir la interacción
    setTimeout(() => {
        envelope.classList.remove('shake');
    }, 500); // Duración de la animación de sacudida
}

function showLetter() {
    // Ocultar el sobre
    const envelope = document.getElementById('envelope');
    envelope.style.display = 'none';

    // Mostrar la carta y aplicar la animación de apertura
    const letter = document.getElementById('letter');
    letter.style.display = 'flex';
    letter.classList.add('open');
}

function showFinal() {
    // Ocultar la carta
    const letter = document.getElementById('letter');
    letter.style.display = 'none';

    // Mostrar el mensaje final
    const final = document.getElementById('final');
    final.style.display = 'flex';
}

function showMessage(response) {
    const message = document.getElementById('message');
    if (response === 'yes') {
        message.innerHTML = "Te amo mi vida hermosa muchas gracias por la oportunidad para hacermelo saber sube a tus notas 'Remember The Time'.";
        message.style.color = '#4caf50'; // Verde para el mensaje de éxito
    } else if (response === 'no') {
        message.innerHTML = "Entiendo esta bien pero tal vez ¿no querras re considerarlo y mejor un si? porfis :( si es un no definitivo hasmelo saber escribiendo un dislike..";
        message.style.color = '#f44336'; // Rojo para el mensaje de rechazo
    }
}
