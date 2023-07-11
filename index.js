const tabLinks = document.querySelectorAll(".tab-links");
const tabContent = document.querySelectorAll(".tab-content");
const sideMenu = document.getElementById("menuNav");
const popMessage = document.getElementById("msg");

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
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbypQ3xlMr7uWdGQmep5N8QTc9I8yiVbIKBfx3x6Ckn1TvS0bJR-dimdR-qVgHs1U_eA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      popMessage.innerText = "Message sent successfully!";
      setTimeout(() => {
        popMessage.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
