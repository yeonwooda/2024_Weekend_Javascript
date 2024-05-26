// 화살표 함수 [arrow function]

const plus100 = (x) => {
  return x + 100;
};
// 한줄이면
// const plus100_ = (x) => x + 100;

plus100(200);

// 2. 원소 3번째 돌려주기
const getThrid = (x) => {
  return x[2];
};

// const getThrid = (x) => x[2];

getThrid(["a", "b", "c"]);

// 3. 소문자화 시키고
const lowerEomji = (x) => {
  return x.toLowerCase() + " ";
};

//const lowerEomji = (x) => x.toLowerCase() + " ";

lowerEomji("APPLE");
