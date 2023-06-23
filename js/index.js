const button1 = document.querySelector(".boton1");
const button2 = document.querySelector(".boton2");
const button3 = document.querySelector(".boton3");
const caja = document.querySelector(".caja");
let clickCount = 0;
let isImage1 = true;

button1.addEventListener("click", () => {
  caja.innerHTML = '<img src="./img/imagen1.svg" alt="logo de HTML">';
  button3.classList.remove("hidden");
});

button2.addEventListener("click", () => {
  caja.innerHTML = "";
  button3.classList.add("hidden");
  let flag = document.createElement("div");
  flag.classList.add("flag");
  for (let i = 0; i <= 4; i++) {
    flag.innerHTML += `
        <div class="yellow-stripe"></div>
        <div class="red-stripe"></div>`;
  }
  caja.appendChild(flag);
  flag.lastChild.remove();
});

button3.addEventListener("click", () => {
  clickCount++;
  if (isImage1) {
    caja.innerHTML = '<img src="./img/imagen2.svg" alt="logo de CSS">';
    isImage1 = false;
  } else {
    caja.innerHTML = '<img src="./img/imagen1.svg" alt="logo de CSS">';
    isImage1 = true;
  }
  console.log(clickCount);
  if (clickCount >= 4) {
    button3.disabled = true;
  }
});
