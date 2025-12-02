const introPresentation = document.querySelector(".presentation");
const carousel = document.querySelector(".carousel");
let carouselContainer = carousel.getBoundingClientRect();
let presentationContainer = introPresentation.getBoundingClientRect();

let active = false;
let startX = 0;

const images = [
  "./img/carousel/data-management.jpeg",
  "./img/carousel/app-development.jpeg",
  "./img/carousel/cloud-data.jpeg",
  "./img/carousel/cybersecurity.jpeg",
  "./img/carousel/datascience-e-IA.jpeg",
  "./img/carousel/QA-solutions.jpeg",];

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup"
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend"
  }
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch {
    deviceType = "mouse";
    return false;
  }
};

//generates slides
const carouselGenerator = () => {
  for (let i of images) {
    const div = document.createElement("div");
    div.classList.add("slide");
    div.innerHTML = `<img src='${i}' class='image'>`;
    carousel.appendChild(div);
  }
  carousel.style.gridTemplateColumns = `repeat(${images.length},1fr)`;
};

isTouchDevice();


//Mousedown
introPresentation.addEventListener(events[deviceType].down, (e) => {
  active = true;
  startX =
    (!isTouchDevice()
      ? e.clientX
      : e.touches[0].clientX - presentationContainer.left) - carousel.offsetLeft;
  introPresentation.style.cursor = "grabbing";
});

//Mouseup
introPresentation.addEventListener(events[deviceType].up, () => {
  active = false;
  introPresentation.style.cursor = "grab";
});

//Mousemove
introPresentation.addEventListener(events[deviceType].move, (e) => {
  if (active) {
    e.preventDefault();
    let currentX = (!isTouchDevice()
      ? e.clientX
      : e.touches[0].clientX - presentationContainer.left);
    carousel.style.left = `${currentX - startX}px`;
    checkBoundaries();
  }
});

const checkBoundaries = () => {
  carouselContainer = carousel.getBoundingClientRect();
  presentationContainer = introPresentation.getBoundingClientRect();
  if (parseInt(carousel.style.left) >= 0) {
    carousel.style.left = "0px";
  } else if (carouselContainer.right < presentationContainer.right) {
    carousel.style.left = `-${carouselContainer.width - presentationContainer.width}px`;
  }
};

window.onload = () => {
  carouselGenerator();
};


/***********SEGUNDA OPCION ********/

/*const introPresentation = document.querySelector(".presentation");
const carousel = document.querySelector(".carousel");
let carouselContainer = carousel.getBoundingClientRect();
let presentationContainer = introPresentation.getBoundingClientRect();

let active = false;
let startX = 0;

const images = [
  "./img/carousel/data-management.jpeg",
  "./img/carousel/app-development.jpeg",
  "./img/carousel/cloud-data.jpeg",
  "./img/carousel/cybersecurity.jpeg",
  "./img/carousel/datascience-e-IA.jpeg",
  "./img/carousel/QA-solutions.jpeg",];

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup"
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend"
  }
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch {
    deviceType = "mouse";
    return false;
  }
};

//generates slides
const carouselGenerator = () => {
  for (let i of images) {
    const div = document.createElement("div");
    div.classList.add("slide");
    div.innerHTML = `<img src='${i}' class='image'>`;
    carousel.appendChild(div);
  }
  carousel.style.gridTemplateColumns = `repeat(${images.length},1fr)`;
};

isTouchDevice();


//Mousedown
introPresentation.addEventListener(events[deviceType].down, (e) => {
  active = true;
  startX =
    (!isTouchDevice()
      ? e.clientX
      : e.touches[0].clientX - presentationContainer.left) - carousel.offsetLeft;
  introPresentation.style.cursor = "grabbing";
});

//Mouseup
introPresentation.addEventListener(events[deviceType].up, () => {
  active = false;
  introPresentation.style.cursor = "grab";
});

//Mousemove
introPresentation.addEventListener(events[deviceType].move, (e) => {
  if (active) {
    e.preventDefault();
    let currentX = (!isTouchDevice()
      ? e.clientX
      : e.touches[0].clientX - presentationContainer.left);
    carousel.style.left = `${currentX - startX}px`;
    checkBoundaries();
  }
});

const checkBoundaries = () => {
  carouselContainer = carousel.getBoundingClientRect();
  presentationContainer = introPresentation.getBoundingClientRect();
  if (parseInt(carousel.style.left) >= 0) {
    carousel.style.left = "0px";
  } else if (carouselContainer.right < presentationContainer.right) {
    carousel.style.left = `-${carouselContainer.width - presentationContainer.width}px`;
  }
};

window.onload = () => {
  carouselGenerator();
};*/