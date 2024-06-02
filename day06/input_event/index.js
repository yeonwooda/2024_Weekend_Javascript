// const inputTag = document.querySelector(".inputTag ");

// inputTag.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// 4 ~ 10글자 사이이면 글자수가 충분합니다.[초록]
// 0 ~ 3글자 글자가 짧습니다 [빨강]
// 11글자 이상이면 글자가 깁니다 [빨강]
const inputTag = document.querySelector(".inputTag");
const info = document.querySelector(".info");
inputTag.addEventListener("input", (e) => {
  const { length } = e.target.value;
  const isValidLength = 4 <= length && length <= 10;
  const color = isValidLength ? "green" : "red";
  info.style.color = color;
  if (length < 4) {
    info.innerText = "글자가 짧습니다.";
  } else if (10 < length) {
    info.innerText = "글자가 깁니다.";
  } else {
    info.innerText = "글자가 충분합니다.";
  }
});
