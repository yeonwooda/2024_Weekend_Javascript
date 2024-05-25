// div, w 100 h 100 bg ;
// -, + / 늘어나고 줄어들고

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "#81ecec";
document.body.appendChild(box);

const minusBtn = document.createElement("button");
const plusBtn = document.createElement("button");
//const total = document.createElement("span");

minusBtn.innerText = `-`;
plusBtn.innerText = `+`;
//total.innerText = `0`;

minusBtn.addEventListener("click", () => {
  //total.innerText = +total.innerText - 1;
  box.style.width = parseInt(box.style.width) - 1 + "px";
  box.style.height = parseInt(box.style.height) - 1 + "px";
});

plusBtn.addEventListener("click", () => {
  //total.innerText = +total.innerText + 1;
  box.style.height = parseInt(box.style.height) + 1 + "px";
  box.style.width = parseInt(box.style.width) + 1 + "px";
});

document.body.appendChild(minusBtn);
document.body.appendChild(plusBtn);
//document.body.appendChild(total);
