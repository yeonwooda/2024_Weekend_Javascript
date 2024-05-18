// const button = document.createElement("button");
// button.innerText = "버튼";

// button.addEventListener("mouseover", () => {
//   console.log(올라감);
// });

// document.body.appendChild(button);

// div 태그 - width: 100p, height: 100px bg: red
// 이벤트 - 클릭을 하면, bg: blue

// const button = document.createElement("button");
// button.innerText = "클릭";

// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// button.style.backgroundColor = "red";

// document.body.appendChild(button);

// button.addEventListener("mouseover", () => {
//   console.log(box);
// });

// document.body.appendChild(button);
// ==============

// const divTag = document.createElement("div");
// divTag.style.width = "100px";
// divTag.style.height = "100px";
// divTag.style.backgroundColor = "red";

// divTag.addEventListener("click", () => {
//   divTag.style.backgroundColor = "blue";
// });

// document.body.appendChild(divTag);

// button 태그 만들고, 글은 '파란상자;
// event 클릭을 하면, html div 넓이 100, 높이 100, 백 blue 생김

// const button = document.createElement("button");
// button.innerText = "파란상자";
// button.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.backgroundColor = "blue";
//   document.body.appendChild(div);
// });

// document.body.appendChild(button);

//button을 3가지 만들고, 각각 이름은 색상 이름 3개
// div : 100 100 bg - black
// 각각 클릭을 하면, div태그의 bg가 클릭 한 이름의 색상으로 변경

// const button1 = document.createElement("button1");
// button.innerText = "lilac";
// button.style.backgroundColor = "black";

// button.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = "#cd84f1";
//   document.body.appendChild(div);
// });

// document.body.appendChild(button1);

// const button2 = document.createElement("button");
// button.innerText = "PRETTY PLEASE";

// const button3 = document.createElement("button");
// button.innerText = "NEON BLUE";

//===============
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");

// btn1.innerText = "lilac";
// btn2.innerText = "please";
// btn3.innerText = "blue";

// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";

// btn1.addEventListener("click", () => {
//   div.style.backgroundColor = "#cd84f1";
// });
// btn2.addEventListener("click", () => {
//   div.style.backgroundColor = "#ffcccc";
// });
// btn3.addEventListener("click", () => {
//   div.style.backgroundColor = "#18dcff";
// });
// document.body.appendChild(btn1);
// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
// document.body.appendChild(div);

// div => 100, 100, border: 1px solid black bg: wh
//butt-> 내요ㅕㅇ 색상 추가
//butt's event -> prompt로 물어봄, 색상 헥사코드 입력

//butt[헥사코드]을 가진 색상이 나타남 div의 bg가ㅣ 변경

// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black";
// div.style.backgroundColor = "white";

// const button = document.createElement("button");
// button.innerText = "색상추가";

// div.addEventListener("click", () => {
//   const Color = prompt("어떤색상을 추가하고싶니?");
// });

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";
div.style.backgroundColor = "white";

const addBtn = document.createElement("button");
addBtn.innerText = "색상추가";
addBtn.addEventListener("click", () => {
  const hex = prompt("색상 입력:");
  const btn = document.createElement("button");
  btn.innerText = hex;
  btn.addEventListener("click", () => {
    div.style.backgroundColor = hex;
  });
  document.body.appendChild(btn);
});

document.body.appendChild(addBtn);
