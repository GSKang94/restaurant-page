import navBar from "./navBar";

let menuPage = () => {
  let content = document.getElementById("content");

  let menuMain = document.createElement("div");
  menuMain.setAttribute("id", "menuMain");

  let menu1 = document.createElement("div");
  menu1.setAttribute("id", "menu1");

  menu1.innerHTML = `
  <h1>Main course</h1>
<ul>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Special hamburger
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
</ul>
  `;

  let menu2 = document.createElement("div");
  menu2.setAttribute("id", "menu2");
  menu2.innerHTML = `
  <h1>Drinks</h1>
<ul>
    <li>Chocolate milkshake
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Chocolate milkshake
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Chocolate milkshake
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Chocolate milkshake
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
    <li>Chocolate milkshake
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam nostrum ad ducimus quis </p>
    </li>
</ul>
  `;

  let backgroundMenu = document.createElement("div");
  backgroundMenu.setAttribute("id", "backgroundMenu");

  menuMain.append(menu1, menu2, backgroundMenu);

  menuMain.classList.add("no-fade", "faded-out");

  requestAnimationFrame(() => {
    menuMain.classList.remove("faded-out");
  });

  content.append(navBar(), menuMain);
  return content;
};

export default menuPage;
