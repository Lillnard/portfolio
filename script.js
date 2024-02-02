//função modo dark

let body = document.querySelector('body');
let header = document.querySelector('header');
let botaoRepositorio = document.querySelector('.repositorio-port');
let habilidadesTitulo = document.querySelector('.habilidades h2 span');
let logoHeader = document.querySelector('.logo a span');
let social = document.querySelector('.social');
let SocialMobile = document.getElementById('#social-mobile');
let darkMode = document.getElementById('.dark-mode');


document.getElementById('dark-mode').addEventListener('click', () => {
    toggleDarkMode();
});

document.getElementById('menu-mobile').querySelector('#dark-mode').addEventListener('click', () => {
    toggleDarkMode();
});

function toggleDarkMode() {
    document.getElementById('dark-mode').classList.toggle('dark');
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    logoHeader.classList.toggle('dark');
    habilidadesTitulo.classList.toggle('dark');
    social.classList.toggle('dark');
    darkMode.classList.toggle('dark');
    botaoRepositorio.classList.toggle('dark')
}

//função visualizar habilidaddes

const visualizar = new IntersectionObserver((avistado)=>{
    avistado.forEach((visto)=>{
        if(visto.isIntersecting){
            setTimeout(() => {
                visto.target.classList.add('show');
            }, 250); 
        } else {
            visto.target.classList.remove('show');
        }
    });
});

const section = document.querySelectorAll('.hidden')

section.forEach((elemento)=> visualizar.observe(elemento))

//função menu selecionado no scroll

const links = document.querySelectorAll('.js')
const sections = document.querySelectorAll('.section')

window.addEventListener('scroll', ()=>{
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 75;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id');

        if (top >= offset && top < offset + heightSection){
            links.forEach(link =>{
                link.classList.remove('ativo');

                document.querySelector(`header nav a[href*='${idSection}']`).classList.add('ativo');
            })
        }
    })
})

//voltar ao home ao recarregar a pagina//
window.onload = function() {
    window.scrollTo(0, 0);
}

//função para menu mobile abiri e fechar com toque em qualquer pate da tela

let abrirMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let sombreado = document.getElementById('sombreado-menu')

abrirMenu.addEventListener('click', ()=>{
    menu.classList.add('menu-aberto')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('menu-aberto')
})

sombreado.addEventListener('click', ()=>{
    menu.classList.remove('menu-aberto')
})


//função abertura de modal de habilidades

// function abrirModal(){
//     const modal = document.getElementById('janela')
//     modal.classList.add('abrir');

//     modal.addEventListener('click', (e) =>{
//         if(e.target.id == 'fehcar-modal' || e.target.id == 'modal'){
//             modal.classList.remove('abrir')
//         }
//     })
// }