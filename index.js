const tabLinks = document.querySelectorAll(".tab-links");
const tabContent = document.querySelectorAll(".tab-content");
const sideMenu = document.getElementById('menuNav');

const openTab = (tabname) => {
  tabLinks.forEach((tab) => {
    tab.classList.remove("active-link");
  });
  tabContent.forEach((link) => {
    link.classList.remove("active-tab");
  });
  let element = event.currentTarget;
  element.classList.add("active-link");
  const tabName = document.getElementById(tabname);
  tabName.classList.add("active-tab");
};

const openMenu = () => {
    sideMenu.style.right = "0";
};

const closeMenu = () => {
    sideMenu.style.right = "-200px";
}