const xhttp = new XMLHttpRequest();

xhttp.open('GET', '../data/contenido-articulo.json', true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if ((this.readyState == 4) && (this.status == 200)) {
        // console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        crearVistaArticulo(datos);
        recuperarNumArticulo();
    }
}

const crearVistaArticulo = (datos) => {
    let numArticulo = 1;
    for (let item of datos) {
        let estrellas = '';
        for (let i = 0; i < 5; i++) {
            let check = '<label class="article__rating"><i class="fa-solid fa-star"></i></label>'

            if (item.rating > 0) {
                check = '<label class="article__rating"><i class="fa-solid fa-star checked"></i></label>';
            }
            estrellas += check + '\n';
            item.rating--;
        }

        const main = document.querySelector('main');
        // console.log('MAIN: ' + main);

        main.innerHTML +=
            `
                <article class="article">
                    <a href="./articulo.html" class="article__title" id="${numArticulo}">${item.titulo}</a>
                    <h2 class="article__author">${item.autor}</h2>
                    <h3 class="article__date">${item.fecha}</h3>
                
                    <div class="article__rating-container">
                        ${estrellas}
                    </div>

                    <p class="article__description">
                        ${item.introduccion.split('.')[0]}
                    </p>
                </article>
                `;
        numArticulo++;
    }
    // cargaContenidoArticulo();

}

const recuperarNumArticulo = () => {
    const btns = document.querySelectorAll('.article__title');
    // console.log(btns);
    btns.forEach((btn) => {
        btn.addEventListener('click', e => {
            // alert(e.target.id)
            localStorage.setItem('article', '');
            localStorage.setItem('article', e.target.id);
        });
    });
}
