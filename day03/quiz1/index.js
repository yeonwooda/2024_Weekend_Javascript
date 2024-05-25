// const text = ["테두리 직각", "늘리기", "빨간색"];

// text.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const borderRaidusZero = document.querySelector(".borderRaidusTen");
//     borderRaidusZero.innerText = "테두리";
//     const medium = document.querySelector(".large");
//     const red = document.querySelector(".blue");
//   });
//   document.body.appendChild(btn);
// });

const box = document.querySelector(".box");
const colorBtn = document.querySelector(".color");
const sizeBtn = document.querySelector(".size");
const radiusBtn = document.querySelector(".radius");

colorBtn.addEventListener("click", () => {
  colorBtn.innerText = colorBtn.innerText == "파란색" ? "빨간색" : "파란색";
  box.classList.toggle("red");
  box.classList.toggle("blue");
});

sizeBtn.addEventListener("click", () => {
  sizeBtn.innerText = sizeBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  box.classList.toggle("medium");
  box.classList.toggle("large");
});

radiusBtn.addEventListener("click", () => {
  radiusBtn.innerText = radiusBtn.innerText == "둥글게" ? "직각" : "둥글게";
  box.classList.toggle("borderRaidusZero");
  box.classList.toggle("borderRaidusTen");
});
