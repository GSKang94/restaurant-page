import navBar from "./navBar";

let menuPage = () => {
  let content = document.getElementById("content");

  let menuMain = document.createElement("div");
  menuMain.setAttribute("id", "menuMain");

  let container = document.createElement("div");
  container.setAttribute("id", "container");

  menuMain.append(container);

  content.append(navBar(), menuMain);
  return content;
};

export default menuPage;
