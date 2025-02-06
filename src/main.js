import "./style.css";
const target_color_box = document.getElementById("target_color_box"),
  instruction_container = document.getElementById("instruction_container"),
  close = document.getElementById("close"),
  score = document.getElementById("score"),
  instruction_btn = document.getElementById("instruction_btn"),
  color_boxes = document.getElementsByClassName("color_box"),
  result = document.getElementById("result"),
  result_container = document.getElementById("result_container"),
  instruction = document.getElementById("instruction"),
  modal = document.getElementById("modal"),
  replay_btn = document.getElementById("reset");

const colors_array = [
  "#FF0000", // Red
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#008000", // Green
  "#FFA500", // Orange
  "#800080", // Purple
  "#FFC0CB", // Pink
  "#A0522D", // Sienna
  "#ADD8E6", // Light Blue
  "#808080", // Gray
  "#A0522D", // Brown
  "#000000", // Black
  "#FFD700", // Gold
  "#C0C0C0", // Silver
  "#CD7F32", // Bronze
  "#F08080", // Light Coral
  "#90EE90", // Light Green
  "#D3D3D3", // Light Gray
  "#FFA07A", // Light Salmon
  "#E6E6FA", // Lavender
];
let sixUniqueColors;
let option;
let target;
const colorBoxesArray = Array.from(color_boxes);
let _score = 0;

function generateUniqueColors(array, numUnique) {
  const uniqueColors = new Set();

  while (uniqueColors.size < numUnique) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomColor = array[randomIndex];
    uniqueColors.add(randomColor);
  }

  return Array.from(uniqueColors);
}

instruction_btn.addEventListener("click", () => {
  modal.style.display = "block";
  result_container.style.display = "none";
  instruction.style.display = "block";
  instruction_container.style.animation = "slideDown";
  instruction_container.style.animationDuration = "500ms";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

const addscore = () => {
  if (option == target) {
    _score++;
    score.innerText = _score;
  }
};

replay_btn.addEventListener("click", () => {
  modal.style.display = "none";
  target_color_box.style.backgroundColor = "transparent";
  target_color_box.classList.add("not_selected");
  addscore();
  gameStart();
});

score.innerText = _score;

const gameStart = () => {
  sixUniqueColors = generateUniqueColors(colors_array, 6);
  colorBoxesArray.forEach((color_box, index) => {
    color_box.style.backgroundColor = sixUniqueColors[index];
    color_box.addEventListener("click", (e) => {
      let _targetColor =
        sixUniqueColors[Math.floor(Math.random() * sixUniqueColors.length)];
      target_color_box.style.backgroundColor = _targetColor;
      target_color_box.classList.remove("not_selected");

      setTimeout(() => {
        resultChecker(sixUniqueColors[index], _targetColor);
      }, 500);
    });
  });
};

const resultChecker = (option_color, target_box_color) => {
  option = option_color;
  target = target_box_color;
  if (option_color == target_box_color) {
    result.innerText = "YOU ARE CORRECT 🏆😃";
  } else {
    result.innerText = "YOU ARE WRONG 😢😓";
  }
  result_container.style.display = "block";
  instruction_container.style.animation = "slideDown";
  instruction_container.style.animationDuration = "500ms";
  instruction.style.display = "none";
  modal.style.display = "block";
};

gameStart();
