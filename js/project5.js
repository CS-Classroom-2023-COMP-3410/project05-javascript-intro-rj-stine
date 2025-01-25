const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
const brushSizeInput = document.getElementById("brush-size");
const brushColorInput = document.getElementById("brush-color");
const backgroundColorInput = document.getElementById("background-color");
const undoButton = document.getElementById("undo-button");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");

let drawing = false;
let brushSize = brushSizeInput.value;
let brushColor = brushColorInput.value;
let canvasBackgroundColor = backgroundColorInput.value;

const strokes = [];
let currentStroke = [];

canvas.width = 800;
canvas.height = 500;

// Initialize the canvas background
ctx.fillStyle = canvasBackgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Update brush size and color
brushSizeInput.addEventListener("input", () => {
  brushSize = brushSizeInput.value;
});

brushColorInput.addEventListener("input", () => {
  brushColor = brushColorInput.value;
});

backgroundColorInput.addEventListener("input", () => {
  canvasBackgroundColor = backgroundColorInput.value;
  ctx.fillStyle = canvasBackgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  redrawStrokes();
});

// Start drawing
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  currentStroke = [];
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// Draw as the mouse moves
canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.stroke();
    currentStroke.push({ x: e.offsetX, y: e.offsetY, color: brushColor, size: brushSize });
  }
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  if (drawing) {
    drawing = false;
    strokes.push([...currentStroke]);
    ctx.closePath();
  }
});

// Undo the last stroke
undoButton.addEventListener("click", () => {
  strokes.pop();
  redrawCanvas();
});

// Clear the canvas
clearButton.addEventListener("click", () => {
  strokes.length = 0;
  redrawCanvas();
});

// Save the canvas as an image
saveButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

// Redraw the entire canvas
function redrawCanvas() {
  ctx.fillStyle = canvasBackgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  redrawStrokes();
}

// Redraw all strokes
function redrawStrokes() {
  strokes.forEach((stroke) => {
    ctx.beginPath();
    stroke.forEach((point, index) => {
      ctx.strokeStyle = point.color;
      ctx.lineWidth = point.size;
      ctx.lineCap = "round";
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
      ctx.stroke();
    });
    ctx.closePath();
  });
}
