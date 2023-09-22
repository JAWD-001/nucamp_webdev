console.log("javascript connected!");

const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 3000,
  pause: false,
});


const carouselButton = document.querySelector("#carouselButton");
const faIcon = document.querySelector("#faButton");


carouselButton.addEventListener("click", function () {
  if (faIcon.classList.contains('fa-pause')){
    faIcon.classList.remove('fa-pause');
    faIcon.classList.add('fa-play');
    carousel.pause();
  } else {
    faIcon.classList.remove('fa-play');
    faIcon.classList.add('fa-pause');
    carousel.cycle();
  }
});


const carouselPause = document.querySelector('#carouselPause');
carouselPause.addEventListener('click', function () {
  console.log('pausing carousel');
  carousel.pause();
})

const carouselPlay = document.querySelector('#carouselPlay');
carouselPlay.addEventListener('click', function() {
  console.log('playing carousel');
  carousel.cycle();
}
)

