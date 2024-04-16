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
let projetoButtons= document.querySelectorAll('.projeto-buttons');
let curriculo = document.querySelector('.cv');
let sinceraoBtn = document.querySelector('.sincerao-btn');
let obrigadoContainerDark = document.querySelector('.obrigado-container');
let obrigadoDark = document.querySelector('.obrigado');
let resetBtn = document.querySelector('.reset');
let footer = document.querySelector('footer');
let mobileMagic = document.querySelector('.menu-mobile-magic');

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
    curriculo.classList.toggle('dark');
    sinceraoBtn.classList.toggle('dark');
    obrigadoContainerDark.classList.toggle('dark');
    obrigadoDark.classList.toggle('dark');
    resetBtn.classList.toggle('dark');
    footer.classList.toggle('dark');
    mobileMagic.classList.toggle('dark');
    
    nomeTecnologia.forEach(nome => {
        nome.classList.toggle('dark');
    });
    
    projetoButtons.forEach(button => {
        button.classList.toggle('dark');
    });

    document.querySelectorAll('section p').forEach(p => {
        p.classList.toggle('dark');
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
                document.querySelector(`.menu-mobile-magic nav ul li a[href*='${idSection}']`).classList.add('ativo');
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

        projeto.btn1.addEventListener('click', () => {
            projeto.trocaImagem(1);
            projeto.reiniciarIntervalo();
        });

        projeto.btn2.addEventListener('click', () => {
            projeto.trocaImagem(2);
            projeto.reiniciarIntervalo();
        });

        projeto.btn3.addEventListener('click', () => {
            projeto.trocaImagem(3);
            projeto.reiniciarIntervalo();
        });

        projeto.trocaImagem = function(numero) {
            projeto.img1.classList.add('hide');
            projeto.img2.classList.add('hide');
            projeto.img3.classList.add('hide');
            projeto.btn1.classList.remove('ativo');
            projeto.btn2.classList.remove('ativo');
            projeto.btn3.classList.remove('ativo');

            if (numero === 1) {
                projeto.img1.classList.remove('hide');
                projeto.btn1.classList.add('ativo');
            } else if (numero === 2) {
                projeto.img2.classList.remove('hide');
                projeto.btn2.classList.add('ativo');
            } else if (numero === 3) {
                projeto.img3.classList.remove('hide');
                projeto.btn3.classList.add('ativo');
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
    //let faq3 = document.getElementById('faq3');
    let switchFaqBtn1 = document.getElementById('switch-faq-btn1');
    let switchFaqBtn2 = document.getElementById('switch-faq-btn2');
    //let switchFaqBtn3 = document.getElementById('switch-faq-btn3');

    switchFaqBtn1.addEventListener('click', () =>{
        faq2.classList.add('hide');
        //faq3.classList.add('hide');
        faq1.classList.remove('hide');
        
        switchFaqBtn2.classList.remove('ativo');
        //switchFaqBtn3.classList.remove('ativo');
        switchFaqBtn1.classList.add('ativo');
    });

    switchFaqBtn2.addEventListener('click', () =>{
        faq1.classList.add('hide');
        //faq3.classList.add('hide');
        faq2.classList.remove('hide');

        switchFaqBtn1.classList.remove('ativo');
        //switchFaqBtn3.classList.remove('ativo');
        switchFaqBtn2.classList.add('ativo');
    });

    //switchFaqBtn3.addEventListener('click', () =>{
    //    faq2.classList.add('hide');
    //    faq1.classList.add('hide');
    //    faq3.classList.remove('hide');

    //   switchFaqBtn2.classList.remove('ativo');
    //    switchFaqBtn1.classList.remove('ativo');
    //    switchFaqBtn3.classList.add('ativo');
    //});
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
    let tituloLike = document.getElementById('like-title');
    let tituloAvaliar = document.getElementById('rate-title');
    let obrigadoContainer = document.getElementById('obrigado-container');
    let obrigadoConteudo= document.getElementById('obrigado-conteudo');
    let fecharObrigado = document.getElementById('fechar-obrigado');
    let rate = document.getElementById('rate');
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

    //CLICAR NO BOTÃO E ABIR AVALIAÇÃO COM NOTAS
    btnGostei.addEventListener('click', () => {
        if (counter === 0) {
            tituloLike.classList.add('hide');
            btnGostei.classList.add('hide');
            btnNaoGostei.classList.add('hide');
            rate.classList.remove('hide');
            counter = 1;
        }
    });

    rate1.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota1
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate2.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota2
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate3.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota3
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate4.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota4
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate5.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota5
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate6.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota6
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate7.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota7
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate8.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota8
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate9.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota9
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });

    rate10.addEventListener('click', () => {
        if (counter === 1) {
            rate.classList.add('hide');
            obrigadoContainer.classList.remove('hide');
            obrigadoConteudo.innerHTML = nota10
            returnBack.classList.remove('hide')
            counter = 2;
        }
    });
    
    fecharObrigado.addEventListener('click', () => {
        if (counter === 2) {
            obrigadoContainer.classList.add('hide');
            tituloAvaliar.classList.add('hide');
            returnBack.classList.add('hide')
            rate.classList.remove('hide');
            counter = 1;
        }
    });

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
 