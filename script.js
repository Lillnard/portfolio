
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

})


const visualizar = new IntersectionObserver((avistado)=>{
    avistado.forEach((visto)=>{
        if(visto.isIntersecting){
            visto.target.classList.add('show')
        } else{
            visto.target.classList.remove('show')
        }
    })
})

const section = document.querySelectorAll('.hidden')

section.forEach((elemento)=> visualizar.observe(elemento))

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


window.onload = function() {
    window.scrollTo(0, 0);
}
