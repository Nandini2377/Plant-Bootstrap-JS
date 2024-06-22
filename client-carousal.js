let currentItem = 0;

function updateCarousel(currentItem) {
  const getClients = document.querySelectorAll(".client");
  getClients.forEach((ele) => {
    ele.style.translate = `${90 * (+ele.dataset.id - currentItem)}%`;
    ele.children[0].children[1].classList.remove("client-active");
  });
  getClients[currentItem].children[0].children[1].classList.add(
    "client-active"
  );
}

(function () {
  updateCarousel(currentItem);
})();

function next() {
  currentItem = (currentItem + 1) % 3;

  updateCarousel(currentItem);
}

setInterval(() => {
  next();
}, 2000);
