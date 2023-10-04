import "./styles.css";

let canvas = document.getElementById("myCanvas");

//categories
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");
let btn5 = document.getElementById("button5");

canvas.width = 400;
canvas.height = 250;

let ctx = canvas.getContext("2d");

// PAPER
let img0 = new Image();
img0.src = "texture.jpeg";

// SUN

let s = 0;
let img1 = new Image();
img1.src = "Sun/Sun1.png";
let img2 = new Image();
img2.src = "Sun/Sun2.png";
let img3 = new Image();
img3.src = "Sun/Sun3.png";
let img4 = new Image();
img4.src = "Sun/Sun4.png";
let img5 = new Image();
img5.src = "Sun/Sun5.png";

img1.crossOrigin = "anonymous";
img2.crossOrigin = "anonymous";
img3.crossOrigin = "anonymous";
img4.crossOrigin = "anonymous";
img5.crossOrigin = "anonymous";

// CLOUDS
let c = 0;
let img6 = new Image();
img6.src = "Clouds/Cloud1.png";
let img7 = new Image();
img7.src = "Clouds/Cloud2.png";
let img8 = new Image();
img8.src = "Clouds/Cloud3.png";
let img9 = new Image();
img9.src = "Clouds/Cloud4.png";
let img10 = new Image();
img10.src = "Clouds/Cloud5.png";

img6.crossOrigin = "anonymous";
img7.crossOrigin = "anonymous";
img8.crossOrigin = "anonymous";
img9.crossOrigin = "anonymous";
img10.crossOrigin = "anonymous";

//StickFigures
let sf = 0;
let img11 = new Image();
img11.src = "Stickfigures/Stickfigure1.png";
let img12 = new Image();
img12.src = "Stickfigures/Stickfigure2.png";
let img13 = new Image();
img13.src = "Stickfigures/Stickfigure3.png";
let img14 = new Image();
img14.src = "Stickfigures/Stickfigure4.png";
let img15 = new Image();
img15.src = "Stickfigures/Stickfigure5.png";
let img16 = new Image();
img16.src = "Stickfigures/Stickfigure6.png";

img11.crossOrigin = "anonymous";
img12.crossOrigin = "anonymous";
img13.crossOrigin = "anonymous";
img14.crossOrigin = "anonymous";
img15.crossOrigin = "anonymous";
img16.crossOrigin = "anonymous";

//Rainbows
let r = 0;
let img17 = new Image();
img17.src = "Rainbows/Rainbow1.png";
let img18 = new Image();
img18.src = "Rainbows/Rainbow2.png";
let img19 = new Image();
img19.src = "Rainbows/Rainbow3.png";

img17.crossOrigin = "anonymous";
img18.crossOrigin = "anonymous";
img19.crossOrigin = "anonymous";

//Background
let b = 0;
let img20 = new Image();
img20.src = "Background/1.png";
let img21 = new Image();
img21.src = "Background/2.png";
let img22 = new Image();
img22.src = "Background/3.png";
let img23 = new Image();
img23.src = "Background/4.png";
let img24 = new Image();
img24.src = "Background/5.png";

img20.crossOrigin = "anonymous";
img21.crossOrigin = "anonymous";
img22.crossOrigin = "anonymous";
img23.crossOrigin = "anonymous";
img24.crossOrigin = "anonymous";

let sun = [img1, img2, img3, img4, img5];
let cloud = [img6, img7, img8, img9, img10];
let stickfigure = [img11, img12, img13, img14, img15, img16];
let rainbow = [img17, img18, img19];
let backdrop = [img20, img21, img22, img23, img24];

let currentImage = img0;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(stickfigure[sf % 6], -110, 50, 550, 260);
  ctx.drawImage(sun[s % 5], 125, -20, 350, 160);
  ctx.drawImage(cloud[c % 5], 25, -20, 350, 160);
  ctx.drawImage(rainbow[r % 3], -25, 50, 270, 110);
  ctx.drawImage(backdrop[b % 5], -60, -0, 490, 240);
}

function button1Clicked() {
  sf = sf + 1;
  render();
  // ctx.drawImage(stickfigure[n % 6], -110, 50, 550, 260);
}

function button2Clicked() {
  s = s + 1;

  render();
  // ctx.drawImage(sun[n % 5], 125, -20, 350, 160);
}
function button3Clicked() {
  c = c + 1;

  render();

  // ctx.drawImage(cloud[n % 5], 25, -20, 350, 160);
}
function button4Clicked() {
  r = r + 1;

  render();
  // ctx.drawImage(rainbow[n % 3], -25, 50, 270, 110);
}
function button5Clicked() {
  b = b + 1;

  render();
  // ctx.drawImage(backdrop[n % 5], -60, -0, 490, 240);
}

btn1.addEventListener("click", button1Clicked);
btn2.addEventListener("click", button2Clicked);
btn3.addEventListener("click", button3Clicked);
btn4.addEventListener("click", button4Clicked);
btn5.addEventListener("click", button5Clicked);

render();
img0.onload = render;
