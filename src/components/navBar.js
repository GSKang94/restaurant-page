import logoImg from "../assets/logo.jpg";
import homePage from "./homePage";
import contact from "./contactPage";
import menu from "./menu";

let navBar = () => {
  let header = document.createElement("header");

  let logo = new Image(70, 70);
  logo.src = logoImg;
  logo.setAttribute("id", "logo");

  let h1 = document.createElement("h1");
  h1.innerText = "Desi Dhaba";

  let navLinks = document.createElement("ul");
  navLinks.setAttribute("id", "navLinks");
  navLinks.innerHTML = `
  <li id='home'>Home</li>
  <li id='menu'>Menu</li>
  <li id='contact'>Contact</li>
`;

  navLinks.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "home":
        content.innerHTML = "";
        document.body.appendChild(homePage());
        break;
      case "menu":
        content.innerHTML = "";
        document.body.appendChild(menu());
        break;
      case "contact":
        content.innerHTML = "";
        document.body.appendChild(contact());
        break;
    }
  });
  header.append(logo, h1, navLinks);
  return header;
};

export default navBar;
