import navBar from "./navBar";
import mainPic from "../assets/mainPic.jpg";
let homePage = () => {
  let content = document.getElementById("content");

  let homePic = new Image(50 * 50);
  homePic.src = mainPic;

  content.appendChild(navBar());
  content.appendChild(homePic);
  return content;
};

export default homePage;
