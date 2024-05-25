// js가 thml을 만들기 위한 장소

// h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

// //버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const button = document.createElement("button");
// button.style.backgroundColor = "skyblue";
// button.style.padding = "10px";
// button.style.fontSize = "20px";
// button.innerText = "클릭!";
// document.body.appendChild(button);

// const a = prompt("점심 뭐먹을거?");
// console.log(a);

// prompt로 배경색깔을 물어보고 헥사코드,
// ex) red, #ffefed
// div -> width : 100px, height: 100px, background: red

// const b = prompt("배경색상이 궁금해!");
// console.log(b);
// const button = document.createElement("button");
// button.style.backgroundColor = "red";
// button.style.width = "100px";
// button.style.height = "100px";

// const color = prompt("배경색상이 궁금해!");
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color;

// document.body.appendChild(box);

// 폰트 색상 물어보고
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 thml에 보여주기

// const font = prompt("폰트색상이 궁금해!");
// const button = document.createElement("button");
// button.style.padding = "10px";
// button.style.color = font;
// button.innerText = "폰트";
// document.body.appendChild(button);

// const fontColor = prompt("폰트 색깔");
// const text = prompt("버튼 내용");
// const button = document.createElement("button");
// button.style.color = fontColor;
// button.innerText = text;
// document.body.appendChild(button);

//높이 물어보기 px도 같이 쓰기
// 넓이 물어보기
0; // 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div 태그로 위의 내용을 고려해서 나타내기

// const width = prompt("높이를 알려줘!");
// const height = prompt("넓이를 알려줘!");
// const back_Color = prompt("배경색 알려줘!");
// const text = prompt("안에 들어갈 내용을 알려줘!");

// const box = document.createElement("div");
// box.style.width = " px";
// box.style.height = " px";
// box.style.backgroundColor = back_Color;
// box.innerText = text;

// document.body.appendChild(div);

const width = prompt("넓이를 알려줘!");
const height = prompt("높이를 알려줘!");
const back_Color = prompt("배경색 알려줘!");
const text = prompt("안에 들어갈 내용을 알려줘!");

const box = document.createElement("div");
box.style.width = width;
box.style.height = height;
box.style.backgroundColor = back_Color;
box.innerText = text;

document.body.appendChild(box); //thml 추가
