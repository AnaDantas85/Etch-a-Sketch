const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.getElementById("resize-btn");

function createGrid(squaresPerSide) {
  gridContainer.innerHTML = "";

  const squareSize = 960 / squaresPerSide;

  gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${squareSize}px)`;
  gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareSize}px)`;

	for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

		function getRandomColor() {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			return `rgb(${r}, ${g}, ${b})`;
		}

    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = getRandomColor();
    });
	}
}

resizeButton.addEventListener("click", () => {
	let squaresPerSide = parseInt(prompt("Enter the number of squares per side for the new grid (e.g., 16, 32, 64):"));

	if (isNaN(squaresPerSide) || squaresPerSide <= 0) {
		alert("Please enter a valid number.");
		return;
	}

	createGrid(squaresPerSide);
});

createGrid(16);



