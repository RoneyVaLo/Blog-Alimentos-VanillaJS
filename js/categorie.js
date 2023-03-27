const categorias = document.querySelectorAll('.categoria');
    categorias.forEach((categoria) => {
        categoria.addEventListener('click', e => {
            localStorage.setItem('categorie', '');
            localStorage.setItem('categorie', e.target.id);
        });
    });