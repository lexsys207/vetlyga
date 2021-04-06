$("body").on("mouseenter", ".menu__dropdown span", e => {
  if ($(window).width() > 767) {
    $(".menu__dropdown")
      .not($(e.currentTarget).parent())
      .removeClass("active");
    $(e.currentTarget)
      .parent()
      .toggleClass("active");
  }
});

$("body").on("click", ".menu__dropdown span", e => {
  if ($(window).width() <= 767) {
    $(e.currentTarget)
      .parent()
      .toggleClass("active")
      .find(".menu__content")
      .slideToggle();
  }
});

$("body").on("mouseleave", ".header", e => {
  if ($(window).width() >= 1025) {
    $(".menu__dropdown").removeClass("active");
  }
});

let aist = new Swiper(".aist .swiper-container", {
  effect: "fade",
  navigation: {
    nextEl: ".aist .swiper-button-next",
    prevEl: ".aist .swiper-button-prev"
  },
  pagination: {
    el: ".aist .swiper-pagination"
  }
});

let ilich = new Swiper(".ilich .swiper-container", {
  effect: "fade",
  navigation: {
    nextEl: ".ilich .swiper-button-next",
    prevEl: ".ilich .swiper-button-prev"
  },
  pagination: {
    el: ".ilich .swiper-pagination"
  }
});

let fish = new Swiper('.modal[data-modal="fish"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="fish"] .swiper-button-next',
    prevEl: '.modal[data-modal="fish"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="fish"] .swiper-pagination'
  }
});

let forest = new Swiper('.modal[data-modal="forest"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="forest"] .swiper-button-next',
    prevEl: '.modal[data-modal="forest"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="forest"] .swiper-pagination'
  }
});

let history = new Swiper('.modal[data-modal="history"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="history"] .swiper-button-next',
    prevEl: '.modal[data-modal="history"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="history"] .swiper-pagination'
  }
});

let bich = new Swiper('.modal[data-modal="bich"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="bich"] .swiper-button-next',
    prevEl: '.modal[data-modal="bich"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="bich"] .swiper-pagination'
  }
});

let hunting = new Swiper('.modal[data-modal="hunting"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="hunting"] .swiper-button-next',
    prevEl: '.modal[data-modal="hunting"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="hunting"] .swiper-pagination'
  }
});

let chif = new Swiper('.modal[data-modal="chif"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="chif"] .swiper-button-next',
    prevEl: '.modal[data-modal="chif"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="chif"] .swiper-pagination'
  }
});

let tenis = new Swiper('.modal[data-modal="tenis"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="tenis"] .swiper-button-next',
    prevEl: '.modal[data-modal="tenis"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="tenis"] .swiper-pagination'
  }
});

let bbq = new Swiper('.modal[data-modal="bbq"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="bbq"] .swiper-button-next',
    prevEl: '.modal[data-modal="bbq"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="bbq"] .swiper-pagination'
  }
});

let expidition = new Swiper(
  '.modal[data-modal="expidition"] .swiper-container',
  {
    effect: "fade",
    navigation: {
      nextEl: '.modal[data-modal="expidition"] .swiper-button-next',
      prevEl: '.modal[data-modal="expidition"] .swiper-button-prev'
    },
    pagination: {
      el: '.modal[data-modal="expidition"] .swiper-pagination'
    }
  }
);

let bath = new Swiper('.modal[data-modal="bath"] .swiper-container', {
  effect: "fade",
  navigation: {
    nextEl: '.modal[data-modal="bath"] .swiper-button-next',
    prevEl: '.modal[data-modal="bath"] .swiper-button-prev'
  },
  pagination: {
    el: '.modal[data-modal="bath"] .swiper-pagination'
  }
});

// show modal
$("body").on("click", "[data-modal]:not(.modal)", e => {
  if (!$(".backdrop").hasClass("active")) $(".backdrop").addClass("active");
  //   $(".modal.active").removeClass("active");
  $(`.modal[data-modal="${$(e.currentTarget).attr("data-modal")}"]`).addClass(
    "active"
  );

  //   if ($(e.currentTarget).attr("data-modal") === "thanks") {
  //     setTimeout(() => {
  //       $(".modal.active")
  //         .find("svg")
  //         .addClass("animate");
  //     }, 100);
  //   }
});

// close modal events
let closeModal = () => {
  $(".backdrop").removeClass("active");
  $(".modal").removeClass("active");
  $(".modal")
    .find("svg")
    .removeClass("animate");
};

$("body").on("click", ".modal__close, .modal .close", closeModal);

$("body").on("click", ".backdrop", e => {
  if ($(e.target)[0].className === "backdrop active") closeModal();
});

let closeModalPrivate = () => {
  $(".modal_private").removeClass("active");
  $(".modal")
    .find("svg")
    .removeClass("animate");
  if (!$(".modal").hasClass("active")) {
    $(".backdrop").removeClass("active");
  }
};

let closeModalPrice = () => {
  $(".modal_price").removeClass("active");
  $(".modal")
    .find("svg")
    .removeClass("animate");
  if (!$(".modal_private").hasClass("active")) {
    $(".backdrop").removeClass("active");
  }
};

$("body").on(
  "click",
  ".modal__close_private, .modal_private .close",
  closeModalPrivate
);

$("body").on(
  "click",
  ".modal__close_price, .modal_price .close",
  closeModalPrice
);

$("body").on("click", ".choice, .modal_private .close", closeModalPrivate);

// close modal on press ESC
$(document).keyup(e => {
  if (e.keyCode === 27 && $(".backdrop").hasClass("active")) closeModal();
});

$('input[name="phone"]').mask("+7 000 000 00 00", {
  placeholder: "+7 ___ ___ __ __"
});
$('input[name="date"]').mask("00/00/0000", { placeholder: "__ / __ / ____" });
$('input[name="passport"]').mask("00/00/0000", {
  placeholder: "__ / __ / ____"
});
$('input[name="number"]').mask("00 00 000000", { placeholder: "XX XX YYYYYY" });

$("body").on("click", ".minus", e => {
  if (
    $(e.currentTarget)
      .parent()
      .find("input")
      .val() > 0
  ) {
    $(e.currentTarget)
      .parent()
      .find("input")
      .val(
        $(e.currentTarget)
          .parent()
          .find("input")
          .val() - 1
      );
  }
});

$("body").on("click", ".plus", e => {
  $(e.currentTarget)
    .parent()
    .find("input")
    .val(
      parseInt(
        $(e.currentTarget)
          .parent()
          .find("input")
          .val()
      ) + 1
    );
});

$("body").on("change", "#dr", e => {
  console.log("object");
  $(e.currentTarget)
    .closest(".modal__col")
    .next(".hide")
    .slideToggle()
    .css("display", "flex");
});

$(".modal").addClass("init");

let initMobileMenu = () => {
  if ($(window).width() <= 767 && $(".hamburger").length === 0) {
    $(".header .container").append(
      '<div class="hamburger"><span></span></div>'
    );
    $(".menu").append(
      '<div class="mobile"><div class="phones"><a href="tel:+79307191757">+7 930 719 17 57</a><a href="tel:+79601828406">+7 960 182 84 06</a></div> <a href="javascript:void(0)" class="btn">Забронировать</a></div>'
    );
  } else if ($(window).width() > 767 && $(".hamburger").length > 0) {
    $(".hamburger").remove();
  }
};

initMobileMenu();
$(window).on("resize", initMobileMenu);

$("body").on("click", ".hamburger", e => {
  $(e.currentTarget).toggleClass("active");
  $(".menu").toggleClass("active");
});

$("body").on("click", ".close-menu", () => {
  $(".hamburger").toggleClass("active");
  $(".menu").removeClass("active");
});

// Overflow
let openMenu = document.querySelector(".hamburger");

openMenu.onclick = function() {
  if (openMenu.classList.contains("active")) {
    document.querySelector("body").style.overflow = "scroll";
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }
};

$(function() {
  $(".lazy").lazy();
});
