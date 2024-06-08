import { data } from "./data.js";

const table = document.querySelector(".table");
const btn = document.querySelector(".btn");

data.forEach(({ id, fullName, jobTitle, race, university }) => {
  table.insertAdjacentHTML(
    "beforeend",
    `
     <div class="table__data">
        <div class="id">${id}</div>
        <div class="fullName">${fullName}</div>
        <div class="jobTitle">${jobTitle}</div>
        <div class="race">${race}</div>
        <div class="university">${university}</div>
      </div>
          `
  );
});

btn.addEventListener("click", () => {
  const searchInput = document.querySelector(".searchInput");
  const { value } = searchInput;
  table.innerHTML = "";
  data
    .filter(({ fullName }) => fullName.includes(value))
    .forEach(({ id, fullName, jobTitle, race, university }) => {
      table.insertAdjacentHTML(
        "beforeend",
        `
         <div class="table__data">
            <div class="id">${id}</div>
            <div class="fullName">${fullName}</div>
            <div class="jobTitle">${jobTitle}</div>
            <div class="race">${race}</div>
            <div class="university">${university}</div>
          </div>
              `
      );
    });
});
