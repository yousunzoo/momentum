// createElement, appendChild

const images = [
  "image01.jpg", "image02.jpg", "image03.jpg","image04.jpg", "image05.jpg"
];

chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage)