document
  .getElementById("brick-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    const colorsCount = parseInt(document.getElementById("colors").value);

    const brickWall = document.getElementById("brick-wall");
    brickWall.innerHTML = "";

    const colors = [];
    for (let i = 0; i < colorsCount; i++) {
      colors.push(
        `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")}`
      );
    }

    const colorTracker = new Array(colorsCount).fill(0);

    for (let i = 0; i < rows; i++) {
      const row = document.createElement("div");
      row.className = "row";
      row.style.marginLeft = i % 2 === 0 ? "0px" : "40px";

      for (let j = 0; j < columns; j++) {
        const brick = document.createElement("div");
        brick.className = "brick";

        const colorIndex = Math.floor(Math.random() * colorsCount);
        brick.style.backgroundColor = colors[colorIndex];
        colorTracker[colorIndex]++;

        row.appendChild(brick);
      }
      brickWall.appendChild(row);
    }

    displayColorCount(colors, colorTracker);
  });

function displayColorCount(colors, colorTracker) {
  const colorCountDiv = document.getElementById("color-count");
  colorCountDiv.innerHTML = "<h2>Количество кирпичей каждого цвета:</h3>";
  for (let i = 0; i < colors.length; i++) {
    const colorDiv = document.createElement("h3");
    colorDiv.textContent = `${colors[i]}: ${colorTracker[i]} шт.`;
    colorDiv.style.color = colors[i];
    colorCountDiv.appendChild(colorDiv);
  }
}
