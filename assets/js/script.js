function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
};

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 10000)

function nextImage() {
  count++;
  if(count>2){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;

};

const media = document.querySelector('.watch-media');
const thumb = document.getElementById('thumb');
const video = document.getElementById('video');

thumb.addEventListener('click', () => {
  media.classList.add('playing');

  if (!video.src.includes('autoplay')) {
    video.src += '?autoplay=1';
  }
});

let swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll('.side-menu-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Fecha o menu após clicar
    document.getElementById('sideMenu').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
  });
});
