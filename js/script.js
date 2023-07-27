var btn = document.querySelector(".btn-gnb");
var gnb = document.getElementById("gnb");
var body = document.querySelector("html");
console.log(gnb);
btn.addEventListener("click", function () {
  gnb.classList.toggle("on");
  if (gnb.classList.contains("on")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

// 스크롤 막는 함수
function disableScroll() {
  // 현재 스크롤 위치 저장
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // 스크롤 위치 고정 및 스크롤 막기
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
// 미디어 쿼리 변경시 스크롤 허용
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    enableScroll();
    gnb.classList.remove("on");
  }
});
// // 스크롤 허용 함수
function enableScroll() {
  window.onscroll = null;
}
/* tab */
let tabMenu = document.querySelectorAll(".tab_menu li a"),
  tabContent = document.querySelectorAll(".listen_slide_box");
console.log(tabContent);
tabMenu.forEach(function (item, idx) {
  item.addEventListener("click", function (x) {
    x.preventDefault();
    showContent(idx);
  });
});
function showContent(num) {
  tabContent.forEach(function (item) {
    item.style.display = "none";
  });
  tabContent[num].style.display = "block";
}
/* notice */
let noticeWrap = document.querySelector(".slide_list"),
  prevBtn = document.querySelector(".notice_prev"),
  nextBtn = document.querySelector(".notice_next");

prevBtn.addEventListener("click", function () {
  noticeWrap.style.left = -108 + "%";
});
nextBtn.addEventListener("click", function () {
  noticeWrap.style.left = 0;
});
/* listen */
operaSlide();
orchestraSlide();
musicalSlide();
koreaSlide();

function operaSlide() {
  let slideWrapper = document.querySelector(".slide_opera"),
    slideContainer = document.querySelector(".opera_slide"),
    slides = slideContainer.querySelectorAll(".opera_slide li"), //slider
    startIndex = 0,
    btnPrev = document.querySelector(".prev"),
    btnNext = document.querySelector(".next"),
    slideCount = slides.length, //slides 개수
    slideWidth = 1071,
    pager = slideWrapper.querySelector(".pager"),
    slideMargin = 10,
    pagerHtml = "",
    pagerBtn = "";
  console.log(slideWidth);

  function moveSlide(idx) {
    slideContainer.style.left = -idx * (slideWidth + slideMargin) + "px";
    startIndex = idx;
  }
  btnNext.addEventListener("click", function (e) {
    if (startIndex < slideCount - 1) {
      moveSlide(startIndex + 1);
    } else if (startIndex == slideCount) {
      moveSlide(0);
    }
  });
  btnPrev.addEventListener("click", function (w) {
    if (startIndex > 0) {
      moveSlide(startIndex - 1);
    } else {
      moveSlide(slideCount - 1);
    }
  });
}
function musicalSlide() {
  let slideWrapper = document.querySelector(".slide_musical"),
    slideContainer = document.querySelector(".musical_slide"),
    slides = slideContainer.querySelectorAll(".musical_slide li"), //slider
    startIndex = 0,
    btnPrev = document.querySelector(".prev_musical"),
    btnNext = document.querySelector(".next_musical"),
    slideCount = slides.length, //slides 개수
    slideWidth = 1071,
    pager = slideWrapper.querySelector(".pager"),
    slideMargin = 10,
    pagerHtml = "",
    pagerBtn = "";
  console.log(slideWidth);

  function moveSlide(idx) {
    slideContainer.style.left = -idx * (slideWidth + slideMargin) + "px";
    startIndex = idx;
  }
  btnNext.addEventListener("click", function (e) {
    if (startIndex < slideCount - 1) {
      moveSlide(startIndex + 1);
    } else if (startIndex == slideCount) {
      moveSlide(0);
    }
  });
  btnPrev.addEventListener("click", function (w) {
    if (startIndex > 0) {
      moveSlide(startIndex - 1);
    } else {
      moveSlide(slideCount - 1);
    }
  });
}
function orchestraSlide() {
  let slideWrapper = document.querySelector(".slide_orchestra"),
    slideContainer = document.querySelector(".orchestra_slide"),
    slides = slideContainer.querySelectorAll(".orchestra_slide li"), //slider
    startIndex = 0,
    btnPrev = document.querySelector(".prev_orchestra"),
    btnNext = document.querySelector(".next_orchestra"),
    slideCount = slides.length, //slides 개수
    slideWidth = 1071,
    pager = slideWrapper.querySelector(".pager"),
    slideMargin = 10,
    pagerHtml = "",
    pagerBtn = "";
  console.log(slideWidth);

  function moveSlide(idx) {
    slideContainer.style.left = -idx * (slideWidth + slideMargin) + "px";
    startIndex = idx;
  }
  btnNext.addEventListener("click", function (e) {
    if (startIndex < slideCount - 1) {
      moveSlide(startIndex + 1);
    } else if (startIndex == slideCount) {
      moveSlide(0);
    }
  });
  btnPrev.addEventListener("click", function (w) {
    if (startIndex > 0) {
      moveSlide(startIndex - 1);
    } else {
      moveSlide(slideCount - 1);
    }
  });
}
function koreaSlide() {
  let slideWrapper = document.querySelector(".slide_korea"),
    slideContainer = document.querySelector(".korea_slide"),
    slides = slideContainer.querySelectorAll(".korea_slide li"), //slider
    startIndex = 0,
    btnPrev = document.querySelector(".prev_korea"),
    btnNext = document.querySelector(".next_korea"),
    slideCount = slides.length, //slides 개수
    slideWidth = 1071,
    pager = slideWrapper.querySelector(".pager"),
    slideMargin = 10,
    pagerHtml = "",
    pagerBtn = "";
  console.log(slideWidth);

  function moveSlide(idx) {
    slideContainer.style.left = -idx * (slideWidth + slideMargin) + "px";
    startIndex = idx;
  }
  btnNext.addEventListener("click", function (e) {
    if (startIndex < slideCount - 1) {
      moveSlide(startIndex + 1);
    } else if (startIndex == slideCount) {
      moveSlide(0);
    }
  });
  btnPrev.addEventListener("click", function (w) {
    if (startIndex > 0) {
      moveSlide(startIndex - 1);
    } else {
      moveSlide(slideCount - 1);
    }
  });
}
