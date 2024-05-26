const a = () => {
  console.log("아침");
};

const b = () => {
  console.log("점심");
};

const c = () => {
  console.log("저녁");
};

const test = document.querySelector(".test");

test.addEventListener("click", () => {
  a();
  b();
  c();
});

const test_se = document.querySelector(".test_se");

test_se.addEventListener("click", () => {
  b();
  c();
  a();
});

const test_th = document.querySelector(".test_th");

test_th.addEventListener("click", () => {
  c();
  a();
  b();
});

// 아침 - > 점심 -> 저녁
// 점심 -> 저녁 -> 아침
// 저녁 -> 아침 -> 점심
