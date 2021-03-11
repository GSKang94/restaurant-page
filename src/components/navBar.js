import logoImg from "../assets/logo.jpg";

let navBar = () => {
  let header = document.createElement("header");

  let logo = new Image(70, 70);
  logo.src = logoImg;
  logo.setAttribute("id", "logo");

  let h1 = document.createElement("h1");
  h1.innerText = "Desi-Dhaba";

  let contact = document.createElement("div");
  contact.innerText = "Contact";
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-contact", "contact");

  header.appendChild(logo);
  header.appendChild(h1);
  header.appendChild(contact);
  return header;
};

export default navBar;
