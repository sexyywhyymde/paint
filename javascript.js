const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const brush = document.getElementById("brush");
const clear = document.getElementById("clear");
const size = document.getElementById("size");
const color = document.getElementById("color");
const eraser = document.querySelector("#eraser");
const fill = document.getElementById("fill");
console.log(brush);

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let isEraser = false;
let isFill = false;

canvas.addEventListener("mousedown", (e) => {
  lastX = e.offsetX;
  lastY = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    const x = e.offsetX;
    const y = e.offsetY;

    if (isEraser) {
      ctx.strokeStyle = "white";
    } else {
      ctx.strokeStyle = color.value;
    }

    ctx.lineWidth = size.value;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
  }
});

canvas.addEventListener("click", (e) => {
  if (isFill) {
    ctx.fillStyle = color.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  isEraser = false;
});

fill.addEventListener("click", () => {
  isFill = !isFill;

  fill.classList.add("active");
  brush.classList.remove("active")
  eraser.classList.remove("active")
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraser.addEventListener("click", () => {
  isEraser = true;
  isFill = false;

  eraser.classList.add("active");
  fill.classList.remove("active")
  brush.classList.remove("active")
});

brush.addEventListener("click", () => {
  isEraser = false;
  isFill = false;

  brush.classList.add("active");
  fill.classList.remove("active")
  eraser.classList.remove("active")
});
