// const friends = ["kim", "lee", "park"];
// // const h3 = document.createElement("h3");
// // h3.innerHTML = "My Friend";
// // document.body.appendChild(h3);
// const html = `
//     <h1>My Friend</h1>
//     <ul>
//         ${friends.map((v) => `<li>${v}</li>`).join("")}
//     </ul>
// `;
// document.body.innerHTML = html;

// 1. createElement -> appendChild
// 2. innerHTML
const menu = document.querySelector(".menu");

// afterbegin - 첫 번째 자식 앞에 넣기
// beforeend - 마지막 자식 뒤에 넣기
const html = `
    <h1>My Friend</h1>
    <ul>
        ${friends.map((v) => `<li>${v}</li>`).join("")}
    </ul>
`;
menu.insertAdjacentHTML("beforeend", html);

