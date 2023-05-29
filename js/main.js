// let nav = document.querySelector(".navbar");
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 100) {
//     nav.classList.add("header-scrolled");
//   } else {
//     nav.classList.remove("header-scrolled");
//   }
// };
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  console.log("Scroll event triggered!"); // Add this line to check if the code is executing
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// const navBar = document.querySelectorAll(".nav-link");
// const navCollapse = document.querySelectorAll(".navbar-collapse  ");
// navBar.forEach(function (a) {
//   a.addEventListener("click", function () {
//     console.log("Scroll event triggered!");
//     navCollapse.classList.add("hide");
//   });
// });
