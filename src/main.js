import "./style.css";

const target_color_box = document.getElementById("target_color_box"),
  score = document.getElementById("score"),
  color_boxes = document.getElementsByClassName("color_box"),
  reset = document.getElementById("reset"),
  status = document.getElementById("status");

const colors_array = [
  ["#a0d995", "#b5e4a3", "#c9edb1", "#ddebc0", "#f2f7ce", "#ffffff"],
  ["#5e4fa2", "#735bb7", "#8867cc", "#9d73e1", "#b27ff6", "#c790ff"],
  ["#d95f0d", "#e67323", "#ef8639", "#f89a4f", "#ffaead", "#ffc26b"],
  ["#4a4e69", "#5b607a", "#6c728b", "#7d849c", "#8e96ad", "#9fa8be"],
  ["#af296a", "#c03378", "#d13d86", "#e24794", "#f351a2", "#ff69b4"],
  ["#0077b6", "#0088c9", "#0099dc", "#00aae0", "#00bbe3", "#00cce6"],
  ["#fca311", "#fcb12f", "#fcc04d", "#fccd6b", "#fcdf89", "#fcef9f"],
  ["#370617", "#48081e", "#590a25", "#6a0c2c", "#7b0e33", "#8c103a"],
  ["#9d0208", "#ad050d", "#bd0712", "#cd0a17", "#dd0c1c", "#ed0e21"],
  ["#3c096c", "#4a0b80", "#580d94", "#660fa8", "#7411bc", "#8213d0"],
  ["#64b5f6", "#90caf9", "#bbdefb", "#e3f2fd", "#ffffff", "#f5f5f5"],
  ["#4caf50", "#81c784", "#aed581", "#c5e1a5", "#dcedc8", "#e8f5e9"],
  ["#ffeb3b", "#fff176", "#fff59d", "#fff9c4", "#ffffcc", "#ffffdf"],
  ["#ff9800", "#ffab40", "#ffb74d", "#ffc880", "#ffdcaf", "#ffe0b2"],
  ["#f44336", "#ef5350", "#e57373", "#d32f2f", "#c62828", "#b71c1c"],
  ["#9c27b0", "#ab47bc", "#ba68c8", "#ce93d8", "#d0bfff", "#e1bee7"],
  ["#00bcd4", "#26c6da", "#4dd0e1", "#80deea", "#b2ebf2", "#bdf3fd"],
  ["#009688", "#26a69a", "#4db6ac", "#80cbc4", "#b2dfdb", "#c8e6c9"],
  ["#ff5722", "#ff7043", "#ff8a65", "#ffab91", "#ffccbc", "#ffd8a6"],
  ["#795548", "#a1887f", "#bcaaa4", "#d7ccc8", "#f5f5f5", "#fafafa"],
];

let _score = 0;

score.innerText = _score;

reset.addEventListener("click", () => {
  _score = 0;
  score.innerText = _score;
  gameStart();
});

const gameStart = () => {
  let randomlySelectedColorArray =
    colors_array[Math.floor(Math.random() * colors_array.length)];

  let boxes = Array.from(color_boxes);

  let random = Math.floor(Math.random() * randomlySelectedColorArray.length);
  let targetColor = randomlySelectedColorArray[random];

  target_color_box.style.backgroundColor = targetColor;

  boxes.forEach((box, index) => {
    let box_color = randomlySelectedColorArray[index];
    box.style.backgroundColor = box_color;

    box.removeEventListener("click", box.clickHandler);

    box.clickHandler = () => {
      if (targetColor == box_color) {
        status.innerText = "You are correct";
        status.style.color = "green";

        // Correct Guess Logic
        const timerID = setTimeout(() => {
          status.innerText = "";
          gameStart();
          _score++;
          score.innerText = _score;
          console.log("again");
          clearTimeout(timerID);
        }, 600);
      } else {
        status.innerText = "You are wrong. Try again";
        status.style.color = "red";
        setTimeout(() => {
          status.innerText = "";
        }, 600);
      }
    };

    box.addEventListener("click", box.clickHandler);
  });
};

gameStart();
