import navBar from "./navBar";

let homePage = () => {
  let content = document.getElementById("content");
  let background = document.createElement("div");
  background.setAttribute("id", "background");

  content.append(navBar(), background);
  return content;
};

export default homePage;

// import mainPic from "../assets/mainPic.jpg";
// let homePic = new Image();
// homePic.src = mainPic;
// homePic.setAttribute("id", "homePic");
