//função modo dark

let body = document.querySelector('body');
let sectionDark = document.querySelectorAll('section');
let header = document.querySelector('header');
let inicioHeader = document.querySelector('.menu-inicio');
let habilidadesHeader = document.querySelector('.menu-habilidades');
let projetosHeader = document.querySelector('.menu-projetos');
let sobreHeader = document.querySelector('.menu-sobre');
let faqHeader = document.querySelector('.menu-faq');
let sincerao = document.querySelector('.menu-sincerao');
let darkMode = document.querySelector('.dark-mode');
let textoTopo = document.querySelector('.texto-topo');
let imgTopo = document.querySelector('.img-topo');
let githubIconWhite = document.getElementById('gh-icon');
let githubIconBlack = document.getElementById('gh-ocult');
let nomeTecnologia = document.querySelectorAll('.sombreado-habil');
let sinceraoBtn = document.querySelector('.sincerao-btn');
let obrigadoDark = document.querySelector('.obrigado');
let resetBtn = document.querySelector('.reset');
let footer = document.querySelector('footer');
let mobileMagic = document.getElementById('mobile-magic');

document.getElementById('dark-mode').addEventListener('click', () => {
    toggleDarkMode();
});

function toggleDarkMode() {
    document.getElementById('dark-mode').classList.toggle('dark');
    body.classList.toggle('dark');
    sectionDark.forEach(section => {
        section.classList.toggle('dark');
    });    
    header.classList.toggle('dark');
    inicioHeader.classList.toggle('dark');
    habilidadesHeader.classList.toggle('dark');
    projetosHeader.classList.toggle('dark');
    sobreHeader.classList.toggle('dark');
    faqHeader.classList.toggle('dark');
    sincerao.classList.toggle('dark');
    textoTopo.classList.toggle('dark');
    imgTopo.classList.toggle('dark');
    githubIconWhite.classList.toggle('hide');
    githubIconBlack.classList.toggle('hide');
    sinceraoBtn.classList.toggle('dark');
    obrigadoDark.classList.toggle('dark');
    resetBtn.classList.toggle('dark');
    footer.classList.toggle('dark');
    mobileMagic.classList.toggle('dark');

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


//FUNÇÃO PARA APLICAR ANIMAÇÃO FADE NA SECTION OCULTA

const fade = new IntersectionObserver((avistado)=>{
    avistado.forEach((visto)=>{
        if(visto.isIntersecting){
            setTimeout(() => {
                visto.target.classList.add('fade');
            }, 250); 
        } else {
            visto.target.classList.remove('fade');
        }
    });
});

const ocult = document.querySelectorAll('.ocult')

ocult.forEach((elemento)=> fade.observe(elemento))

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

//FUNÇÃO TROCAR PAGINA DA SECTION HABILIDADES

function trocarHabilidades() {
    let switchHaabilidadesBtn1 = document.getElementById('switch-habilidades-btn1');
    let switchHaabilidadesBtn2 = document.getElementById('switch-habilidades-btn2');
    let switchHaabilidadesBtn3 = document.getElementById('switch-habilidades-btn3');
    let switchHaabilidadesBtn4 = document.getElementById('switch-habilidades-btn4');
    let tecnologias1 = document.getElementById('tecnologias1');
    let tecnologias2 = document.getElementById('tecnologias2');
    let tecnologias3 = document.getElementById('tecnologias3');
    let tecnologias4 = document.getElementById('tecnologias4');

    // Adicionar event listener para mostrar projetos1
    switchHaabilidadesBtn1.addEventListener('click', () => {
            tecnologias2.classList.add('hide');
            tecnologias3.classList.add('hide');
            tecnologias4.classList.add('hide');
            tecnologias1.classList.remove('hide');
            switchHaabilidadesBtn2.classList.remove('ativo');
            switchHaabilidadesBtn3.classList.remove('ativo');
            switchHaabilidadesBtn4.classList.remove('ativo');
            switchHaabilidadesBtn1.classList.add('ativo');
    });

    // Adicionar event listener para mostrar projetos2
    switchHaabilidadesBtn2.addEventListener('click', () => {
            tecnologias1.classList.add('hide');
            tecnologias3.classList.add('hide');
            tecnologias4.classList.add('hide');
            tecnologias2.classList.remove('hide');
            switchHaabilidadesBtn1.classList.remove('ativo');
            switchHaabilidadesBtn3.classList.remove('ativo');
            switchHaabilidadesBtn4.classList.remove('ativo');
            switchHaabilidadesBtn2.classList.add('ativo');
    });
    // Adicionar event listener para mostrar projetos3
    switchHaabilidadesBtn3.addEventListener('click', () => {
            tecnologias1.classList.add('hide');
            tecnologias2.classList.add('hide');
            tecnologias4.classList.add('hide');
            tecnologias3.classList.remove('hide');
            switchHaabilidadesBtn1.classList.remove('ativo');
            switchHaabilidadesBtn2.classList.remove('ativo');
            switchHaabilidadesBtn4.classList.remove('ativo');
            switchHaabilidadesBtn3.classList.add('ativo');
    });

    switchHaabilidadesBtn4.addEventListener('click', () => {
            tecnologias1.classList.add('hide');
            tecnologias2.classList.add('hide');
            tecnologias3.classList.add('hide');
            tecnologias4.classList.remove('hide');
            switchHaabilidadesBtn1.classList.remove('ativo');
            switchHaabilidadesBtn2.classList.remove('ativo');
            switchHaabilidadesBtn3.classList.remove('ativo');
            switchHaabilidadesBtn4.classList.add('ativo');
    });
}

trocarHabilidades();




//FUNÇÃO VER MAIS PROJETOS

function trocarProjetos() {
    let switchBtn1 = document.getElementById('switch-btn1');
    let switchBtn2 = document.getElementById('switch-btn2');
    let switchBtn3 = document.getElementById('switch-btn3');
    let projetos1 = document.getElementById('projetos1');
    let projetos2 = document.getElementById('projetos2');
    let projetos3 = document.getElementById('projetos3');

    // Adicionar event listener para mostrar projetos1
    switchBtn1.addEventListener('click', () => {
            projetos2.classList.add('hide');
            projetos3.classList.add('hide');
            projetos1.classList.remove('hide');
            switchBtn1.classList.add('ativo');
            switchBtn2.classList.remove('ativo');
            switchBtn3.classList.remove('ativo');
    });

    // Adicionar event listener para mostrar projetos2
    switchBtn2.addEventListener('click', () => {
            projetos1.classList.add('hide');
            projetos3.classList.add('hide');
            projetos2.classList.remove('hide');
            switchBtn2.classList.add('ativo');
            switchBtn1.classList.remove('ativo');
            switchBtn3.classList.remove('ativo');
    });

    // Adicionar event listener para mostrar projetos3
    switchBtn3.addEventListener('click', () => {
            projetos1.classList.add('hide');
            projetos2.classList.add('hide');
            projetos3.classList.remove('hide');
            switchBtn3.classList.add('ativo');
            switchBtn2.classList.remove('ativo');
            switchBtn1.classList.remove('ativo');
    });
}

trocarProjetos();




//FUNÇÃO PARA AO CLICAR NO BOTÃO DOS PROJETOS, VOLTAR AO TOPO DA SECTION PROJETOS

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }


// FAQ RECRUTADORES

let faq = document.querySelectorAll('.faq');

faq.forEach((faq) => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('active');
    });
});


//FUNÇÃO TROCA DE PAGINA FAQ

function trocarFaq() {

    let faq1 = document.getElementById('faq1');
    let faq2 = document.getElementById('faq2');
    let faq3 = document.getElementById('faq3');
    let switchFaqBtn1 = document.getElementById('switch-faq-btn1');
    let switchFaqBtn2 = document.getElementById('switch-faq-btn2');
    let switchFaqBtn3 = document.getElementById('switch-faq-btn3');

    switchFaqBtn1.addEventListener('click', () =>{
        faq2.classList.add('hide');
        faq3.classList.add('hide');
        faq1.classList.remove('hide');
        
        switchFaqBtn2.classList.remove('ativo');
        switchFaqBtn3.classList.remove('ativo');
        switchFaqBtn1.classList.add('ativo');
    });

    switchFaqBtn2.addEventListener('click', () =>{
        faq1.classList.add('hide');
        faq3.classList.add('hide');
        faq2.classList.remove('hide');

        switchFaqBtn1.classList.remove('ativo');
        switchFaqBtn3.classList.remove('ativo');
        switchFaqBtn2.classList.add('ativo');
    });

    switchFaqBtn3.addEventListener('click', () =>{
        faq2.classList.add('hide');
        faq1.classList.add('hide');
        faq3.classList.remove('hide');

        switchFaqBtn2.classList.remove('ativo');
        switchFaqBtn1.classList.remove('ativo');
        switchFaqBtn3.classList.add('ativo');
    });
}

trocarFaq()


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

function avaliar() {

    let btnGostei = document.getElementById('gostei');
    let btnNaoGostei = document.getElementById('nao-gostei');
    let obrigado = document.getElementById('obrigado');
    let fecharObrigado = document.getElementById('fechar-obrigado');
    let rate = document.getElementById('rate');
    let lowRate = document.getElementById('low-rate');
    let highRate = document.getElementById('high-rate');
    let returnBack = document.getElementById('return-back');
    let counter = 0;

    //CLICAR NO BOTÃO E ABIR AVALIAÇÃO COM NOTAS
    btnGostei.addEventListener('click', () => {
        if (counter === 0) {
            btnGostei.classList.add('hide');
            btnNaoGostei.classList.add('hide');
            rate.classList.remove('hide');
            counter = 1;
        }
    });

    lowRate.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigado.classList.remove('hide');
            counter = 2;
        }
    });
    
    highRate.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigado.classList.remove('hide');
            counter = 3;
        }
    });

    fecharObrigado.addEventListener('click', () => {
        if (counter === 2 || counter === 3) {
            obrigado.classList.add('hide');
            returnBack.classList.remove('hide')
            counter = 4;
        }
    });

    returnBack.addEventListener('click', () => {
        if (counter === 4) {
            returnBack.classList.add('hide');
            btnGostei.classList.remove('hide');
            btnNaoGostei.classList.remove('hide');
            counter = 0;
        }
    });

}

avaliar();


const listaMenu = document.querySelectorAll('.lista-menu')

function ativaLink(){
    for(let i of listaMenu){
        i.classList.remove('ativo')
    }
    this.classList.add('ativo')
}

for(let i of listaMenu){
    i.addEventListener('click', ativaLink)
}

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
 