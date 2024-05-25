const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

// 사과 버튼
// 오렌지 버튼
// 파인애플 버튼
// ...

// const aplBtn = document.createElement("button");
// const orBtn = document.createElement("button");
// const pinBtn = document.createElement("button");

// aplBtn.innerText = "사과";
// orBtn.innerText = "오렌지";
// pinBtn.innerText = "파인애플";

// aplBtn.addEventListener("click", () => {
//   alert("선택");
// });

// orBtn.addEventListener("click", () => {
//   alert("선택");
// });

// pinBtn.addEventListener("click", () => {
//   alert("선택");
// });
// document.body.appendChild(aplBtn);
// document.body.appendChild(orBtn);
// document.body.appendChild(pinBtn);

// fruits.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     window.alert(`${v} 과일이 클릭되었습니다.`);
//   });
//   document.body.appendChild(btn);
// });

const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];
// 각각 버튼 만들고
// 버튼 누르면 올라가는

// coffee.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     h3.innerText = Number(h3.innerText) + v;
//   });
//   document.body.appendChild(btn);
// });
// document.body.appendChild

coffee.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    const price = Number(v.split(" ")[1]);
    total.innerText = Number(total.innerText) + price;
  });
  document.body.appendChild(btn);
});
