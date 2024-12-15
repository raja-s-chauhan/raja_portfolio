"use strict";

// Spinner
let spinner = function () {
  setTimeout(function () {
    let spinnerElement = document.getElementById("spinner");
    if (spinnerElement) {
      spinnerElement.classList.remove("show");
    }
  }, 1);
};
spinner();

// Initiate the wowjs
new WOW().init();

// Navbar on scrolling
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 300) {
    navbar.style.display = "flex";
    navbar.style.opacity = "1";
  } else {
    navbar.style.display = "none";
    navbar.style.opacity = "0";
  }
});

// Smooth scrolling on the navbar links
let navbarLinks = document.querySelectorAll(".navbar-nav a");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let targetElement = document.querySelector(this.hash);
      let offset = 45;
      let targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      let parentNav = this.closest(".navbar-nav");
      if (parentNav) {
        let activeLink = parentNav.querySelector(".active");
        console.log("🚀 ~ file: main.js:47 ~ activeLink:", activeLink);
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        this.closest("a").classList.add("active");
      }
    }
  });
});

// Back to top button
window.addEventListener("scroll", function () {
  let backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

let backToTopButton = document.querySelector(".back-to-top");
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return false;
});

// Typed Initiate
let typedTextOutput = document.querySelector(".typed-text-output");
if (typedTextOutput) {
  let typedStrings = document.querySelector(".typed-text").textContent;
  let typed = new Typed(".typed-text-output", {
    strings: typedStrings.split(", "),
    typeSpeed: 100,
    backSpeed: 20,
    smartBackspace: false,
    loop: true,
  });
}

// Facts counter
let counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
counterElements.forEach(function (element) {
  let delay = element.getAttribute("data-delay") || 10;
  let time = element.getAttribute("data-time") || 2000;
  setTimeout(function () {
    let count = 0;
    let target = parseInt(element.textContent);
    let increment = Math.ceil(target / (time / delay));
    let counter = setInterval(function () {
      count += increment;
      element.textContent = count;
      if (count >= target) {
        element.textContent = target;
        clearInterval(counter);
      }
    }, delay);
  }, delay);
});

// Skills
let skillElements = document.querySelectorAll(".skill");
skillElements.forEach(function (skill) {
  let waypoint = new Waypoint({
    element: skill,
    handler: function () {
      let progressBar = skill.querySelector(".progress .progress-bar");
      progressBar.style.width = progressBar.getAttribute("aria-valuenow") + "%";
    },
    offset: "80%",
  });
});

// handle form
const handleSubmitForm = (e) => {
  e.preventDefault();
  console.log("hello");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let errorMessage = "";
  let myEmail = "raja.chauhan2797@gmail.com";

  if (!name) {
    errorMessage = "Please enter your name";
  } else if (!email) {
    errorMessage = "Please enter an email address";
  } else if (!subject) {
    errorMessage = "Please enter the subjet of email";
  } else if (!message) {
    errorMessage = "Please enter message in the mail body";
  } else {
    errorMessage = "";
  }

  errorMessage &&
    Toastify({
      text: errorMessage,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      positionLeft: true, // `true` or `false`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();

  if (!errorMessage) {
    console.log("dsfsd");
    let mailtoLink =
      "mailto:" +
      myEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(message);

    // Open the email client when the button is clicked
    window.location.href = mailtoLink;
  }
};
