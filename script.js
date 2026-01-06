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