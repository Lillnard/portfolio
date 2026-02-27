//função modo dark

let body = document.querySelector('body');
let sectionDark = document.querySelectorAll('section');
let header = document.querySelector('header');
let logoDark = document.querySelectorAll('.logo-black');
let logoLight = document.querySelectorAll('.logo-light');
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
let btnHover = document.querySelectorAll('.btn-hover');
let projetoButtons= document.querySelectorAll('.projeto-buttons');
let curriculo = document.querySelector('.cv');
let sinceraoBtn = document.querySelector('.sincerao-btn');
let obrigadoContainerDark = document.querySelector('.obrigado-container');
let obrigadoDark = document.querySelector('.obrigado');
let resetBtn = document.querySelector('.reset');
let footer = document.querySelector('footer');
let mobileMagic = document.querySelector('.menu-mobile-magic');

/* ✅ NOVO: elementos do hambúrguer */
let hambBtn = document.getElementById('hambBtn');
let hambPanel = document.getElementById('hambPanel');
let hambOverlay = document.getElementById('hambOverlay');
let hambClose = document.getElementById('hambClose');
let darkModeMobileBtn = document.getElementById('dark-mode-mobile');

function abrirHamb() {
    if (!hambPanel || !hambOverlay) return;
    hambPanel.classList.add('open');
    hambOverlay.classList.remove('hide');
    hambPanel.setAttribute('aria-hidden', 'false');
}

function fecharHamb() {
    if (!hambPanel || !hambOverlay) return;
    hambPanel.classList.remove('open');
    hambOverlay.classList.add('hide');
    hambPanel.setAttribute('aria-hidden', 'true');
}

if (hambBtn) hambBtn.addEventListener('click', abrirHamb);
if (hambClose) hambClose.addEventListener('click', fecharHamb);
if (hambOverlay) hambOverlay.addEventListener('click', fecharHamb);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharHamb();
});

/* ✅ Dark Mode: clique no desktop e no mobile */
let darkModeDesktopEl = document.getElementById('dark-mode');
if (darkModeDesktopEl) {
    darkModeDesktopEl.addEventListener('click', () => {
        toggleDarkMode();
    });
}
if (darkModeMobileBtn) {
    darkModeMobileBtn.addEventListener('click', () => {
        toggleDarkMode();
    });
}

function toggleDarkMode() {

    // ✅ deixa os dois botões (desktop e mobile) “sincronizados”
    if (darkModeDesktopEl) darkModeDesktopEl.classList.toggle('dark');

    body.classList.toggle('dark');

    sectionDark.forEach(section => {
        section.classList.toggle('dark');
    });

    header.classList.toggle('dark');

    if(inicioHeader) inicioHeader.classList.toggle('dark');
    if(habilidadesHeader) habilidadesHeader.classList.toggle('dark');
    if(projetosHeader) projetosHeader.classList.toggle('dark');
    if(sobreHeader) sobreHeader.classList.toggle('dark');
    if(faqHeader) faqHeader.classList.toggle('dark');
    if(sincerao) sincerao.classList.toggle('dark');

    if(textoTopo) textoTopo.classList.toggle('dark');
    if(imgTopo) imgTopo.classList.toggle('dark');

    if(githubIconWhite) githubIconWhite.classList.toggle('hide');
    if(githubIconBlack) githubIconBlack.classList.toggle('hide');

    if(curriculo) curriculo.classList.toggle('dark');
    if(sinceraoBtn) sinceraoBtn.classList.toggle('dark');
    if(obrigadoContainerDark) obrigadoContainerDark.classList.toggle('dark');
    if(obrigadoDark) obrigadoDark.classList.toggle('dark');
    if(resetBtn) resetBtn.classList.toggle('dark');
    if(footer) footer.classList.toggle('dark');
    if(mobileMagic) mobileMagic.classList.toggle('dark');

    nomeTecnologia.forEach(nome => {
        nome.classList.toggle('dark');
    });

    btnHover.forEach(btn => {
        btn.classList.toggle('dark');
    });

    projetoButtons.forEach(button => {
        button.classList.toggle('dark');
    });

    logoDark.forEach(logo => {
        logo.classList.toggle('hide');
    });

    logoLight.forEach(logo => {
        logo.classList.toggle('hide');
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

                const headerLink = document.querySelector(`header nav a[href*='${idSection}']`);
                const mobileLink = document.querySelector(`.menu-mobile-magic nav ul li a[href*='${idSection}']`);

                if(headerLink) headerLink.classList.add('ativo');
                if(mobileLink) mobileLink.classList.add('ativo');
            });
        };
    })
})



//voltar ao home ao recarregar a pagina//

window.onload = function() {
    window.scrollTo(0, 0);
}

//FUNÇÃO TROCAR PAGINA DA SECTION HABILIDADES

function trocarHabilidades() {
    let tituloHabilidades = document.getElementById('titulo-habilidades');
    let switchHaabilidadesBtn1 = document.getElementById('switch-habilidades-btn1');
    let switchHaabilidadesBtn2 = document.getElementById('switch-habilidades-btn2');
    let switchHaabilidadesBtn3 = document.getElementById('switch-habilidades-btn3');
    let switchHaabilidadesBtn4 = document.getElementById('switch-habilidades-btn4');
    let tecnologias1 = document.getElementById('tecnologias1');
    let tecnologias2 = document.getElementById('tecnologias2');
    let tecnologias3 = document.getElementById('tecnologias3');
    let tecnologias4 = document.getElementById('tecnologias4');

    if(!switchHaabilidadesBtn1 || !switchHaabilidadesBtn2 || !switchHaabilidadesBtn3 || !switchHaabilidadesBtn4) return;

    switchHaabilidadesBtn1.addEventListener('click', () => {
            tituloHabilidades.classList.remove('hide');
            tecnologias2.classList.add('hide');
            tecnologias3.classList.add('hide');
            tecnologias4.classList.add('hide');
            tecnologias1.classList.remove('hide');
            switchHaabilidadesBtn2.classList.remove('ativo');
            switchHaabilidadesBtn3.classList.remove('ativo');
            switchHaabilidadesBtn4.classList.remove('ativo');
            switchHaabilidadesBtn1.classList.add('ativo');
    });

    switchHaabilidadesBtn2.addEventListener('click', () => {
            tituloHabilidades.classList.add('hide');
            tecnologias1.classList.add('hide');
            tecnologias3.classList.add('hide');
            tecnologias4.classList.add('hide');
            tecnologias2.classList.remove('hide');
            switchHaabilidadesBtn1.classList.remove('ativo');
            switchHaabilidadesBtn3.classList.remove('ativo');
            switchHaabilidadesBtn4.classList.remove('ativo');
            switchHaabilidadesBtn2.classList.add('ativo');
    });

    switchHaabilidadesBtn3.addEventListener('click', () => {
            tituloHabilidades.classList.add('hide');
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
            tituloHabilidades.classList.add('hide');
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

    if(!switchBtn1 || !switchBtn2 || !switchBtn3) return;

    switchBtn1.addEventListener('click', () => {
            projetos2.classList.add('hide');
            projetos3.classList.add('hide');
            projetos1.classList.remove('hide');
            switchBtn1.classList.add('ativo');
            switchBtn2.classList.remove('ativo');
            switchBtn3.classList.remove('ativo');
    });

    switchBtn2.addEventListener('click', () => {
            projetos1.classList.add('hide');
            projetos3.classList.add('hide');
            projetos2.classList.remove('hide');
            switchBtn2.classList.add('ativo');
            switchBtn1.classList.remove('ativo');
            switchBtn3.classList.remove('ativo');
    });

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


//FUNÇÃO PARA MUDAR AS IMAGENS DOS PROJETOS

function trocaFotoProjetos(baseId, totalProjetos) {
    const projetos = [];

    for (let i = 1; i <= totalProjetos; i++) {
        const projeto = {
            img1: document.getElementById(`${baseId}${i}-img1`),
            img2: document.getElementById(`${baseId}${i}-img2`),
            img3: document.getElementById(`${baseId}${i}-img3`),
            btn1: document.getElementById(`${baseId}${i}-btn1`),
            btn2: document.getElementById(`${baseId}${i}-btn2`),
            btn3: document.getElementById(`${baseId}${i}-btn3`),
            cont: 1,
            intervalo: null
        };

        // se o projeto não existir na página, pula
        if (!projeto.img1 || !projeto.btn1) {
            continue;
        }

        projeto.iniciarIntervalo = function() {
            projeto.intervalo = setInterval(() => {
                projeto.cont = projeto.cont % 3 + 1;
                projeto.trocaImagem(projeto.cont);
            }, 6000);
        };

        projeto.reiniciarIntervalo = function() {
            clearInterval(projeto.intervalo);
            projeto.iniciarIntervalo();
        };

        if (projeto.btn1) {
            projeto.btn1.addEventListener('click', () => {
                projeto.trocaImagem(1);
                projeto.reiniciarIntervalo();
            });
        }

        if (projeto.btn2) {
            projeto.btn2.addEventListener('click', () => {
                projeto.trocaImagem(2);
                projeto.reiniciarIntervalo();
            });
        }

        if (projeto.btn3) {
            projeto.btn3.addEventListener('click', () => {
                projeto.trocaImagem(3);
                projeto.reiniciarIntervalo();
            });
        }

        projeto.trocaImagem = function(numero) {
            if (projeto.img1) projeto.img1.classList.add('hide');
            if (projeto.img2) projeto.img2.classList.add('hide');
            if (projeto.img3) projeto.img3.classList.add('hide');
            if (projeto.btn1) projeto.btn1.classList.remove('ativo');
            if (projeto.btn2) projeto.btn2.classList.remove('ativo');
            if (projeto.btn3) projeto.btn3.classList.remove('ativo');

            if (numero === 1) {
                if (projeto.img1) projeto.img1.classList.remove('hide');
                if (projeto.btn1) projeto.btn1.classList.add('ativo');
            } else if (numero === 2) {
                if (projeto.img2) projeto.img2.classList.remove('hide');
                if (projeto.btn2) projeto.btn2.classList.add('ativo');
            } else if (numero === 3) {
                if (projeto.img3) projeto.img3.classList.remove('hide');
                if (projeto.btn3) projeto.btn3.classList.add('ativo');
            }

            projeto.cont = numero;
        };

        projetos.push(projeto);
    }

    return projetos;
}

document.addEventListener("DOMContentLoaded", function() {
    const projetos = trocaFotoProjetos('projeto', 6);
    projetos.forEach(projeto => {
        projeto.iniciarIntervalo();
    });
});

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
    let switchFaqBtn1 = document.getElementById('switch-faq-btn1');
    let switchFaqBtn2 = document.getElementById('switch-faq-btn2');

    if(!switchFaqBtn1 || !switchFaqBtn2 || !faq1 || !faq2) return;

    switchFaqBtn1.addEventListener('click', () =>{
        faq2.classList.add('hide');
        faq1.classList.remove('hide');

        switchFaqBtn2.classList.remove('ativo');
        switchFaqBtn1.classList.add('ativo');
    });

    switchFaqBtn2.addEventListener('click', () =>{
        faq1.classList.add('hide');
        faq2.classList.remove('hide');

        switchFaqBtn1.classList.remove('ativo');
        switchFaqBtn2.classList.add('ativo');
    });
}

trocarFaq()

//BOTÃO SINCERÃO MOVENDO

function move(){

    let naoGostei = document.getElementById('nao-gostei')
    if(!naoGostei) return;

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
    let tituloLike = document.getElementById('like-title');
    let tituloAvaliar = document.getElementById('rate-title');
    let obrigadoContainer = document.getElementById('obrigado-container');
    let obrigadoConteudo= document.getElementById('obrigado-conteudo');
    let fecharObrigado = document.getElementById('fechar-obrigado');
    let rate = document.getElementById('rate');

    if(!btnGostei || !btnNaoGostei || !tituloLike || !tituloAvaliar || !obrigadoContainer || !obrigadoConteudo || !fecharObrigado || !rate) return;

    let nota1 = "<p>Poxa 😥 Ficou tão ruim assim? <br/>Então me chama em uma das minhas redes sociais e diga o que não gostou, para que eu possa aprimorar nas próximas atualizações<br/> <span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota2 = "<p>2? É sério isso? Bom.. pelo menos 2 é melhor que 1 <br/>Não esqueça de me dar um feedback dos pontos negativos, assim eu consigo me aperfeiçoar cada vez mais <br/><span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota3 = "<p>Deve ter algo muito errado mesmo, poderia ter arredondado pra 5, né? <br/>Então diz aí, o que tem de tão errado que te fez dar uma nota tão especifica assim? <br/><span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota4 = "<p>Essa nota é o pavor da minha adolescência<br/> “Sem video-game pro resto do mês” <br/> Obrigado mesmo viu! <br><span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota5 = "<p>Bom… se fosse numa escola pública dava pra passar de ano <br/>Mesmo assim, ainda tem muita coisa pra melhorar <br/>Me ajuda ai… me conta o que vc não gostou<br> <span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota6 = "<p>Não tá ruim, mas também não tá bom<br> 6 é uma nota que não diz muita coisa <br> Então clica em um dos meus contatos e deixe um comentário com sugestões de melhorias <br> <span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota7 = "<p>Aí sim… dá até pra passar de ano em colégio particular com essa nota<br> Não é aquela coisa que se diga “nossa, mas que notão”, mas pelo menos não passo tanta vergonha<br> <span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota8 = "<p>Então quer dizer que você gostou?<br> Que ótimo! <br>Então me chama em alguma das minhas redes sociais e vamos conversar<br> <span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota9 = "<p>Opa, que notona boa! <br>Que bom que gostou, mas me diz uma coisa… pq 9 e não 10? <br>Me conta o que ficou faltando pra gabaritar a prova?<br><span> Valeu pela sua opinião Sincerona!</span></p>"
    let nota10 = "<p>AEEEEEEEEWWWWWWEEEEWWEWEW <br> É sempre bom ganhar uma nota 10!!! <br>Muito obrigado e fico muito feliz que tenha gostado<br> Clica ai nas minhas redes sociais pra eu te agradecer pessoalmete...Ou quase!<br><span> Valeu pela sua opinião Sincerona!</span></p>"

    let rate1 = document.getElementById('nota1');
    let rate2 = document.getElementById('nota2');
    let rate3 = document.getElementById('nota3');
    let rate4 = document.getElementById('nota4');
    let rate5 = document.getElementById('nota5');
    let rate6 = document.getElementById('nota6');
    let rate7 = document.getElementById('nota7');
    let rate8 = document.getElementById('nota8');
    let rate9 = document.getElementById('nota9');
    let rate10 = document.getElementById('nota10');
    let returnBack = document.getElementById('return-back');

    let counter = 0;

    btnGostei.addEventListener('click', () => {
        if (counter === 0) {
            tituloLike.classList.add('hide');
            btnGostei.classList.add('hide');
            btnNaoGostei.classList.add('hide');
            rate.classList.remove('hide');
            counter = 1;
        }
    });

    function mostrarNota(html) {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = html;
            if (returnBack) returnBack.classList.remove('hide');
            counter = 2;
        }
    }

    if(rate1) rate1.addEventListener('click', () => mostrarNota(nota1));
    if(rate2) rate2.addEventListener('click', () => mostrarNota(nota2));
    if(rate3) rate3.addEventListener('click', () => mostrarNota(nota3));
    if(rate4) rate4.addEventListener('click', () => mostrarNota(nota4));
    if(rate5) rate5.addEventListener('click', () => mostrarNota(nota5));
    if(rate6) rate6.addEventListener('click', () => mostrarNota(nota6));
    if(rate7) rate7.addEventListener('click', () => mostrarNota(nota7));
    if(rate8) rate8.addEventListener('click', () => mostrarNota(nota8));
    if(rate9) rate9.addEventListener('click', () => mostrarNota(nota9));
    if(rate10) rate10.addEventListener('click', () => mostrarNota(nota10));

    fecharObrigado.addEventListener('click', () => {
        if (counter === 2) {
            obrigadoContainer.classList.add('hide');
            tituloAvaliar.classList.add('hide');
            if (returnBack) returnBack.classList.add('hide');
            rate.classList.remove('hide');
            counter = 1;
        }
    });

    if(returnBack){
        returnBack.addEventListener('click', () => {
            if (counter === 2) {
                returnBack.classList.add('hide');
                obrigadoContainer.classList.add('hide');
                tituloAvaliar.classList.add('hide');
                rate.classList.remove('hide');
                counter = 1;
            }
        });
    }
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

//MODAL SAIDA DO SITE (mantido comentado)

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