setInterval(() => {
  const date = new Date();
  const splitedDate = date.toLocaleString;
  const time = splitedDate.split(".")[0];
  const timeTag = document.querySelector(".time");
  timeTag.innerText = time;
}, 1000);
