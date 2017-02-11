;(function(){
var userLink = document.querySelector(".login");
var  linkMap = document.querySelector(".js-open-map");
var    popup = document.querySelector(".modal-content");
var popupMap = document.querySelector(".modal-content-map");
var mapClose = popupMap.querySelector(".modal-content-close");
var    close = document.querySelector(".modal-content-close");
var    login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var     form = popup.querySelector("form");
var  storage = localStorage.getItem("login");
var  openMap = document.querySelector(".modal-content-map");
var  overlay = document.querySelector(".modal-overlay")

  userLink.addEventListener("click", function(event) {
    event.preventDefault();
      popup.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
      if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add("modal-error");
      } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
      }
    }
  });

  linkMap.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-content-show");
    popupMap.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    popupMap.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupMap.classList.contains("modal-content-show")) {
      event.preventDefault();
      popupMap.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
      }
    }
  });
  ymaps.ready(init);
  var myMap,
      myPlacemark;  
   function init(){     
    myMap = new ymaps.Map("map", {
         center: [59.938527, 30.315737],
         controls: [],
         zoom: 15
    });
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([59.938592, 30.323000], {}, {
      iconLayout: 'default#image'
    });            
    myMap.geoObjects.add(myPlacemark);
    }
})();