// const arr = [1, 3, 5, 7, 9];
// // const fruist = [
// //   "apple",
// //   "banana",
// //   "orange",
// //   "kiwi",
// //   "tomato",
// //   "grape",
// //   "strawberry",
// // ];

// // forEach, every, some

// // map(바꾸기)
// const a1 = arr.map((v) => v * 10);
// const a2 = arr.map((v) => v ** v);
// // a3 = > 6보다 작으면 10 더하고, 아니면 10 곱해주기
// const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
// // 짝수 2배, 홀수 3배
// const a4 = arr.map((v, i) => (i % 2 == 1 ? v * 3 : v * 2));

// // 알파벳 a포함되면 대문자화 시키고, 아니면 단어의 길이로 바꿔주기

// //onst a5 = fruist.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));

// // filter
// const b1 = arr.filter((v) => v > 5);
// const b2 = arr.filter((v, i) => i % 2 == 0); // !(i % 2) 짝수

// // 과일에서 6글자 이상인 애들만 걸러주고, 대문자화 시키기
// //const b3 = fruist.filter((v) => v.length >= 6).map((v) => v.toUpperCase());

// // 과일에서 6글자만 걸러주고, 모든 요소들이 a 또는 o를 포함하는지 궁금해!
// //const b4 = fruist.filter((V) => V.length == 6).includes("a", "o");
// // 특정 알파벳 저기? 여기? 에 있니?

// const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

// // const b4 = fruist
// //   .filter((v) => v.length == 6)
// //   .every((v) => alpha.some((x) => v.includes(x)));

// const c = Array(10);
// const c1 = Array(10).fill(0);
// const c2 = Array(10)
//   .fill(0)
//   .map((v, i) => i);

// // 0 ~ 100 홀수만 나오게
// const c3 = Array(101)
//   .fill(0)
//   .map((v, i) => i)
//   .filter((v) => v % 2 == 1);
// console.log(c3);

// // str -> array
// // 첫 번째 방법 : split
// const d = "americano".split("");

// // 두 번째 방법 : Array
// const d1 = Array.from("americano");

// // : from
// const d2 = [..."americano"];

// // a만 빠진 배열 만들기
// const d3 = [..."americano"].filter((v) => v != "a");

// // array -> str
// const e = ["coffee", "cookie"].join("");
// const e1 = ["coffee", "cookie"].toString();

// // str <-> array
// // "cccCCC" => "CCCccc" 만들기

// // 1. const e2 = [...word].map((v) =>
// //   v == v.toUpperCase() ? v.toLocaleLowerCase() : v.toUpperCase().join("")
// // );

// // 2. 함수로 만들었을때
// // const change = (word) =>
// //   [...word].map((v) =>
// //     (v == v.toUpperCase() ? v.toLocaleLowerCase() : v.toUpperCase()).join("")
// //   );
// // "abCdEfghI" => "ABcDeFGHi" 만들기
// const e3 = ["abCdEfghI"].map((v) => v.toUpperCase());
// console.log(e2);

// // n k result
// // 10 3 [3,6,9]
// // 15 5 [5, 10, 15]
// // 12 4 [4, 8, 12]

// // Array(10)
// //   .fill(0)
// //   .map((v, i) => i + 1)
// //   .filter((v) => v % 3 == 0);

// // Array(15)
// //   .fill(0)
// //   .map((v, i) => i + 1)
// //   .filter((v) => v % 5 == 0);

// // Array(12)
// //   .fill(0)
// //   .map((v, i) => i + 1)
// //   .filter((v) => v % 4 == 0);

// // const makeArr = (n, k) =>
// //   Array(n)
// //     .fill(0)
// //     .map((v, i) => i + 1)
// //     .filter((v) => v % k == 0);

// // 100더하기
// const a = Array(100)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .reduce((acc, cur) => acc + cur);

//  과일에서 모음을 빼고, 모음을 합쳐라  = > pplbnnrngkwtmt으로 나와야함
const fruits = ["apple", "banana", "orange", "kiwi", "tomato"];

const result = fruist1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, cur) => acc + cur);

console.log(result);
