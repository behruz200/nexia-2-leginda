const menuEl = document.querySelector(".bi-list");
const shafffofEl = document.querySelector(".shafffof");
const overEl = document.querySelector(".over");

menuEl.addEventListener("click", () => {
    overEl.style.top = "60px"
    shafffofEl.style.display = "block"

})
shafffofEl.addEventListener("click", () => {
    overEl.style.top = "-50%"
    shafffofEl.style.display = "none"

})

const openEye = document.querySelector(".bi-eye");
const closeEye = document.querySelector(".bi-eye-slash");
const passwordEl = document.querySelector(".password");

closeEye.addEventListener("click", () => {
  openEye.style.display = "block";
  closeEye.style.display = "none";
  passwordEl.setAttribute("type", "text");
});

openEye.addEventListener("click", () => {
  closeEye.style.display = "block";
  openEye.style.display = "none";
  passwordEl.setAttribute("type", "password");
}); 