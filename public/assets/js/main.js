// SHOW SIDEBAR
const navMenu = document.getElementById("sidebar");
navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
  navLinks = document.querySelectorAll(".nav__link");

// SIDEBAR SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

// SIDEBAR HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");

  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
});

// SKILLS TABS

const tabs = document.querySelectorAll("[data-target]");
tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

// MIXITUP FILTER PORTFOLIO
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 500,
  },
});

// link active work
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((L) => L.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((L) => L.addEventListener("click", activeWork));

// Work Popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
  console.log("opened");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// SERVICES MODAL
const modalView = document.querySelectorAll(".services__modal"),
  modelBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalView[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloses) => {
  modalCloses.addEventListener("click", () => {
    modalView.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

//  SWIPPER TESTIMONIAL
// let swiper = new Swiper(".testimonials__container", {
//     spaceBetween: 24,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

// INPUT ANIMATION
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

// form contact
// document.querySelector('.contact-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita il comportamento predefinito del form

//   const name = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const message = document.getElementById('message').value;

//   const formData = {
//     name: name,
//     email: email,
//     message: message,
//     phone: phone,
//   };

//   fetch('https://us-central1-your-project-id.cloudfunctions.net/sendEmail', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       alert('Email inviata con successo!');
//     } else {
//       alert('Errore nell\'invio dell\'email.');
//     }
//   })
//   .catch(error => {
//     console.error('Errore:', error);
//     alert('Errore nell\'invio dell\'email.');
//   });
// });
