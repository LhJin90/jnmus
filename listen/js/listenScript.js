/* content tab */
contentTab();
orcheContentTab();
musicalContentTab();
koreaContentTab();
/* opera */
CarmenInformTab();
magicInformTab();
turandotInformTab();
/* orchestra */
fantasyInformTab();
desInformTab();
seasonformTab();
/* musical */
hamiltonIformTab();
wickedIformTab();
mdIformTab();
/* korea */
oceanIformTab();
chungIformTab();
sujaeIformTab();
/* function All */
allTab();
function allTab() {
  let tabMenu = document.querySelectorAll(".tab_menu li"),
    tabContent = document.querySelectorAll(".content_inner");
  console.log(tabContent);
  tabMenu.forEach(function (item, idx) {
    item.addEventListener("click", function (x) {
      x.preventDefault();
      showContent(idx);
      for (let j = 0; j < tabMenu.length; j++) {
        tabMenu[j].classList.remove("up");
        x.target.classList.add("up");
      }
    });
  });
  function showContent(num) {
    tabContent.forEach(function (item) {
      item.style.display = "none";
    });
    tabContent[num].style.display = "block";
  }
}
/* contentTab */
function contentTab() {
  let tabMenu = document.querySelectorAll(".omc_tab li a"),
    tabContent = document.querySelectorAll(
      ".omc_inner .main_content_elemental"
    );
  console.log(tabContent);
  tabMenu.forEach(function (item, idx) {
    item.addEventListener("click", function (x) {
      x.preventDefault();
      showContent(idx);
      for (let j = 0; j < tabMenu.length; j++) {
        tabMenu[j].classList.remove("active");
        x.target.classList.add("active");
      }
    });
  });
  function showContent(num) {
    tabContent.forEach(function (item) {
      item.style.display = "none";
    });
    tabContent[num].style.display = "block";
  }
}
function orcheContentTab() {
  let tabMenu = document.querySelectorAll(".orche_tab li a"),
    tabContent = document.querySelectorAll(
      ".orche_inner .main_content_elemental"
    );
  console.log(tabContent);
  tabMenu.forEach(function (item, idx) {
    item.addEventListener("click", function (x) {
      x.preventDefault();
      showContent(idx);
      for (let j = 0; j < tabMenu.length; j++) {
        tabMenu[j].classList.remove("active");
        x.target.classList.add("active");
      }
    });
  });
  function showContent(num) {
    tabContent.forEach(function (item) {
      item.style.display = "none";
    });
    tabContent[num].style.display = "block";
  }
}
function musicalContentTab() {
  let tabMenu = document.querySelectorAll(".musical_tab li a"),
    tabContent = document.querySelectorAll(
      ".musical_inner .main_content_elemental"
    );
  console.log(tabContent);
  tabMenu.forEach(function (item, idx) {
    item.addEventListener("click", function (x) {
      x.preventDefault();
      showContent(idx);
      for (let j = 0; j < tabMenu.length; j++) {
        tabMenu[j].classList.remove("active");
        x.target.classList.add("active");
      }
    });
  });
  function showContent(num) {
    tabContent.forEach(function (item) {
      item.style.display = "none";
    });
    tabContent[num].style.display = "block";
  }
}
function koreaContentTab() {
  let tabMenu = document.querySelectorAll(".korea_tab li a"),
    tabContent = document.querySelectorAll(
      ".korea_inner .main_content_elemental"
    );
  console.log(tabContent);
  tabMenu.forEach(function (item, idx) {
    item.addEventListener("click", function (x) {
      x.preventDefault();
      showContent(idx);
      for (let j = 0; j < tabMenu.length; j++) {
        tabMenu[j].classList.remove("active");
        x.target.classList.add("active");
      }
    });
  });
  function showContent(num) {
    tabContent.forEach(function (item) {
      item.style.display = "none";
    });
    tabContent[num].style.display = "block";
  }
}
/* el Tab */
/* opera */
function magicInformTab() {
  let tabMenu = document.querySelectorAll(".magic_list li a"),
    tabContent = document.querySelectorAll(".magic_content .list_content");
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
}
function CarmenInformTab() {
  let tabMenu = document.querySelectorAll(".carmen_list li a"),
    tabContent = document.querySelectorAll(".carmen_content .list_content");
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
}
function turandotInformTab() {
  let tabMenu = document.querySelectorAll(".turandot_list li a"),
    tabContent = document.querySelectorAll(".turandot_content .list_content");
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
}
/* orchestra */
function fantasyInformTab() {
  let tabMenu = document.querySelectorAll(".fantasy_list li a"),
    tabContent = document.querySelectorAll(".fantasy_content .list_content");
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
}
function desInformTab() {
  let tabMenu = document.querySelectorAll(".des_list li a"),
    tabContent = document.querySelectorAll(".des_content .list_content");
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
}
function seasonformTab() {
  let tabMenu = document.querySelectorAll(".four_list li a"),
    tabContent = document.querySelectorAll(".four_content .list_content");
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
}
/* musical */
function hamiltonIformTab() {
  let tabMenu = document.querySelectorAll(".hamliton_list li a"),
    tabContent = document.querySelectorAll(".hamilton_content .list_content");
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
}
function wickedIformTab() {
  let tabMenu = document.querySelectorAll(".wicked_list li a"),
    tabContent = document.querySelectorAll(".wicked_content .list_content");
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
}
function mdIformTab() {
  let tabMenu = document.querySelectorAll(".md_list li a"),
    tabContent = document.querySelectorAll(".md_content .list_content");
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
}
/* korea */
function oceanIformTab() {
  let tabMenu = document.querySelectorAll(".ocean_list li a"),
    tabContent = document.querySelectorAll(".ocean_content .list_content");
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
}
function chungIformTab() {
  let tabMenu = document.querySelectorAll(".chung_list li a"),
    tabContent = document.querySelectorAll(".chung_content .list_content");
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
}
function sujaeIformTab() {
  let tabMenu = document.querySelectorAll(".sujae_list li a"),
    tabContent = document.querySelectorAll(".sujae_content .list_content");
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
}
