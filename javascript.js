const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const brush = document.getElementById("Brush");
const clear = document.getElementById("clear");
const size = document.getElementById("size")

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  lastX = e.offsetX;
  lastX = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    const x = e.offsetX;
    const y = e.offsetY;

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

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

