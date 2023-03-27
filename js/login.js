let usuarios = '';

// Lectura del archivo con los datos de los usuarios
const xhttp = new XMLHttpRequest();
xhttp.open('GET', '../data/usuarios.json', true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if ((this.readyState == 4) && (this.status == 200)) {
        usuarios = JSON.parse(this.responseText);
    }
}


const login = () => {
    let user = document.getElementById('username');
    let pass = document.getElementById('password');
    
    // Validacion
    let mensajeFalla = 'Usuario Incorrecto';
    let existe = false;
    if (pass.value.length >= 8){
        for (let item of usuarios){
            if (item.user == user.value) {
                if (item.password == pass.value) {
                    existe = true;
                } else {
                    mensajeFalla = 'Contraseña Incorrecta';
                }
                break;
            }
        }
        
        if (existe) {
            alert('Bienvenido ' + user.value);
            loginData(user);
            user.value = '';
            pass.value = '';
            window.location = "../html/index.html";
        } else {
            alert(mensajeFalla);
        }
    } else {
        alert('El tamaño mínimo de la contraseña es de 8 dígitos!!');
    }
}

const loginData = (username) => {
    localStorage.setItem('user', username);
}

let btnLogin = document.getElementById('login');
btnLogin.addEventListener('click', login);

addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        login();
    }
})

localStorage.setItem('user', '');