const menu = document.querySelector(".menu");
const buttons = document.querySelector(".buttons");
const hero = document.querySelector(".hero");
const first = document.querySelectorAll(".show")[0];
const second = document.querySelectorAll(".show")[1];


first.onclick = () => {
  first.classList.toggle("clicked");
  first.querySelector("ul").classList.toggle("clicked");
  removeActiveState(first);
};
second.onclick = () => {
  second.classList.toggle("clicked");
  second.querySelector("ul").classList.toggle("clicked");
  removeActiveState(second);
};

function removeActiveState(ele) {
  if (ele.classList.contains("clicked")) {
    ele.querySelector("img").src = "images/icon-arrow-up.svg";
  } else {
    ele.querySelector("img").src = "images/icon-arrow-down.svg";
  }
}

window.addEventListener('click', (e) => {
  if (first.classList.contains("clicked") && e.target.innerText !== 'Features') {
    first.querySelector("ul").classList.remove("clicked");
    first.querySelector("img").src = "images/icon-arrow-down.svg";
    first.classList.remove("clicked");
  }
  if (second.classList.contains("clicked") && e.target.innerText !== 'Company') {
    second.querySelector("ul").classList.remove("clicked");
    second.querySelector("img").src = "images/icon-arrow-down.svg";
    second.classList.remove("clicked");
  }
});


menu.onclick = () => {
  buttons.classList.toggle("active");
  menu.classList.toggle("active");
  hero.classList.toggle("active");
};
