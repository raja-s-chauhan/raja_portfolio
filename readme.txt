Third pparty lib used are as follows:

1) Google Web Fonts lib

 <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />

2) Icons style lib

 <!-- Icon Font Stylesheet -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />

3) CSS framework style
   <link href="css/bootstrap.min.css" rel="stylesheet" />


4) Toaster Message

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/toastify-js/1.6.1/toastify.min.js"
      integrity="sha512-79j1YQOJuI8mLseq9icSQKT6bLlLtWknKwj1OpJZMdPt2pFBry3vQTt+NZuJw7NSd1pHhZlu0s12Ngqfa371EA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/toastify-js/1.6.1/toastify.min.css"
      integrity="sha512-UiKdzM5DL+I+2YFxK+7TDedVyVm7HMp/bN85NeWMJNYortoll+Nd6PU9ZDrZiaOsdarOyk9egQm6LOJZi36L2g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

5) Animate.css => pre written css code for animation.

6) wow => animate while scrooling


Component List 

1) Loader Spinner => 
    used setTimeout which remove show class from spinner div after 1 second
    css used => 
#spinner {
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease-out, visibility 0s linear .5s;
    z-index: 99999;
}

#spinner.show {
    transition: opacity .5s ease-out, visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
}

2) Navigation bar
    semantic tag used nav and dealy of 0.1 sec using wow.js

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


3) Back to top
let backToTopButton = document.querySelector(".back-to-top");
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return false;
});

4) Counter code
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


5) Dynamic typing 
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
