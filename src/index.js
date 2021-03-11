import homePage from './components/homePage';
import contact from './components/contact';

console.log({ contact });
// contact.addEventListener("click", () => {
//     console.log('Working');
// })


let content = document.getElementById("content");

content.appendChild(homePage());

document.body.appendChild(content);