const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const brush = document.getElementById("Brush");
const clear = document.getElementById("clear");
const size = document.getElementById("size");
const color = document.getElementById("color");
const eraser = document.querySelector("#eraser");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let isEraser = false;

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

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  isEraser = false
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraser.addEventListener("click", ()=>{
  isEraser=true
} )
