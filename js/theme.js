const btnSwitch = document.querySelector('#switch');
const article = document.getElementsByClassName('article');
// console.log(article);

const cambioTema = () => {
    
    document.body.classList.toggle('dark');
    
    for (let artic of article){
        artic.classList.toggle('dark');
    }
    localStorage.setItem('theme', document.body.classList[0]);
    btnSwitch.classList.toggle('active');
}

window.onload = () => {
    if (localStorage.getItem('theme') === 'dark'){
        cambioTema();   
    }
};

btnSwitch.addEventListener('click', cambioTema);

