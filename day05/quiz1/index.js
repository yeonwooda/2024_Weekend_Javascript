import { data } from "./data.js";

// 1. timezone이 europe인 데이터중에서
//  -> phone, fullname, ipAddress 보여주기

const one = data
  .filter(({ timezone }) => timezone.includes("Europe"))
  .map(({ phone, fullname, ipAddress }) => ({ phone, fullname, ipAddress }));
console.log(one);

// 2. id가 짝수인 데이터 중에서
//   timezone[대륙]이랑 phone[- 빼고 가져오기], money[$을 빼고]를 가져오기
const two = data
  .filter(({ id }) => !(id % 2))
  .map(({ timezone, phone, money }) => {
    return {
      timezone: timezone.split("/")[0],
      phone: phone.replaceAll("-", ""),
      money: money.replace("$", ""),
    };
  });
console.log(two);
// 3. America or Asia 데이터 중에서
// ipAddress[.을 지우고] fullName 앞 이름[first name] creditcard변경 후 가져오기
//const c = data.map(({America, Asia}) => ipAddress.filter(.) )

const three = data
  .filter(
    ({ timezone }) => timezone.includes("America") || timezone.includes("Asia")
  )
  .map(({ ipAddress, fullname, creditCardType: creditcard }) => {
    return {
      ipAddress: ipAddress.replaceAll(".", ""),
      fullname: fullname.split(" ")[0],
      creditcard,
    };
  });
console.log(three);
// 4. 달러가 25000 ~ 50000 사이 데이터와 timezone이 africa인 데이터 중에서
// timezone[수도만 가져오기] fullName 뒤 이름 [family name] 가져오기

const four = data
  .filter(({ money, timezone }) => {
    const numberMoney = Number(money.replace("$", ""));
    const isValidMoney = 25000 <= numberMoney && numberMoney <= 50000;
    const isValidTimezone = timezone.includes("Africa");
    return isValidMoney && isValidTimezone;
  })
  .map(({ timezone, fullname }) => ({
    timezone: timezone.split("/")[1],
    fullname: fullname.split(" ")[1],
  }));
console.log(four);

// 5. ipAddress [180.101.53.217] 뒷자리 세개의 수의 합이 15 이하인 애들 데이터 중에서
// timezone, fullname, money 가져오기
const five = data
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress]; // 배열로 바꾸고
    const lastIndex = ipArr.findLastIndex((v) => v == "."); // . 마지막 어디니
    const sum = ipArr
      .splice(lastIndex + 1, ipArr.length)
      .map((v) => Number(v))
      .reduce((a, c) => a + c); // 자르고, 정수형으로 바꾸고, 모두 다 합치고 숫자화 시키고 모두 누적시키기
    return sum <= 15;
  })
  .map(({ timezone, fullname, money, ipAddress }) => ({
    timezone,
    fullname,
    money,
    ipAddress,
  }));
console.log(five);
