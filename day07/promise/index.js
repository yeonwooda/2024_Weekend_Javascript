// const a = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("탕후루");
//   }, 3000);
// });

// a.then((v) => console.log(v));

// const b = new Promise((success, fail) => {
//   setTimeout(() => {d
//     success(10);
//   }, 1000);
// });

// b.then((v) => {
//   // v = 10
//   console.log(v);
//   return v * 10;
// }).then((v) => { // v = 10 * 10 으로 돌려줌 = 100
//   console.log(v);
// });

const b = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: 3000 });
  }, 1000);
});

b.then((v) => {
  v.name = v.name.toUpperCase(); //name을 대문자화 시키고 return해주기
  return v;
})
  .then((v) => {
    v.price *= 2; // price를 두배해서 return해주기
    return v;
  })
  .then((v) => console.log(v));

// console.log(b);+
