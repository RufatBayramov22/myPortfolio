///header
const dropMenu = document.querySelector("#dropMenu");

dropMenu.addEventListener("click", () => {
  document.querySelector(".dropDown").classList.toggle("isOpen");
});

const dropColumn = document.querySelector("#myBtn");

dropColumn.addEventListener("click", () => {
  document.querySelector(".column").classList.toggle("active");
});
//slider

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///tabs services

Array.from(document.querySelectorAll(".btn")).filter((item) => {
  item.onclick = () => {
    Array.from(document.querySelectorAll(".tabBody")).filter((data) => {
      if (item.id === data.id) {
        data.classList.toggle("active");
        data.classList.add("active");
      } else {
        data.classList.remove("active");
      }
    });
  };
});

//accardion

function myFunction(id) {
  let accordionBody = Array.from(document.querySelectorAll(".accordionBody"));
  accordionBody.filter((item) => {
    if (item.id == id) {
      item.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  });
}

//form

const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const errorElement = document.querySelector(".error");
const textarea = document.querySelector("#textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let msg = [];
  if (userName.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Username is not set!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (email.value.length < 4) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "E-mail is not set!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (password.value.length < 8) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The Password should consist of 8 elemenets !",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (textarea.value.length < 10) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Message is not set!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your request has been accepted",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
});

const data = [
  {
    id: 1,
    image: "./assets/images/cardImg/dennis-ritchie.png",
    title: "Learn by doing",
    description:
      "The only way to learn a new programming language is by writing programs in it. ",
    userName: "Dennis Ritchie",
  },
  {
    id: 2,
    image: "./assets/images/cardImg/futbol.png.png",
    title: "Futbol",
    description:
      "Football or soccer as the game is called in some parts of the world has a long history.  ",
    userName: "	Edson Arantis du Nasimentu",
  },
  {
    id: 3,
    image: "./assets/images/cardImg/tableTennis.png",
    title: "Table-Tennis",
    description:
      "Table tennis, also called trademark Ping-Pong, ball game similar in principle to lawn tennis and played ",
    userName: "Ma-Lun",
  },
];

data.map((item) => {
  let cardBox = document.querySelector(".cardBox");
  cardBox.innerHTML += ` 
    <div class="card" key="${item.id}">
    <div class="cardImg">
      <img src="${item.image}" alt="" />
    </div>
    <div class="cardInfo">
      <h2 class="cardTitle">${item.title}</h2>
      <div class="quote">
        <h3>
          ${item.description}
        </h3>
      </div>
      <div class="name">
        <h3 class="name">${item.userName}</h3>
      </div>
    </div>
  </div>
   `;
});
