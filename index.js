const container = document.getElementById("container");
const btnContainer = document.getElementById("btn");

const inputButton = document.createElement("button");
inputButton.innerHTML = "Click Me";
btnContainer.append(inputButton);

inputButton.addEventListener("click", reDraw);

function reDraw() {
  let inputGridCount = prompt(
    "Please enter number of squares you want for each side",
  );
  let widthAndHeight = 160 / inputGridCount + "px";
  if (inputGridCount == null || inputGridCount == "") {
    console.log("User canceled the prompt");
  } else if (inputGridCount > 100) {
    alert("Please do not type more than 100");
  } else if (inputGridCount < 0) {
    alert("Please do not type negative numbers");
  } else {
    container.innerHTML = "";
    draw(inputGridCount, widthAndHeight);
  }
}

function draw(inputGridCount, widthAndHeight = "25px") {
  for (let i = 0; i < inputGridCount; i++) {
    for (let j = 0; j < inputGridCount; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = widthAndHeight;
      square.style.height = widthAndHeight;
      square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = "yellow";
      });
      container.append(square);
    }
  }
  console.log(inputGridCount);
}

draw(16);
