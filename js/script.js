var link = document.querySelector(".login-link");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var email = form.querySelector("[name=email]");
var password = form.querySelector("[name=password]");
console.log(email);

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(ev) {
  ev.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    email.value = storage;
    password.focus();
  } else {
    email.focus();
  }
});

close.addEventListener("click", function(ev) {
  ev.preventDefault;
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(ev) {
  if (!email.value || !password.value) {
    ev.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function(ev) {
  if (ev.keyCode == 27) {
    ev.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(ev) {
  ev.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener("click", function(ev) {
  ev.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(ev) {
  if (ev.keyCode == 27) {
    if (mapPopup.classList.contains("modal-show")) {
      ev.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});