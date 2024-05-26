// function abc(x) {
//   x();
//   return 1;
// }

// function kim() {
//   console.log(`김씨 안녕`);
// }

// abc(kim);

// function getTen() {
//   return 10;
// }

const getTen = () => 10;

// function getOne() {
//   return 1;
// }
const getOne = () => 1;
// function abc(x, y) {
//   return x() + y();
// }
const abc = (x, y) => x() + y();
abc(getTen, getOne);


const arr = [1, 10, "apple", "banana", 3];
const test = (x) => {
  console.log(`${x} 입니다.`);
};

arr.forEach(test);
arr.forEach((v) => {
  console.log(`${v} 입니다.`);
});
