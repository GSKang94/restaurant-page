let contactPage = () => {
  let content = document.getElementById("content");

  let text = document.createElement("p");
  text.innerText = "Hello from contact page";

  content.appendChild(navBar());
  content.appendChild(test);
  return content;
};

export default contactPage;
