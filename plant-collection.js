const prevCollection = document.getElementById("prev-plant-collection");
const nextCollection = document.getElementById("next-plant-collection");
const getImgList = document.getElementsByClassName("img-list");
const arrayPlants = [
  "./images/plant-collection/paradise.png",
  "images/plant-collection/pearls.png",
  "images/plant-collection/rubber.png",
];
let carouselLength = arrayPlants.length;

function createCarouselItem(item) {
  const carouselItem = document.createElement("img");
  carouselItem.setAttribute("src", item);
  carouselItem.classList.add("plant-collection-img");
  getImgList[0].appendChild(carouselItem);
}

function transition() {
  let initialOpacity = 0,
    currTime = 0;
  getImgList[0].style.opacity = 0;
  const interval = setInterval(() => {
    initialOpacity += 0.05;
    getImgList[0].style.opacity = initialOpacity;
    currTime += 25;
    if (currTime === 500) {
      clearInterval(interval);
      initialOpacity = 0;
      currTime = 0;
    }
  }, 25);
}

function nextSlide() {
  let link = arrayPlants.pop();
  arrayPlants.unshift(link);
  getImgList[0].innerHTML = "";
  arrayPlants.forEach((item) => createCarouselItem(item));
  transition(true);
}

arrayPlants.forEach((item) => createCarouselItem(item));

prevCollection.addEventListener("click", () => {
  let link = arrayPlants.shift();
  arrayPlants.push(link);
  getImgList[0].innerHTML = "";
  arrayPlants.forEach((item) => createCarouselItem(item));
  transition(false);
});

nextCollection.addEventListener("click", nextSlide);
