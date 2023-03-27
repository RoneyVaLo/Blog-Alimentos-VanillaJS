// Valida que se haya logueado un usuario antes de avanzar a otra página
if ((window.location.pathname != '/login.html') && (localStorage.getItem('user') == '')) {
    window.location = "login.html";
    console.log('No ha logueado');
}
