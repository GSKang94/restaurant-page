import navBar from "./navBar";

let contactPage = () => {
  let content = document.getElementById("content");

  let contactMain = document.createElement("div");
  contactMain.setAttribute("id", "contactMain");
  contactMain.innerText = "Hello from contacts";

  content.append(navBar(), contactMain);
  return content;
};

export default contactPage;
