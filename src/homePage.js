import logoImg from './logo.jpg';
import './styles.less'

let homePage = () => {
    let header = document.createElement("header");
    let h1 = document.createElement("h1")
    h1.innerHTML = "Desi-Dhaba";

    let logo = new Image(100, 100);
    logo.src = logoImg;

    header.appendChild(h1)
    header.appendChild(logo)
    return header;
}



export default homePage;