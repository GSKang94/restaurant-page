import navBar from "./navBar";

let menuPage = () => {
  let content = document.getElementById("content");

  let text = document.createElement("p");
  text.innerText = "Hello from Menu page";

  content.append(navBar(), text);
  return content;
};

export default menuPage;
