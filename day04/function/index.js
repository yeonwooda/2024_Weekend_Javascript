//함수 : input[str,bool,element,null] - > output[str,bool,element,null]
// 일반 함수
// function hello(x) {
//   return `${x} 안녕!`;
// }  // hello 정의

// const a = hello("연우"); // 연우 안녕!
// const b = hello("JS"); // JS 안녕!
// console.log(a);
// console.log(b);

// 1. 어떠한 x를 넣으면 + 100을 돌려주는 함수
// function num(x){
//     return `${x} Number(100)`
// }
// const a = num("")

// function plus100(x) {
//   return x + 100;
// }

// // 2. 어떠한 x를 넣으면 대문자화 시키고, '이모지 넣기'

// function upperEmoji(x) {
//   return x.upperCase() + "";
// }

// const c = plus100(300); // 400
// const d = upperEmoji("apple");
// console.log(c, d);

// 3. 배열 x를 넣으면 두 번째 원소를 돌려주기
function getSecond(x) {
  return x[1];
}

// 4. 어떠한 x를 넣으면 + 럭키비키잖아를 붙혀서 돌려주기
function wonyoungThink(x) {
  return x + "럭키비키잖아";
}

const e = getSecond(["apple", "banana"]);
const f = wonyoungThink("오늘 완전 ");

console.log(e);
console.log(f);
