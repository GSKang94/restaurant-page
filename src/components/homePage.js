import logoImg from '../assets/logo.jpg';
import '../assets/styles.less'

let homePage = () => {
    let header = document.createElement("header");

    let logo = new Image(70, 70);
    logo.src = logoImg;

    let h1 = document.createElement("h1")
    h1.innerText = "Desi-Dhaba";

    let contact = document.createElement("div");
    contact.innerText = "Contact"
    contact.id = "contact";

    header.appendChild(logo)
    header.appendChild(h1)
    header.appendChild(contact)
    return header;
}



export default homePage;