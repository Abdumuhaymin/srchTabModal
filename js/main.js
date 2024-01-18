let src = document.querySelector(".src");
let btnSrc = document.querySelector("#srch");
let form = document.querySelector(".form");
let name = document.querySelector("#name");
let btn = document.querySelector("#btn");
let list = document.querySelector(".list");
let box = document.querySelector(".input__data");
let arr = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push({ id: Date.now(), username: name.value });
  name.value = "";
  render();
});

const render = () => {
  list.innerHTML = arr
    .map(
      (item) =>
        `
    <li class="item">
      <p>Username:${item.username}</p>
    </li>
    `
    )
    .join("");
};

btnSrc.addEventListener("click", () => {
  src.classList.toggle("creat");
});
src.addEventListener("keydown", (e) => {
  creat();
});
const deleteItem = (id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr.splice(i, 1);
    }
    render();
    creat();
  }
};
const creat = () => {
  box.innerHTML = arr
    .filter((item) =>
      item.username.toLowerCase().includes(src.value.toLowerCase())
    )
    .map(
      (item) => `<div>
    <h1> ${item.username}</h1>
    <button onclick="deleteItem(${item.id})">delete</button>
    </div>`
    )
    .join("");
};

let btn1 = document.querySelector("#cats");
let btn2 = document.querySelector("#dogs");
let btn3 = document.querySelector("#mice");
let cats = document.querySelector(".cats__list");
let dogs = document.querySelector(".dogs__list");
let mice = document.querySelector(".mice__list");

btn1.addEventListener("click", () => {
  cats.classList.add("active");
  dogs.classList.remove("active");
  mice.classList.remove("active");
  btn1.classList.add("valid");
  btn2.classList.remove("valid");
  btn3.classList.remove("valid");
});
btn2.addEventListener("click", () => {
  dogs.classList.add("active");
  cats.classList.remove("active");
  mice.classList.remove("active");
  btn2.classList.add("valid");
  btn3.classList.remove("valid");
  btn1.classList.remove("valid");
});
btn3.addEventListener("click", () => {
  mice.classList.add("active");
  dogs.classList.remove("active");
  cats.classList.remove("active");
  btn3.classList.add("valid");
  btn1.classList.remove("valid");
  btn2.classList.remove("valid");
});
