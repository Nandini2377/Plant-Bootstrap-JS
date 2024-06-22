const natureItems = document.querySelectorAll(".nature-item");
const paraMainSm = document.querySelector(".slider-slide-sm");
let currentIndex = 0;

function classListSLider() {
  natureItems.forEach((ele, i) => {
    paraMainSm.children[i].classList.remove("silder-active");
  });
  paraMainSm.children[currentIndex].classList.add("silder-active");
}

function showSlide(index) {
  natureItems.forEach((item) => {
    item.style.display = "none";
  });
  natureItems[index].style.display = "block";
  classListSLider();
}

function nNextSlide() {
  currentIndex = (currentIndex + 1) % natureItems.length;
  showSlide(currentIndex);
}

function nPreviousSlide() {
  currentIndex = (currentIndex - 1 + natureItems.length) % natureItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
document.getElementById("n-nextBtn").addEventListener("click", nNextSlide);
document.getElementById("n-prevBtn").addEventListener("click", nPreviousSlide);

setInterval(() => {
  nNextSlide();
}, 2000);
