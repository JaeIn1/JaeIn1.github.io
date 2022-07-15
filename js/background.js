const images = ["img1.jpg", "img2.jpg", "img3.png", "img4.webp"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `img/${chosenImage}`;
document.body.appendChild(bgimage);
