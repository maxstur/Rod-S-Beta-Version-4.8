var tm = new Tm (".myTm",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlide: true,
    slidePerView: "auto",
    coverFlowEffect: {
        rotate:15,
        stech:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop:true,
});

const waCont = document.querySelector('.wa-cont');
const waBottom = document.querySelector('.wa-bottom');

function ajustarVisibilidadElemento() {

    const scrollY = window.scrollY || window.pageYOffseet;

    const posicionInicio = 850;
    const posicionFin = 1850;

    if (scrollY >= posicionInicio && scrollY <= posicionFin) {
        waCont.style.display = 'block';
    } else {
        waCont.style.display = 'none';
    }
}
window.addEventListener('scroll', ajustarVisibilidadElemento);
ajustarVisibilidadElemento();

