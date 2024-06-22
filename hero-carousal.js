const nextBtn = document.getElementById("hero-next");
const prevBtn = document.getElementById("hero-prev");
const currentHeroImg = document.getElementsByClassName("current-hero-img");
const nextHeroImg = document.getElementsByClassName("next-hero-img");
const paraMain = document.querySelector(".slider-slide");
const sliderArray = [
  "./images/hero-section/pot.png",
  "images/hero-section/nature-road.jpeg",
  "images/hero-section/nature-tree.jpeg",
  "images/hero-section/nature-rocks.jpeg",
];

let counter = 0;
let prev = document.querySelector(".slider-slide").children[0];
prev.style.backgroundColor = "#09270d";

function reviewTranslate(totalTime, nextHero) {
  let initialTranslation = 90;
  let currentTime = 0;
  let curent = setInterval(() => {
    initialTranslation -= 1.4;
    nextHero.style.translate = `${initialTranslation}%`;
    currentTime += 5;
    if (currentTime === totalTime || initialTranslation <= 0 || !nextHero) {
      clearInterval(curent);
    }
  }, 5);
}

function nextSlide() {
  counter = (counter + 3) % 4;
  prev.style.backgroundColor = "transparent";
  document.querySelector(".slider-slide").children[
    counter
  ].style.backgroundColor = "#09270d";
  prev = document.querySelector(".slider-slide").children[counter];
  let linkOne = sliderArray.shift();
  sliderArray.push(linkOne);
  currentHeroImg[0].setAttribute("src", sliderArray[0]);
  nextHeroImg[0].setAttribute("src", sliderArray[1]);
  reviewTranslate(500, currentHeroImg[0]);
}

function prevSlide() {
  counter = (counter + 1) % 4;
  prev.style.backgroundColor = "transparent";
  document.querySelector(".slider-slide").children[
    counter
  ].style.backgroundColor = "#09270d";
  prev = document.querySelector(".slider-slide").children[counter];
  document
    .querySelector(".slider-slide")
    .children[counter].classList.add("slider-active");
  let linkOne = sliderArray.pop();
  sliderArray.unshift(linkOne);
  currentHeroImg[0].setAttribute("src", sliderArray[0]);
  nextHeroImg[0].setAttribute("src", sliderArray[1]);
  reviewTranslate(500, currentHeroImg[0]);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
