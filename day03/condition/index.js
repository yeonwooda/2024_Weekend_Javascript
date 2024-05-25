// condition[조건]
// const a = Number(prompt("숫자 입력 : "));

// if (a > 0) {
//   alert("0보다 큽니다.");
// } else if (a == 0) {
//   alert("0 입니다.");
// } else {
//   alert("0보다 작습니다.");
// }

// prompt로 영어 점수를 입력 받고
// 90점 이상 'a', 80점 이상 'b', 70점 이상 'c', 60점 이상 'd', 60 점 미만 '나락'

// const a = Number(prompt("영어 점수 : "));

// if (a >= 90) {
//   alert("A");
// } else if (a >= 80) {
//   alert("B");
// } else if (a >= 70) {
//   alert("C");
// } else if (a >= 60) {
//   alert("D");
// } else {
//   alert("나락");
// }

// 유저에게 비밀번호 설정을 물어보고,
// 1. 비밀번호 길이가 8글자 이상이고 // 비밀번호가 짧습니다.
// 2. 특수문자 !, #, $가 하나 들어가야 하고 // 특수문자가 없습니다.
// 3. I로 시작하고, T로 끝나야 하고  // I와 T를 꼭 시작과 끝에 넣어야합니다.
// 위의 조건을 모두 통과하면 비밀번호 설정 완료!

// const pass = Number(prompt("비밀번호 : "));

// if (pass >= 8){
// alert("가능")
// } else if (pass <= 8){
// alert("비밀번호가 짧습니다.")
// } else if(pass ){

// }

// const password = prompt("비밀번호 입력");
// const isLengthOver8 = password.length >= 8;
// const hasSpecialChar =
//   password.includes("!") || password.includes("#") || password.includes("$");
// const inValidIT = password.startsWith("I") && password.endsWith("T");

// if (!isLengthOver8) {
//   alert("비밀번호가 짧습니다.");
// } else if (!hasSpecialChar) {
//   alert("특수문자가 포함되어있지 않습니다.");
// } else if (!inValidIT) {
//   alert("I와 T를 꼭 시작과 끝에 넣어야합니다.");
// } else {
//   alert("비밀번호 설정 완료!");
// }

const special = ["!", "#", "$"];
//special.forEach((v)=>{v})
special.some(() => {
  return v == "$"; // T
});

special.every((v) => {
  return v == "!";
});
//===========
const password = prompt("비밀번호 입력");
const isLengthOver8 = password.length >= 8;
const hasSpecialChar = ["!", "#", "$"].some((v) => {
  return password.includes(v); // 축약 가능
});

const inValidIT = password.startsWith("I") && password.endsWith("T");

if (!isLengthOver8) {
  alert("비밀번호가 짧습니다.");
} else if (!hasSpecialChar) {
  alert("특수문자가 포함되어있지 않습니다.");
} else if (!inValidIT) {
  alert("I와 T를 꼭 시작과 끝에 넣어야합니다.");
} else {
  alert("비밀번호 설정 완료!");
}
