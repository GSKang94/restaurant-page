import navBar from "./navBar";

let homePage = () => {
  let content = document.getElementById("content");

  let logo = document.createElement("div");
  logo.setAttribute("id", "logo");

  let background = document.createElement("div");
  background.setAttribute("id", "background");

  let homeBtn = document.createElement("div");
  homeBtn.setAttribute("id", "homeBtn");

  homeBtn.innerHTML = `
  <div>Order online</div>
  <div>Locations</div>
  `;

  let homeMain = document.createElement("div");
  homeMain.setAttribute("id", "homeMain");
  homeMain.append(logo, homeBtn, background);

  homeMain.classList.add("no-fade", "faded-out");

  requestAnimationFrame(() => {
    homeMain.classList.remove("faded-out");
  });

  content.append(navBar(), homeMain);
  return content;
};

export default homePage;
