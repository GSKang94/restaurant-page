import navBar from "./navBar";

let contactPage = () => {
  let content = document.getElementById("content");

  let contactMain = document.createElement("div");
  contactMain.setAttribute("id", "contactMain");

  contactMain.innerHTML = `
  <div id="map">
    <iframe
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDBniwsbislHNaKRCHke7-qjZZMxv69F7c
        &q=winnipeg+UOM">
    </iframe>
  </div>
  `;

  content.append(navBar(), contactMain);
  return content;
};

export default contactPage;
