// fetch
// url을 넣으면 데이터를 돌려주는 함수

//response type
// const getData = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// getData
//   .then((v) => v.json())
//   .then((v) => v.data)
//   .then((v) =>
//     v.forEach(({ street, streetName, country }) =>
//       bindData(street, streetName, country)
//     )
//   )
//   .catch((v) => console.log("너무 많이 보내지마세요"));

// const bindData = (street, streetName, country) => {
//   const table = document.querySelector(".table");
//   table.insertAdjacentHTML(
//     "beforeend",
//     `
//         <div class="table__data">
//                 <div class="street">${street}</div>
//                 <div class="streetName">${streetName}</div>
//                 <div class="country">${country}</div>
//         </div>
//         `
//   );
// };

const getData = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=50");
getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ type, number, expiration, owner }) =>
      bindData(type, number, expiration, owner)
    )
  )
  .catch((v) => alert(`너무 많이 보내지마세요`));

const bindData = (type, number, expiration, owner) => {
  const table = document.querySelector(".table");
  const maskedNumber = "****" + [...number].slice(4, number.length).join("");
  const date = new Date().getFullYear() + "/" + expiration;

  table.insertAdjacentHTML(
    "beforeend",
    `<div class="table__data">
        <div class="type">${type}</div>
        <div class="number">${maskedNumber}</div>
        <div class="expiration">${newExp}</div>
        <div class="owner">${owner}</div>
      </div>
    `
  );
};
