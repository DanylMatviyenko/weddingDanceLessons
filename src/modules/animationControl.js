const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const animatedEl = document.querySelectorAll('.animate__animated');
const sectionIntros = document.querySelectorAll('.section-intro');

function dropAnimation(animated) {
    animated.classList.add('drop-animation');
    animated.classList.remove('wow');
}
function animateSectionIntro(sectionIntro) {
    sectionIntro.children[0].classList.add("wow", "animate__animated", "animate__fadeInDown");
    sectionIntro.children[1].classList.add('wow', 'animate__animated', 'animate__fadeInUp');

    sectionIntro.children[0].dataset.wowDuration = '1s';
    sectionIntro.children[0].dataset.wowDelay = '.4s';

    sectionIntro.children[1].dataset.wowDuration = '.4s';
    sectionIntro.children[1].dataset.wowDelay = '1s';

    sectionIntro.children[0].dataset.wowOffset = '100';
    sectionIntro.children[0].dataset.wowOffset = '100';
}
if(vw <= 992) {
    for(let elem of animatedEl) {
        dropAnimation(elem);
    }
}else {
    for(let sectionIntro of sectionIntros) {
        animateSectionIntro(sectionIntro);
    }
}

