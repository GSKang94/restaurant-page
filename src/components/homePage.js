import navBar from "./navBar";

let homePage = () => {
  let content = document.getElementById("content");

  let logo = document.createElement("div");
  logo.setAttribute("id", "logo");

  content.append(navBar(), logo);
  return content;
};

export default homePage;
