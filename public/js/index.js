let welcome = document.getElementById('welcome');
let user = prompt('Por vavor, ingrese su nombre');

welcome.innerHTML = '¡Hola Invitado!'
if (user != null) {
    welcome.innerHTML = '¡Hola ' + user + '!';
    welcome.style.textTransform = 'uppercase';
};