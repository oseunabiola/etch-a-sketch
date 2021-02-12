const squareContainer = document.querySelector("#squareContainer");

const defaultPixelSize = 16;
fillGrid(defaultPixelSize);

const clearSketchPadButton = document.querySelector("button");

clearSketchPadButton.addEventListener("click", clearSketchPad);

function fillGrid(pixelSize) {
  const gridCount = pixelSize * pixelSize;
  for (let i = 0; i < gridCount; i++) {
    const divElement = document.createElement("div");
    squareContainer.appendChild(divElement);
    divElement.classList.add("square");

    divElement.addEventListener("mouseenter", function () {
      divElement.style.backgroundColor = randomColor();
    });
  }
  squareContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
  squareContainer.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
}

function randomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen},${randomBlue})`;
}

function clearSketchPad() {
  let pixelSize;
  do {
    pixelSize = parseInt(prompt("Number of squares per side? (Limit 1-100)"));
  } while (pixelSize < 1 || pixelSize > 100 || Number.isNaN(pixelSize));
  const existingSquares = document.querySelectorAll(".square");
  existingSquares.forEach((element) => {
    element.classList.add("deleting");
    setTimeout(() => {
      squareContainer.removeChild(element);
    }, 700);
  });
  setTimeout(() => {
    fillGrid(pixelSize);
  }, 700);
}
