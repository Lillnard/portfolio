//função modo dark

let body = document.querySelector('body');
let sectionDark = document.querySelectorAll('section');
let header = document.querySelector('header');
let inicioHeader = document.querySelector('.menu-inicio');
let habilidadesHeader = document.querySelector('.menu-habilidades');
let projetosHeader = document.querySelector('.menu-projetos');
let sobreHeader = document.querySelector('.menu-sobre');
let faqHeader = document.querySelector('.menu-faq');
let faqSincerao = document.querySelector('.menu-sincerao');
let darkMode = document.querySelector('.dark-mode');
let textoTopo = document.querySelector('.texto-topo');
let imgTopo = document.querySelector('.img-topo');
let habilidadesTitulo = document.querySelector('.habilidades h2 span');
let nomeTecnologia = document.querySelectorAll('.sombreado-habil');
let projetosTitulo = document.querySelector('.projetos h2 span');
let sinceraoBtn = document.querySelector('.sincerao-btn');
let obrigadoDark = document.querySelector('.obrigado');
let footer = document.querySelector('footer');


document.getElementById('dark-mode').addEventListener('click', () => {
    toggleDarkMode();
});

document.getElementById('menu-mobile').querySelector('#dark-mode').addEventListener('click', () => {
    toggleDarkMode();
});

function toggleDarkMode() {
    document.getElementById('dark-mode').classList.toggle('dark');
    body.classList.toggle('dark');
    sectionDark.forEach(section => {
        section.classList.toggle('dark');
    });    header.classList.toggle('dark');
    inicioHeader.classList.toggle('dark');
    habilidadesHeader.classList.toggle('dark');
    projetosHeader.classList.toggle('dark');
    sobreHeader.classList.toggle('dark');
    faqHeader.classList.toggle('dark');
    faqSincerao.classList.toggle('dark');
    textoTopo.classList.toggle('dark');
    imgTopo.classList.toggle('dark');
    habilidadesTitulo.classList.toggle('dark');
    projetosTitulo.classList.toggle('dark');
    sinceraoBtn.classList.toggle('dark');
    obrigadoDark.classList.toggle('dark');
    footer.classList.toggle('dark');

    nomeTecnologia.forEach(nome => {
        nome.classList.toggle('dark');
    });

    document.querySelectorAll('section p').forEach(p => {
        p.classList.toggle('dark');
    });

}



//FUNÇÃO SECTION ENTRANDO PELA ESQUERDA

const visualizar = new IntersectionObserver((avistado)=>{
    avistado.forEach((visto)=>{
        if(visto.isIntersecting){
            setTimeout(() => {
                visto.target.classList.add('show-left');
            }, 250); 
        } else {
            visto.target.classList.remove('show-left');
        }
    });
});

const section = document.querySelectorAll('.hidden-left')

section.forEach((elemento)=> visualizar.observe(elemento))



//FUNÇÃO SECTION ENTRANDO PELA DIREITA

const visualizarDireita = new IntersectionObserver((avistado)=>{
    avistado.forEach((visto)=>{
        if(visto.isIntersecting){
            setTimeout(() => {
                visto.target.classList.add('show-right');
            }, 250); 
        } else {
            visto.target.classList.remove('show-right');
        }
    });
});

const sectionhiddenright = document.querySelectorAll('.hidden-right')

sectionhiddenright.forEach((elemento)=> visualizarDireita.observe(elemento))


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



//função para menu mobile abrir e fechar com toque em qualquer pate da tela

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



// FAQ RECRUTADORES

let faq = document.querySelectorAll('.faq');

faq.forEach((faq) => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('active');
    });
});


//BOTÃO SINCERÃO MOVENDO

function move(){

let naoGostei = document.getElementById('nao-gostei')
let sectionWidth = window.innerWidth;
let sectionHeight = window.innerHeight;
let maxX = sectionWidth - naoGostei.offsetWidth;
let maxY = sectionHeight - naoGostei.offsetHeight;
let randomX = Math.floor(Math.random() * maxX);
let randomY = Math.floor(Math.random() * maxY);

naoGostei.style.left = randomX + "px";
naoGostei.style.top = randomY + "px";

}

//FUNÇÃO DE CLICK NA AVALIAÇÃP

function obrigado() {
    let btnGostei = document.getElementById('gostei');
    let btnNaoGostei = document.getElementById('nao-gostei');
    let obrigado = document.getElementById('obrigado');
    let fecharObrigado = document.getElementById('fechar-obrigado');
    let counter = 0;

    btnGostei.addEventListener('click', () => {
        if (counter === 0) {
            obrigado.classList.add('block');
            btnGostei.classList.add('hide');
            btnNaoGostei.classList.add('hide');
            counter = 1;
        }
    });

    btnNaoGostei.addEventListener('click', () => {
        if (counter === 0) {
            obrigado.classList.add('block');
            btnGostei.classList.add('hide');
            btnNaoGostei.classList.add('hide');
            counter = 1;
        }
    });

    fecharObrigado.addEventListener('click', () => {
        if (counter === 1) {
            obrigado.classList.remove('block');
            btnGostei.classList.remove('hide');
            btnNaoGostei.classList.remove('hide');
            counter = 0;
        }
    });
}

obrigado();


//MODAL SAIDA DO SITE

// let modalDeSaida = document.querySelector('dialog')
// let btnFecharModal = document.querySelectorAll('dialog button')
// let contador = 0

// document.addEventListener('mouseleave', () => {

//     if(contador == 0){
//         modalDeSaida.showModal()
//     }
// })

// btnFecharModal.forEach(button => {
//     button.addEventListener('click', () => {
//         modalDeSaida.close()
//         contador = 1
//     })
// })
 