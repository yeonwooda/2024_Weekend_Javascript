// web - 데이터 가져오기, 지도확인, 시간초 재기, ...
// 동기 프로그래밍 코드 <-> 비동기 프로그래밍 코드

// // 1. settimeout , setInterval
// setTimeout(() => {
//   console.log("하이");
// }, 1000); // 1초

// setInterval(() => {
//   console.log("연우");
// }, 1000);

// 2024 06 02 15:23:11 -> 타이머 처럼 만들기

setInterval(() => {
  const date = new Date(); // 밖에 있을 땐 시간이 새롭게 생성이 x 안에다가 작성
  const dateTag = document.querySelector(".date");
  dateTag.innerText = date.toLocaleString();
}, 1000);
