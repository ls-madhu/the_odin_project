function drawSquares(grid_size) {
    sketchpad.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`
    sketchpad.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`

    for (let i = 0; i < grid_size * grid_size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = "rgba(0, 0, 0, 0)";
        sketchpad.appendChild(square);
    }
}

function clearBackground() {
    squares.forEach(square => square.style.backgroundColor = "rgba(0,0,0,0)")
}

function fillBackground(e) {
    if (mode === "rainbow") {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (mode === "black") {
        e.target.style.backgroundColor = "rgb(0, 0, 0)";
    } else if (mode === "grayscale") {
        let scale = Number(e.target.style.backgroundColor.slice(5, -1).split(", ")[3]);
        if (scale <= 1) {
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${scale + 0.1})`
        }
    } else if (mode === "erase") {
        e.target.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

function hoverOnSquares() {
    squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", fillBackground);
    });
}

const modeSelect = document.getElementById("mode");
const gridSizeLabel = document.querySelector(".grid_size_label");
const gridSizeRange = document.getElementById("grid_size");
const clearBtn = document.querySelector(".clear_btn");
const sketchpad = document.querySelector(".sketchpad");
let mode = "rainbow";
let previousMode = "rainbow";
let squares;

drawSquares(16);
hoverOnSquares();
gridSizeLabel.textContent = "Grid Size: 16 x 16";

modeSelect.addEventListener("change", (e) => {
    mode = e.target.value;
    if (mode !== "erase" && mode !== previousMode) {
        clearBackground();
        previousMode = mode;
    }
})

gridSizeRange.addEventListener("input", (e) => {
    sketchpad.innerHTML = "";
    gridSizeLabel.textContent = `Grid Size: ${e.target.value} x ${e.target.value}`;
    drawSquares(Number(e.target.value));
    hoverOnSquares();
})

clearBtn.addEventListener("click", clearBackground);