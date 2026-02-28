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

/* imagens topo (dark/light) */
let imgDarkTopo = document.getElementById('imgDarkTopo');
let imgLightTopo = document.getElementById('imgLightTopo');

/* ícones/texto do tema */
let themeIconDesktop = document.getElementById('themeIconDesktop');
let themeIconMobile = document.getElementById('themeIconMobile');
let themeTextMobile = document.getElementById('themeTextMobile');

/* elementos do hambúrguer */
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

/*Dark Mode: desktop e no mobile */
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

/* atualiza UI do tema (ícones/texto/foto)*/
function atualizarUITheme() {
    // Lembrete: body.dark = TEMA CLARO
    const estaNoModoClaro = body.classList.contains('dark');

    // - Se estiver no modo claro => ícone LUA e no mobile "Modo Dark"
    // - Se estiver no modo escuro => ícone SOL e no mobile "Modo Light"
    if (themeIconDesktop) {
        themeIconDesktop.classList.remove('fa-sun', 'fa-moon');
        themeIconDesktop.classList.add(estaNoModoClaro ? 'fa-moon' : 'fa-sun');
    }

    if (themeIconMobile) {
        themeIconMobile.classList.remove('fa-sun', 'fa-moon');
        themeIconMobile.classList.add(estaNoModoClaro ? 'fa-moon' : 'fa-sun');
    }

    if (themeTextMobile) {
        themeTextMobile.textContent = estaNoModoClaro ? 'Modo Dark' : 'Modo Light';
    }

    // Troca da foto do topo
    if (imgDarkTopo && imgLightTopo) {
        if (estaNoModoClaro) {
            imgDarkTopo.classList.add('hide');
            imgLightTopo.classList.remove('hide');
        } else {
            imgLightTopo.classList.add('hide');
            imgDarkTopo.classList.remove('hide');
        }
    }
}

function toggleDarkMode() {

    //deixa os dois botões (desktop e mobile) “sincronizados”
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

    //aplica ícone/texto/foto do tema sempre que alternar
    atualizarUITheme();
}

/*aplica ao carregar a página */
document.addEventListener("DOMContentLoaded", () => {
    atualizarUITheme();
});


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