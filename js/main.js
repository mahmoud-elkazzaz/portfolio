const menuBtn = $(".menu-btn");
const hamburger = $(".menu-btn_burger");
const nav = $(".nav");
const navMenu = $(".nav-menu");
const navItems = $(".nav-menu_item");
const navLinks = $(".nav-menu_link");

let showMenu = false;

window.addEventListener("scroll", function () {
  if (window.scrollY !== 0) {
    navLinks.addClass("navLinksScroll");
    navMenu.addClass("navMenuScroll");
  } else {
    navLinks.removeClass("navLinksScroll");
    navMenu.removeClass("navMenuScroll");
  }
});

toggleMenu = () => {
  if (!showMenu) {
    hamburger.addClass("open");
    nav.addClass("open");
    navMenu.addClass("open");
    navItems.addClass("open");

    showMenu = true;
  } else {
    hamburger.removeClass("open");
    nav.removeClass("open");
    navMenu.removeClass("open");
    navItems.removeClass("open");

    showMenu = false;
  }
};
menuBtn.on("click", toggleMenu);
//
