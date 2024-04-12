const avanca = document.getElementById('avanca');
const volta = document.getElementById('volta');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
let cont2 = 1;

function avancaFoto() {

    avanca.addEventListener('click', () => {
        if (cont2 === 1) {
            img5.classList.remove('hide');
            img4.classList.add('hide');
            img6.classList.add('hide');
            btn4.classList.remove('ativo');
            btn5.classList.add('ativo');
            btn6.classList.remove('ativo');
            cont2 = 2;
        } else if (cont2 === 2) {
            img6.classList.remove('hide');
            img4.classList.add('hide');
            img5.classList.add('hide');
            btn4.classList.remove('ativo');
            btn5.classList.remove('ativo');
            btn6.classList.add('ativo');
            cont2 = 3;
        } else if (cont2 === 3) {
            img4.classList.remove('hide');
            img5.classList.add('hide');
            img6.classList.add('hide');
            btn4.classList.add('ativo');
            btn5.classList.remove('ativo');
            btn6.classList.remove('ativo');
            cont2 = 1;
        }
    });
}
avancaFoto();



function voltaFoto() {

    volta.addEventListener('click', () => {
        if (cont2 === 1) {
            img5.classList.add('hide');
            img4.classList.add('hide');
            img6.classList.remove('hide');
            btn1.classList.remove('ativo');
            btn2.classList.remove('ativo');
            btn3.classList.add('ativo');
            cont2 = 3;
        } else if (cont2 === 3) {
            img6.classList.add('hide');
            img4.classList.add('hide');
            img5.classList.remove('hide');
            btn4.classList.remove('ativo');
            btn5.classList.add('ativo');
            btn6.classList.remove('ativo');
            cont2 = 2;
        } else if (cont2 === 2) {
            img4.classList.remove('hide');
            img5.classList.add('hide');
            img6.classList.add('hide');
            btn4.classList.add('ativo');
            btn5.classList.remove('ativo');
            btn6.classList.remove('ativo');
            cont2 = 1;
        }
    });
}
voltaFoto();



function trocaFotoBullet() {
    btn4.addEventListener('click', () => {
        img4.classList.remove('hide');
        img5.classList.add('hide');
        img6.classList.add('hide');
        btn4.classList.add('ativo');
        btn5.classList.remove('ativo');
        btn6.classList.remove('ativo');
        cont2 = 1;
    });
    
    btn5.addEventListener('click', () => {
        img4.classList.add('hide');
        img5.classList.remove('hide');
        img6.classList.add('hide');
        btn4.classList.remove('ativo');
        btn5.classList.add('ativo');
        btn6.classList.remove('ativo');
        cont2 = 2;
    });
    
    btn6.addEventListener('click', () => {
        img4.classList.add('hide');
        img5.classList.add('hide');
        img6.classList.remove('hide');
        btn4.classList.remove('ativo');
        btn5.classList.remove('ativo');
        btn6.classList.add('ativo');
        cont2 = 3;
    });
}
trocaFotoBullet();