// 변수(variable) : 데이터를 기억하는 공간, 닉네임
// const 이름 = 데이터 [기억 한번만]
// let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [절대절대 쓰지말기]

// const c = 100;
// c = 200; (x)

// let d = 100;
// d = 200; (0)

// 변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 띄어스기 안됨 const mintchoco
// 4. 숫자로 시작 안됨 ex) const 1a(x) a1(0)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용
// ex) const a(x), const button(x) white_button
// 2. 두 단어 합칠 때, 낙타표기법, 뱀표기범사용
// - 낙타 : milkCoffee
// - 뱀 : milk_coffee
// 3. 소문자로 시작하기

// const a = 1; // a는 1
// const b = "사이다"; // b는 사이다

//유저에게 내용과 색깔을 두개 각각 입력받고,
//thml에 h1~h3태그 각각 3개 만들기

// 유저에게 만들고 싶은 태그 물어보고
// 원하는 안의 내용도 물어보고
// 원하는 폰트색깔 만들고,
// thml에 만들기

// const text = prompt("안에 들어갈 내용을 알려줘!");
// const color = prompt("색깔을 알려줘!");
// const h1tag = document.createElement("h1");
// const h2tag = document.createElement("h2");
// const h3tag = document.createElement("h3");
// document.body.addEventListener(h1tag, h2tag, h3tag);
const text = prompt("내용");
const color = prompt("색상");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");

h1.style.color = color;
h2.style.color = color;
h3.style.color = color;

h1.innerText = text;
h2.style.color = text;
h3.style.color = text;

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);
//----------

// const tag = prompt("만들고 싶은 태그를 알려줘!");
// const text = prompt("안에 들어갈 내용을 알려줘!");

// const box = document.createElement("div");
// box.style.color =

const tag = prompt("만들고 싶은 태그를 알려줘!");
const text1 = prompt("안에 들어갈 내용을 알려줘!");
const color1 = parent("폰트 색상");

const madeTag = document.createElement(tag);
madeTag.style.color = color;
madeTag.innerText = text1;
document.body.appendChild(madeTag);
