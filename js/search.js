document.getElementById('buscar').addEventListener('click', () => {
    
    filtrarArchivos()
});

const filtrarArchivos = () => {
    const buscador = document.getElementById('buscador');
    const articulos = document.querySelectorAll('.article');
    let cantVisibles = 0;
    articulos.forEach(articulo => {
        if (articulo.textContent.toLowerCase().includes(buscador.value.toLowerCase())) {
            articulo.classList.remove('filtro');
            cantVisibles++;
        } else {
            articulo.classList.add('filtro');
        };
    });

    if (cantVisibles === 0){
        document.getElementById('error').style.display = 'flex';
    }
}

document.addEventListener('keyup', e => {
    const articulos = document.querySelectorAll('.article');
    if (buscador.value === '') {
        document.getElementById('error').style.display = 'none';
        articulos.forEach(articulo => {
            articulo.classList.remove('filtro');
        })
    }
    if ((e.key === "Enter") && (buscador.value !== '')) {
        filtrarArchivos();
    }
})

