const imgSlider = document.getElementsByClassName("img--slider");
const thumbnailSlider = document.getElementsByClassName("thumbnail--slider");
const imgSliderComplete = document.getElementsByClassName(
  "img--slider-complete"
);
const thumbnailSliderComplete = document.getElementsByClassName(
  "thumbnail--slider-complete"
);
const containerComplete = document.getElementById("container__complete");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const rightComplete = document.getElementById("rightComplete");
const leftComplete = document.getElementById("leftComplete");
let index = 0;
let indexComplete = 0;

rightArrow.addEventListener("click", () => showSlides(1, null));
leftArrow.addEventListener("click", () => showSlides(-1, null));
rightComplete.addEventListener("click", () => showSlidesComplete(1, null));
leftComplete.addEventListener("click", () => showSlidesComplete(-1, null));

const showSlides = (numero = 0, select = 0) => {
  index += numero;
  for (let i = 0; i < imgSlider.length; i++) {
    imgSlider[i].style.display = "none";
  }

  if (index >= imgSlider.length) index = 0;
  else if (index < 0) index = imgSlider.length - 1;

  if (select !== null) {
    imgSlider[select].style.display = "block";
    index = select;
  } else imgSlider[index].style.display = "block";
};

for (let i = 0; i < thumbnailSlider.length; i++) {
  thumbnailSlider[i].addEventListener("click", () => showSlides(null, i));
}

const showSlidesComplete = (numero = 0, select = 0) => {
  indexComplete += numero;
  for (let i = 0; i < imgSliderComplete.length; i++) {
    imgSliderComplete[i].style.display = "none";
  }

  if (indexComplete >= imgSliderComplete.length) indexComplete = 0;
  else if (indexComplete < 0) indexComplete = imgSlider.length - 1;

  if (select !== null) {
    imgSliderComplete[select].style.display = "block";
    indexComplete = select;
  } else imgSliderComplete[indexComplete].style.display = "block";
};

for (let i = 0; i < thumbnailSliderComplete.length; i++) {
  thumbnailSliderComplete[i].addEventListener("click", () =>
    showSlidesComplete(null, i)
  );
}

const openCompletePhoto = () => {
  for (let i = 0; i < imgSlider.length; i++) {
    imgSlider[i].addEventListener("click", () => {
      overlay.classList.add("overlay");
      containerComplete.classList.add("container__product--slider-complete");
      containerComplete.classList.remove("show-complete");
      body.classList.add("body");
      showSlidesComplete(null, i);
      closeCompletePhoto();
    });
  }
};

const closeCompletePhoto = () => {
  overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay");
    containerComplete.classList.remove("container__product--slider-complete");
    containerComplete.classList.add("show-complete");
    body.classList.remove("body");
  });
};

export { showSlides, openCompletePhoto };
