import "./style.css";
const target_color_box = document.getElementById("target_color_box"),
  instruction_modal = document.getElementById("instruction_modal"),
  instruction_container = document.getElementById("instruction_container"),
  close = document.getElementById("close"),
  score = document.getElementById("score"),
  instruction_btn = document.getElementById("instruction_btn"),
  option_container = document.getElementById("option_container");

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
