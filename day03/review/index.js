// const button = document.createElement("button");

// const minusBtn = document.createElement("button");
// const plusBtn = document.createElement("button");
// const num = document.createElement("span");

// minusBtn.innerText = `-`;
// num.innerText = `0`;
// plusBtn.innerText = `+`;

// minusBtn.addEventListener("click", () => {
//   num.innerText = Number(num.innerText) - 1;
// });

// plusBtn.addEventListener("click", () => {
//   num.innerText = Number(num.innerText) + 1;
// });

// document.body.appendChild(minusBtn);
// document.body.appendChild(num);
// document.body.appendChild(plusBtn);

const minusBtn = document.querySelector(".minusBtn");
const result = document.querySelector(".result");
const plusBtn = document.querySelector(".plusBtn");

plusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num < 10 ? num + 1 : num;
  result.innerText = newNum;
  result.computedStyleMap.color = newNum == 10 ? "red" : "black";
});

minusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num > -10 ? num - 1 : num;
  result.innerText = newNum;
  result.computedStyleMap.color = newNum == -10 ? "red" : "black";
});
