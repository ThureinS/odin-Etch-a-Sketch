const container = document.getElementById("container");

let square = document.createElement("div");
square.classList.add("row");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  for (let j = 0; j < 16; j++) {
    row.append(square);
  }
  container.append(row);
}
