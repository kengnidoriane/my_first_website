// code ajoute


function myFunction(x) {
    x.classList.toggle("change");
  }


//   fin




const menuBar = document.querySelector(".container");
const navBar = document.querySelector("nav");
menuBar.addEventListener("click", () => {
     navBar.classList.toggle("change");
})
