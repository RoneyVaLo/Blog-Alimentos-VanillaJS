let numArticulo = localStorage.getItem('article');
console.log(localStorage.getItem('article'));

const xhttp = new XMLHttpRequest();

xhttp.open('GET', '../data/contenido-articulo.json', true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if ((this.readyState == 4) && (this.status == 200)) {
        // console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        crearArticulo(datos[numArticulo - 1]);
        // console.log(datos[numArticulo - 1]);
    }
}

const crearParrafos = (texto, etiqueta) => {
    let parrafos = ''; 
        texto.split('\n').forEach(parrafo => {
            parrafos += '<' + etiqueta + '>' + parrafo + '</' + etiqueta + '>\n';
        });
    return parrafos;
}

const modificarHero = (title) => {
    document.getElementById('banner').style.backgroundImage = 'url(../img/art' + numArticulo + '.jpg)';
    document.getElementById('banner__title').textContent= title;
}

const crearArticulo = (datos) => {
    modificarHero(datos.titulo);
    let estrellas = '';
        for (let i = 0; i < 5; i++) {
            let check = '<label class="article__rating"><i class="fa-solid fa-star"></i></label>'

            if (datos.rating > 0) {
                check = '<label class="article__rating"><i class="fa-solid fa-star checked"></i></label>';
            }
            estrellas += check + '\n';
            datos.rating--;
        }
        // console.log(ingredientes);

        const main = document.querySelector('main');
        // console.log('MAIN: ' + main);

        main.innerHTML +=
            `
            <h1 class="title_post">${datos.titulo}</h1>
            <h2>${datos.autor}</h2>
            <h3>${datos.fecha}</h3>
    
            <div class="rating__container">
                ${estrellas}
            </div>
                ${crearParrafos(datos.introduccion, 'p')}
    
            <span class="subtitle-p">${datos.subtituloIngredientes}</span>
                
            <p>
                ${crearParrafos(datos.descIngredientes, 'p')}
            </p>
    
            <ul class="ingredients">
                ${crearParrafos(datos.ingredientes, 'li')}
            </ul>
    
            <span class="subtitle-p">${datos.subtituloPreparacion}</span>
                ${crearParrafos(datos.preparacion, 'p')}
                `;
}