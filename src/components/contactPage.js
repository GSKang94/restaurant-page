import navBar from "./navBar";

let contactPage = () => {
  let content = document.getElementById("content");

  let contactMain = document.createElement("div");
  contactMain.setAttribute("id", "contactMain");

  contactMain.innerHTML = `
  
<form>
    <h1>Contact us</h1>
    <input id="name" type="text" placeholder="Your name*" required>
    <input id="email" type="email" placeholder="Your email*" required>
    <input id="phone" type="text" placeholder="Your phone">
    <textarea rows="5" columns="5" placeholder="message*"></textarea>
    <button type="submit" >Send message</button>
</form>
`;

  content.append(navBar(), contactMain);
  contactMain.classList.add("no-fade", "faded-out");
  requestAnimationFrame(() => {
    contactMain.classList.remove("faded-out");
  });
  return content;
};

export default contactPage;
