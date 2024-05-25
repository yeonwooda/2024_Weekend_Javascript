//const a = document.querySelector(".box");
//console.log(a);
//const b = document.getElementsByClassName("box");
//console.log(b);

// a.addEventListener("click", () => {
//   console.log(주말);
// });

// - 0 + 버튼
//  0 이하로

// const plusBtn = document.createElement(".plus");
// plusBtn.addEventListener("click", () => {
//   const numSpan = document.querySelector(".num");
//   numSpan.innerText = Number(numSpan.innerText) + 1;
// });

// const minus = document.createElement(".minus");
// minusBtn.addEventListener("click", () => {
//   const numSpan = document.querySelector(".num");
//   const number = Number(numSpan.innerText) - 1;
//   numSpan.innerText = number === -1 ? 0 : number;
// });

const xMark = document.createElement(".xMark");
const bar = document.querySelector(".bar");
xMark.style.display = "none";

xMark.addEventListener("click", () => {
  bar.style.display = "block";
  xMark.style.display = "none";
});

bar.addEventListener("click", () => {
  xMark.style.display = "block";
  bar.style.display = "none";
});
