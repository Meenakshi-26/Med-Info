const showpopupBtn = document.querySelector(".login-btn");
const hidepopupBtn = document.querySelector(".form-popup svg");
const formPopup = document.querySelector(".form-popup");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

//show form popup//
showpopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

//Hide form popup//
hidepopupBtn.addEventListener("click", () => showpopupBtn.click());

loginSignupLink.forEach(link =>{
  link.addEventListener("click", (e) =>{
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
  });
});

