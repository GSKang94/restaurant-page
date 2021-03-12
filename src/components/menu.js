import navBar from "./navBar";

let menuPage = () => {
  let content = document.getElementById("content");

  let menuMain = document.createElement("div");
  menuMain.setAttribute("id", "menuMain");
  menuMain.innerText = "Hello from contacts";

  content.append(navBar(), menuMain);
  return content;
};

export default menuPage;
