const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

fruits.forEach((v) => {
  console.log(v);
});

fruits.forEach((v) => {
  console.log(v.toUpperCase);
});

fruits.forEach((v) => {
  console.log(`${v} a를 포함 ${v.includes("a")}`);
});

// fruits.forEach((v) => {
//     console.log(`${v} a를 ${v.includes('a') ? "포함 : "미포함"}`)
// })

// 6글자 이상이면 대문자화하고, 아니면 해당 단어를 두 번 반복한 단어로 표시
// ex) BANANA, appleapple

fruits.forEach((v) => {
  const isSixOver = v.length >= 6;
  const result = isSixOver ? v.toUpperCase() : v + v;
  console.log(result);
});

// fruits.forEach((v) => {
//   const isSixOver = v.length >= 6;
//   const result = isSixOver ? v.toUpperCase() : v.repeat(2); // repeat 반복 2번
//   console.log(result);
// });

fruits.forEach((v) => {
  console.log(v.toUpperCase().repeat(v.length));
});
