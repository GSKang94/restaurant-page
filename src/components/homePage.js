import navBar from "./navBar";
import mainPic from "../assets/mainPic.jpg";

let homePage = () => {
  let content = document.getElementById("content");

  let homePic = new Image();
  homePic.src = mainPic;
  homePic.setAttribute("id", "homePic");

  content.appendChild(navBar());
  content.appendChild(homePic);
  return content;
};

export default homePage;
