import navBar from "./navBar";

let contactPage = () => {
  let content = document.getElementById("content");

  let text = document.createElement("p");
  text.innerText = "Hello from contact page";

  content.append(navBar(), text);
  return content;
};

export default contactPage;
