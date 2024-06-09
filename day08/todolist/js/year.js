const todoListData = {};
const start = new Date(2024, 0, 2);
Array(365)
  .fill(0)
  .forEach((v, i) => {
    // 2024-06-09T06:37:17.676Z'를 T로 자라ㅡ고 앞에 가져오기
    const date = start.toISOString().split("T")[0];

    // 2024-06-09를 20240609로 바꾸기
    const pureDate = date.replace("-", "");

    //todoListData에 key로 20240609를 넣고 value는 [] 넣기
    todoListData[pureDate] = [];

    // 시작 날짜에서 다음날로 세팅하기
    start.setDate(start.getDate() + 1);
  });
console.log(todoListData);
