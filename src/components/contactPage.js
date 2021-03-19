import navBar from "./navBar";

let contactPage = () => {
  let content = document.getElementById("content");

  let contactMain = document.createElement("div");
  contactMain.setAttribute("id", "contactMain");

  contactMain.innerHTML = `
  <h1>Contact us</h1>
<form>
    <label for="name-label">Name</label>
    <input id="name" type="text" placeholder="Enter your name" required>
    <label for="email-label">Email</label>
    <input id="email" type="email" placeholder="Enter your email" required>
</form>
  <div id="map">
    <iframe
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDBniwsbislHNaKRCHke7-qjZZMxv69F7c
        &q=winnipeg+pizza-pizza">
    </iframe>
  </div>
  `;

  content.append(navBar(), contactMain);
  return content;
};

export default contactPage;
