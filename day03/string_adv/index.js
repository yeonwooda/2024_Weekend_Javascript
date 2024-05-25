const coffee = "americano";

// 포함 유무
coffee.includes("cano"); // true

// 몇번째 있는지 물어보기
coffee.indexOf("i"); // 4 없으면 -1

// 바꾸기
coffee.replace("a", "z"); // a를 z로 바꿔주세요

// 시작하는지 묻기
coffee.startsWith("ame"); // ame로 시작하는지 true//false

// 끝나는지 묻기
coffee.endsWith("cano"); // cano로 끝나는지 묻기

// 자르고 돌려주기
coffee.slice(0, 5); // ameri

// 대소문자화
coffee.toUpperCase(); //AMERICANO
coffee.toLowerCase(); //americano

// 배열화
coffee.split("i")[("aemr", "cano")];

// 반복
coffee.repeat(3); //americanoamericanoamericano
