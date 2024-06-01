const mainMenu = document.querySelector(".menu");

const header = document.querySelector(".head");

const filterBtn = document.getElementById("filter");

const searchBtn = document.getElementById("search-btn");

const searchBar = document.getElementById("search");

const cardContainer = document.querySelector(".container");

const genderContainer = document.createElement("div");
genderContainer.className = "select-gender";
genderContainer.innerHTML = `<h2>Choose A Category</h2>
<div class="btns">
  <button type="button">
    <div class="get-female card">
      <img src="./Images/female/ac8a89150dffe6a8feee64224a949090.jpg" alt="select">
      <div class="info">
        Female Attire
      </div>
    </div>
  </button>
  <button type="button">
    <div class="get-male card">
      <img src="./Images/male/alireza-zare-WjoQCjdPMIc-unsplash.jpg" alt="select">
      <div class="info">
        Male Attire
      </div>
    </div>
  </button>
</div>`;

const femaleCard = genderContainer.querySelector(".get-female");

const maleCard = genderContainer.querySelector(".get-male");

const colorFContainer = document.createElement("div");
colorFContainer.className = "select-colors-female";
colorFContainer.classList.add("select-colors");
colorFContainer.innerHTML = `<h2>Choose A Color</h2>
<div class="btns">
  <button type="button" id="white">
    <div class="get-white card">
      <!-- <img src="./Images/green/1.jpg" alt="select"> -->
      <div class="info">
        White
      </div>
    </div>
  </button>
  <button type="button" id="red">
    <div class="get-red card">
      <!-- <img src="./Images/red/1.jpg" alt="select"> -->
      <div class="info">
        Red
      </div>
    </div>
  </button>
  <button type="button" id="blue">
    <div class="get-blue card">
      <!-- <img src="./Images/blue/1.jpg" alt="select"> -->
      <div class="info">
        Blue
      </div>
    </div>
  </button>
  <button type="button" id="yellow">
    <div class="get-yellow card">
      <!-- <img src="./Images/yellow/1.jpg" alt="select"> -->
      <div class="info">
        Yellow
      </div>
    </div>
  </button>
</div>`;

const colorMContainer = document.createElement("div");
colorMContainer.className = "select-colors-male";
colorMContainer.classList.add("select-colors");
colorMContainer.innerHTML = `<h2>Choose a Color</h2>
<div class="btns">
  <button type="button" id="grey">
    <div class="card get-grey">
      <div class="info">Grey</div>
    </div>
  </button>
  <button type="button" id="black">
    <div class="card get-black">
      <div class="info">Black</div>
    </div>
  </button>
  <button type="button" id="cream">
    <div class="card get-cream">
      <div class="info">Cream</div>
    </div>
  </button>
  <button type="button" id="white">
    <div class="card get-white">
      <div class="info">White</div>
    </div>
  </button>
  <button type="button" id="blue">
    <div class="card get-blue">
      <div class="info">Blue</div>
    </div>
  </button>
  <button type="button" id="yellow">
    <div class="card get-yellow">
      <div class="info">Yellow</div>
    </div>
  </button>
  <button type="button" id="green">
    <div class="card get-green">
      <div class="info">Green</div>
    </div>
  </button>
</div>`;

const typeContainer = document.createElement("div");
typeContainer.className = "select-type";
typeContainer.innerHTML = `<h2>Choose a Type</h2>
<div class = "btns">
<button type="button" id="round">
  <div class="card">
    <div class="info">
      Round Neck T-shirt
    </div>
  </div>
</button>
<button type="button" id="hood">
  <div class="card">
    <div class="info">
      Hoodie
    </div>
  </div>
</button>
<button type="button" id="polo">
  <div class="card">
    <div class="info">
      Polo T-shirt
    </div>
  </div>
</button>
</div>`;

const cart = document.querySelector(".cart");

const checkOutMenu = document.querySelector(".c-menu");

const checkOutItems = document.querySelector(".cart-items");

const orderBtn = document.getElementById("order");

const cancelBtn = document.getElementById("cancel");

const closeBtn = document.getElementById("close");

const orderComplete = document.querySelector(".overlay");

const round = [
  {
    name: "Round grey T-shirt",
    price: 199,
    img: "/round/alireza-zare-WjoQCjdPMIc-unsplash.jpg",
  },
  {
    name: "Round black T-shirt",
    price: 299,
    img: "/round/faith-yarn-Wr0TpKqf26s-unsplash.jpg",
  },
  {
    name: "Round white T-shirt",
    price: 299,
    img: "/round/mediamodifier-fTDWpCxLA0k-unsplash.jpg",
  },
  {
    name: "Round blue T-shirt",
    price: 199,
    img: "/round/m-ghufanil-muta-ali-UkijHku-7kM-unsplash.jpg",
  },
  {
    name: "Round white T-shirt(F)",
    price: 299,
    img: "/female/ac8a89150dffe6a8feee64224a949090.jpg",
  },
  {
    name: "Round red T-shirt(F)",
    price: 199,
    img: "/female/photo-1523649455276-48bd8171dcec.avif",
  },
  {
    name: "Round yellow T-shirt(F)",
    price: 199,
    img: "/female/premium_photo-1689575249631-ae82a19adaf9.avif",
  },
];

const polo = [
  {
    name: "Polo black T-shirt",
    price: 499,
    img: "/polo/clement-vatte-f67Caxg3akg-unsplash.jpg",
  },
  {
    name: "Polo grey T-shirt",
    price: 399,
    img: "/polo/clement-vatte-Y-00g_VgQTc-unsplash.jpg",
  },
  {
    name: "Polo blue T-shirt",
    price: 299,
    img: "/polo/muhammad-abdullah-87fuAGjguA4-unsplash.jpg",
  },
  {
    name: "Polo green T-shirt",
    price: 499,
    img: "/polo/manny-moreno-LTo6ce3YkSc-unsplash.jpg",
  },
];

const hood = [
  {
    name: "Hoodie blue",
    price: 599,
    img: "/hoodies/waldo-kleyn-vtnhu9LgScs-unsplash.jpg",
  },
  {
    name: "Hoodie yellow",
    price: 399,
    img: "/hoodies/gab-mWSXyWe2H9Q-unsplash.jpg",
  },
  {
    name: "Hoodie green",
    price: 599,
    img: "/hoodies/the-ian-s9q_bn-uLhg-unsplash.jpg",
  },
  {
    name: "Hoodie cream",
    price: 599,
    img: "/hoodies/the-ian-ZCoqcrWp9GY-unsplash.jpg",
  },
  {
    name: "Hoodie white (F)",
    price: 599,
    img: "/female/photo-1526476148966-98bd039463ea.avif",
  },
  {
    name: "Hoodie blue (F)",
    price: 499,
    img: "/female/photo-1635796273083-93e4091d9712.avif",
  },
  {
    name: "Hoodie red (F)",
    price: 499,
    img: "/female/premium_photo-1689371957831-40f044457743.avif",
  },
];

const female = [
  {
    name: "Round white T-shirt(F)",
    price: 299,
    img: "/female/ac8a89150dffe6a8feee64224a949090.jpg",
  },
  {
    name: "Round red T-shirt(F)",
    price: 199,
    img: "/female/photo-1523649455276-48bd8171dcec.avif",
  },
  {
    name: "Hoodie white (F)",
    price: 599,
    img: "/female/photo-1526476148966-98bd039463ea.avif",
  },
  {
    name: "Hoodie blue (F)",
    price: 499,
    img: "/female/photo-1635796273083-93e4091d9712.avif",
  },
  {
    name: "Hoodie red (F)",
    price: 499,
    img: "/female/premium_photo-1689371957831-40f044457743.avif",
  },
  {
    name: "Round yellow T-shirt(F)",
    price: 199,
    img: "/female/premium_photo-1689575249631-ae82a19adaf9.avif",
  },
];
// ------------------------------------------------------------------------
const collection = [...round, ...polo, ...hood];
const male = collection.filter((item) => !item.name.includes("(F)"));
// ------------------------------------------------------------------------
// Type Filter & Gender Filter
const hoodiesMale = collection.filter(
  (item) => item.name.includes("Hoodie") && !item.name.includes("(F)")
);
const hoodiesFemale = collection.filter(
  (item) => item.name.includes("Hoodie") && item.name.includes("(F)")
);
const roundMale = collection.filter(
  (item) => item.name.includes("Round") && !item.name.includes("(F)")
);
const roundFemale = collection.filter(
  (item) => item.name.includes("Round") && item.name.includes("(F)")
);
const poloMale = collection.filter(
  (item) => item.name.includes("Polo") && !item.name.includes("(F)")
);
//--------------------------------------------------------------------------
// Price Filter
const low = collection.filter((item) => item.price < 300);
const mid = collection.filter((item) => item.price >= 300 && item.price < 500);
const high = collection.filter((item) => item.price >= 500);
// --------------------------------------------------------------------------
// Color Filter
const green = collection.filter((item) => item.name.includes("green"));
const red = collection.filter((item) => item.name.includes("red"));
const blue = collection.filter((item) => item.name.includes("blue"));
const yellow = collection.filter((item) => item.name.includes("yellow"));
const grey = collection.filter((item) => item.name.includes("grey"));
const cream = collection.filter((item) => item.name.includes("cream"));
const black = collection.filter((item) => item.name.includes("black"));
const white = collection.filter((item) => item.name.includes("white"));
// --------------------------------------------------------------------------
// Type & Color Filter
const poloblack = collection.filter(
  (item) => item.name.includes("black") && item.name.includes("Polo")
);
const pologrey = collection.filter(
  (item) => item.name.includes("grey") && item.name.includes("Polo")
);
const poloblue = collection.filter(
  (item) => item.name.includes("blue") && item.name.includes("Polo")
);
const pologreen = collection.filter(
  (item) => item.name.includes("green") && item.name.includes("Polo")
);
const roundwhite = collection.filter(
  (item) => item.name.includes("white") && item.name.includes("Round")
);
const roundred = collection.filter(
  (item) => item.name.includes("red") && item.name.includes("Round")
);
const roundblue = collection.filter(
  (item) => item.name.includes("blue") && item.name.includes("Round")
);
const roundyellow = collection.filter(
  (item) => item.name.includes("yellow") && item.name.includes("Round")
);
const hoodiewhite = collection.filter(
  (item) => item.name.includes("white") && item.name.includes("Hoodie")
);
const hoodieblue = collection.filter(
  (item) => item.name.includes("blue") && item.name.includes("Hoodie")
);
const hoodieyellow = collection.filter(
  (item) => item.name.includes("yellow") && item.name.includes("Hoodie")
);
const hoodiegreen = collection.filter(
  (item) => item.name.includes("green") && item.name.includes("Hoodie")
);
const hoodiecream = collection.filter(
  (item) => item.name.includes("cream") && item.name.includes("Hoodie")
);
const hoodieblack = collection.filter(
  (item) => item.name.includes("black") && item.name.includes("Hoodie")
);

// ----------------------------------------------------------------------
// Gender & Color Filter
const redFemale = collection.filter(
  (item) => item.name.includes("red") && item.name.includes("(F)")
);
const blueFemale = collection.filter(
  (item) => item.name.includes("blue") && item.name.includes("(F)")
);
const yellowFemale = collection.filter(
  (item) => item.name.includes("yellow") && item.name.includes("(F)")
);
const whiteFemale = collection.filter(
  (item) => item.name.includes("white") && item.name.includes("(F)")
);
const bluemale = collection.filter(
  (item) => item.name.includes("blue") && !item.name.includes("(F)")
);
// const redmale = collection.filter(
//   (item) => item.name.includes("red") && !item.name.includes("(F)")
// );
const yellowmale = collection.filter(
  (item) => item.name.includes("yellow") && !item.name.includes("(F)")
);
// const greenmale = collection.filter(
//   (item) => item.name.includes("green") && !item.name.includes("(F)")
// );
const creammale = collection.filter(
  (item) => item.name.includes("cream") && !item.name.includes("(F)")
);
const greymale = collection.filter(
  (item) => item.name.includes("grey") && !item.name.includes("(F)")
);
const blackmale = collection.filter(
  (item) => item.name.includes("black") && !item.name.includes("(F)")
);
const whitemale = collection.filter(
  (item) => item.name.includes("white") && !item.name.includes("(F)")
);
// -----------------------------------------------------------------------
// Female & Type & Color Filter
const redRoundfemale = collection.filter(
  (item) =>
    item.name.includes("red") &&
    item.name.includes("(F)") &&
    item.name.includes("Round")
);
const redHoodiefemale = collection.filter(
  (item) =>
    item.name.includes("red") &&
    item.name.includes("Hoodie") &&
    item.name.includes("(F)")
);
const blueHoodiefemale = collection.filter(
  (item) =>
    item.name.includes("blue") &&
    item.name.includes("(F)") &&
    item.name.includes("Hoodie")
);
const yellowRoundfemale = collection.filter(
  (item) =>
    item.name.includes("yellow") &&
    item.name.includes("(F)") &&
    item.name.includes("Round")
);
const whiteRoundfemale = collection.filter(
  (item) =>
    item.name.includes("white") &&
    item.name.includes("(F)") &&
    item.name.includes("Round")
);
const whiteHoodiefemale = collection.filter((item) => {
  item.name.includes("white") &&
    item.name.includes("(F)") &&
    item.name.includes("Hoodie");
});
// -----------------------------------------------------------------------
// Male & Type & Color Filter
const whiteRoundmale = collection.filter(
  (item) =>
    item.name.includes("white") &&
    !item.name.includes("(F)") &&
    item.name.includes("Round")
);
const yellowHoodiemale = collection.filter(
  (item) =>
    item.name.includes("yellow") &&
    !item.name.includes("(F)") &&
    item.name.includes("Hoodie")
);
const blueHoodiemale = collection.filter(
  (item) =>
    item.name.includes("blue") &&
    !item.name.includes("(F)") &&
    item.name.includes("Hoodie")
);
const bluePolomale = collection.filter(
  (item) =>
    item.name.includes("blue") &&
    !item.name.includes("(F)") &&
    item.name.includes("Polo")
);
const blueRoundmale = collection.filter(
  (item) =>
    item.name.includes("blue") &&
    !item.name.includes("(F)") &&
    item.name.includes("Round")
);
const greenHoodiemale = collection.filter(
  (item) =>
    item.name.includes("green") &&
    !item.name.includes("(F)") &&
    item.name.includes("Hoodie")
);
const greenPolomale = collection.filter(
  (item) =>
    item.name.includes("green") &&
    !item.name.includes("(F)") &&
    item.name.includes("Polo")
);
const greyPolomale = collection.filter(
  (item) =>
    item.name.includes("grey") &&
    !item.name.includes("(F)") &&
    item.name.includes("Polo")
);
const greyRoundmale = collection.filter(
  (item) =>
    item.name.includes("grey") &&
    !item.name.includes("(F)") &&
    item.name.includes("Round")
);
const creamHoodiemale = collection.filter(
  (item) => item.name.includes("cream") && !item.name.includes("(F)")
);
const blackRoundmale = collection.filter(
  (item) =>
    item.name.includes("black") &&
    !item.name.includes("(F)") &&
    item.name.includes("Round")
);
const blackPolomale = collection.filter(
  (item) =>
    item.name.includes("black") &&
    !item.name.includes("(F)") &&
    item.name.includes("Polo")
);
// -----------------------------------------------------------------------
let newArr = [];
function getFewCards(cards) {
  let fewCards = [];
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * cards.length);
    if (fewCards.includes(cards[random])) {
      i--;
      continue;
    } else {
      fewCards.push(cards[random]);
    }
  }
  return fewCards;
}

function createCard(cards) {
  cards.forEach((card) => {
    let getCardImg = card.img;
    let getCardName = card.name;
    let getCardPrice = card.price;
    const crd = document.createElement("div");
    crd.classList.add("card");
    crd.innerHTML = `<img src="./Images${getCardImg}" alt="" />
                    <div class="info">
                        <h4 class="c-name">${getCardName}</h4>
                        <div class="cost">
                            <h4>Price: &#8377;<span>${getCardPrice}</span></h4>
                            <button type="button" class="add">add to cart</button>
                        </div>
                    </div`;
    cardContainer.append(crd);
  });
}

createCard(getFewCards(collection));
removeDups(collection);

cart.onclick = function checkOut() {
  checkOutMenu.classList.toggle("active");
  mainMenu.classList.toggle("move");
  cardContainer.classList.toggle("move");
  header.classList.toggle("move");
};

cancelBtn.onclick = function () {
  checkOutMenu.classList.remove("active");
  mainMenu.classList.remove("move");
  cardContainer.classList.remove("move");
  header.classList.remove("move");
};

const menuItems = cardContainer.children;
function putInCart() {
  for (const item of menuItems) {
    const getAddBtn = item.querySelector(".add");

    if (getAddBtn) {
      getAddBtn.onclick = function () {
        if (!getAddBtn.classList.contains("added")) {
          const itemName = item.querySelector(".info h4").innerText;
          const itemPrice = item.querySelector(".cost h4 span").innerText;
          const itemImg = item.querySelector("img").src;

          const cartItemCount = 1;
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-create");
          cartItem.innerHTML = `<img src="${itemImg}" alt="">
         <div class="item-nm-cnt">
            <div style ="width:100%;font-size:13px;" class="name">${itemName}</div>
            <div class="price">
            cost: &#8377;<span>${itemPrice}</span>
            </div>
         </div>
         <div class="add_remove">
            <span class="material-symbols-outlined remove" onclick="decrease()">remove</span>
            <div class="no_of_added">${cartItemCount}</div>
            <span class="material-symbols-outlined add" onclick="increase()">add</span>
         </div>`;
          checkOutItems.append(cartItem);
          getAddBtn.classList.add("added");
          getAddBtn.innerText = "added";
          addToCart();
          updateCart();
        } else {
          return;
        }
      };
    }
  }
}
putInCart();

function updateCart() {
  const cartItems = checkOutMenu.children[1].children;
  for (const item of cartItems) {
    if (item.children[2].children[1].innerText < 1) {
      item.remove();
    }
    const rBtn = item.children[2].children[0];
    const aBtn = item.children[2].children[2];
    if (aBtn) {
      const price = parseInt(
        item.children[1].children[1].children[0].innerText
      );
      aBtn.onclick = function () {
        const count = parseInt(item.children[2].children[1].innerText);
        item.children[2].children[1].innerText = count + 1;
        item.children[1].children[1].children[0].innerText =
          price * (count + 1);
        console.log("count", count);
        if (count > 3) {
          aBtn.style.display = "none";
          aBtn.previousElementSibling.style.paddingRight = "20px";
          alert("Max Items Reached");
        }
        totalCost();
      };
    }
    if (rBtn) {
      const price = parseInt(
        item.children[1].children[1].children[0].innerText
      );
      rBtn.onclick = function () {
        const count = parseInt(item.children[2].children[1].innerText);

        if (count > 1) {
          item.children[2].children[1].innerText = count - 1;
          item.children[1].children[1].children[0].innerText =
            price * (count - 1);
          if (count < 6) {
            aBtn.style.display = "inline-block";
            aBtn.previousElementSibling.style.paddingRight = "0";
          }
          totalCost();
        } else {
          const menuItems = document.querySelectorAll(".card");
          for (const menuItem of menuItems) {
            if (item.children[0].src == menuItem.children[0].src) {
              menuItem.querySelector(".add").classList.remove("added");
              menuItem.querySelector(".add").innerText = "add to cart";
            }
          }
          removeFromCart();
          item.remove();
          totalCost();
        }
      };
    }
  }
}
const count = document.createElement("span");
count.innerHTML = 0;
function addToCart() {
  count.innerHTML = checkOutItems.children.length;
  count.classList.add("cart-count");
  if (count.innerHTML > 9) {
    count.style.fontSize = "14px";
  }
  header.appendChild(count);
  totalCost();
}

function removeFromCart() {
  count.innerHTML = checkOutItems.children.length - 1;
  count.classList.add("cart-count");
  if (count.innerHTML > 9) {
    count.style.fontSize = "14px";
  }
  header.appendChild(count);
}

function totalCost() {
  const cartItems = checkOutItems.children;
  let totalPrice = 0;
  for (const cItem of cartItems) {
    let cItemCost = parseInt(cItem.querySelector(".price span").innerText);
    totalPrice += cItemCost;
    checkOutMenu.children[0].innerText = `checkout: ${totalPrice}rs`;
  }
  if (cartItems.length === 0) {
    checkOutMenu.children[0].innerText = `CHECKOUT`;
  }
}

orderBtn.onclick = function () {
  if (checkOutItems.children.length === 0) {
    alert("Select an Item to Place a Order");
  } else {
    orderComplete.classList.add("active");
  }
};

closeBtn.onclick = function () {
  orderComplete.classList.remove("active");
  document.location.reload();
  searchBar.value = "";
};

function removeDups(c) {
  newArr.length = 0;
  const cardItemNames = cardContainer.querySelectorAll(".info .c-name");

  for (let i = 0; i < cardItemNames.length; i++) {
    if (!newArr.includes(cardItemNames[i].innerText)) {
      newArr.push(cardItemNames[i].innerText);
    } else {
      cardItemNames[i].parentElement.parentElement.remove();
    }
  }
}

function removeCartDups() {
  const cartItems = checkOutItems.children;
  for (let i = 0; i < cartItems.length; i++) {
    const cartItemName =
      cartItems[i].querySelector(".item-nm-cnt .name").innerText;
    if (!newArr.includes(cartItemName)) {
      newArr.push(cartItemName);
    } else {
      cartItems[i].remove();
    }
  }
}
const logo = header.querySelector("p");
logo.onclick = function () {
  cardContainer.innerHTML = "";
  cardContainer.append(createCard(getFewCards(collection)));
  putInCart();
  removeDups(collection);
  removeCartDups();
  cardContainer.lastChild.remove();
};
filterBtn.onclick = function () {
  cardContainer.innerHTML = "";
  filterBtn.style.animation = "none";
  filterBtn.id = "";
  cardContainer.appendChild(genderContainer);
};

femaleCard.onclick = function () {
  cardContainer.style.flexDirection = "row";
  cardContainer.children[0].remove();
  cardContainer.appendChild(typeContainer);
  const types = typeContainer.children[1].children;
  // types[types.length - 1].remove();
  const colors = colorFContainer.children[1].children;
  for (const type of types) {
    type.addEventListener("click", () => {
      cardContainer.innerHTML = "";
      if (type.id === "round") {
        cardContainer.innerHTML = "";
        cardContainer.appendChild(colorFContainer);
        for (const color of colors) {
          color.addEventListener("click", () => {
            cardContainer.innerHTML = "";
            if (color.id === "white") {
              createCard(whiteRoundfemale);
              removeDups(whiteRoundfemale);
            } else if (color.id === "red") {
              createCard(redRoundfemale);
              removeDups(redRoundfemale);
            } else if (color.id === "yellow") {
              createCard(yellowRoundfemale);
              removeDups(yellowRoundfemale);
            } else if (color.id === "blue") {
              cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
              filterBtn.style.animation = "blink 1s infinite";
              filterBtn.id = "active";
            }
            putInCart();
            removeCartDups();
          });
        }
      } else if (type.id === "hood") {
        cardContainer.innerHTML = "";
        cardContainer.appendChild(colorFContainer);
        for (const color of colors) {
          color.addEventListener("click", () => {
            cardContainer.innerHTML = "";
            if (color.id === "white") {
              createCard(whiteHoodiefemale);
              removeDups(whiteHoodiefemale);
            } else if (color.id === "blue") {
              createCard(blueHoodiefemale);
              removeDups(blueHoodiefemale);
            } else if (color.id === "red") {
              createCard(redHoodiefemale);
              removeDups(redHoodiefemale);
            } else if (
              color.id === "yellow" ||
              color.id === "green" ||
              color.id === "grey" ||
              color.id === "cream" ||
              color.id === "black"
            ) {
              cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
              filterBtn.style.animation = "blink 1s infinite";
              filterBtn.id = "active";
            }
            putInCart();
            removeCartDups();
          });
        }
      } else if (type.id === "polo") {
        cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
        filterBtn.style.animation = "blink 1s infinite";
        filterBtn.id = "active";
      }
    });
  }
};

maleCard.onclick = function () {
  cardContainer.style.flexDirection = "row";
  cardContainer.children[0].remove();
  cardContainer.appendChild(typeContainer);
  const types = typeContainer.children[1].children;
  const colors = colorMContainer.children[1].children;
  for (const type of types) {
    type.addEventListener("click", () => {
      cardContainer.innerHTML = "";
      if (type.id === "round") {
        cardContainer.innerHTML = "";
        cardContainer.appendChild(colorMContainer);
        for (const color of colors) {
          color.addEventListener("click", () => {
            cardContainer.innerHTML = "";
            if (color.id === "white") {
              createCard(whiteRoundmale);
              removeDups(whiteRoundmale);
            } else if (color.id === "black") {
              createCard(blackRoundmale);
              removeDups(blackRoundmale);
            } else if (color.id === "blue") {
              createCard(blueRoundmale);
              removeDups(blueRoundmale);
            } else if (color.id === "grey") {
              createCard(greyRoundmale);
              removeDups(greyRoundmale);
            } else if (
              color.id === "yellow" ||
              color.id === "red" ||
              color.id === "green" ||
              color.id === "cream"
            ) {
              cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
              filterBtn.style.animation = "blink 1s infinite";
              filterBtn.id = "active";
            }
            putInCart();
            removeCartDups();
          });
        }
      } else if (type.id === "hood") {
        cardContainer.innerHTML = "";
        cardContainer.appendChild(colorMContainer);
        for (const color of colors) {
          color.addEventListener("click", () => {
            cardContainer.innerHTML = "";
            if (color.id === "yellow") {
              createCard(yellowHoodiemale);
              removeDups(yellowHoodiemale);
            } else if (color.id === "blue") {
              createCard(blueHoodiemale);
              removeDups(blueHoodiemale);
            } else if (color.id === "green") {
              createCard(greenHoodiemale);
              removeDups(greenHoodiemale);
            } else if (color.id === "cream") {
              createCard(creamHoodiemale);
              removeDups(creamHoodiemale);
            } else if (
              color.id === "white" ||
              color.id === "red" ||
              color.id === "grey" ||
              color.id === "black"
            ) {
              cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
              filterBtn.style.animation = "blink 1s infinite";
              filterBtn.id = "active";
            }
            putInCart();
            removeCartDups();
          });
        }
      } else if (type.id === "polo") {
        cardContainer.innerHTML = "";
        cardContainer.appendChild(colorMContainer);
        for (const color of colors) {
          color.addEventListener("click", () => {
            cardContainer.innerHTML = "";
            if (color.id === "blue") {
              createCard(bluePolomale);
              removeDups(bluePolomale);
            } else if (color.id === "grey") {
              createCard(greyPolomale);
              removeDups(greyPolomale);
            } else if (color.id === "black") {
              createCard(blackPolomale);
              removeDups(blackPolomale);
            } else if (color.id === "green") {
              createCard(greenPolomale);
              removeDups(greenPolomale);
            } else if (
              color.id === "white" ||
              color.id === "red" ||
              color.id === "yellow" ||
              color.id === "cream"
            ) {
              cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
              filterBtn.style.animation = "blink 1s infinite";
              filterBtn.id = "active";
            }
            putInCart();
            removeCartDups();
          });
        }
      }
    });
  }
};
if (document.location.reload) {
  searchBar.value = "";
}
searchBar.focus();
searchBtn.addEventListener("click", () => {
  let val = searchBar.value.toLowerCase().split(" ");
  val.forEach((item) => {
    if (
      item === "tshirt" ||
      item === "t-shirt" ||
      item === "t shirt" ||
      item === "t-shirts" ||
      item === "t shirts" ||
      item === "tshirts" ||
      item === "shirt" ||
      item === "shirts"
    ) {
      val.splice(val.indexOf(item), 1);
    }
  });
  val = val.join("");
  if (val === "male") {
    val = "male";
  } else if (val === "female") {
    val = "female";
  } else if (val === "roundmale" || val === "maleround") {
    val = "roundmale";
  } else if (val === "roundfemale" || val === "femaleround") {
    val = "roundfemale";
  } else if (val === "hoodiemale" || val === "malehoodie") {
    val = "hoodiemale";
  } else if (val === "hoodiefemale" || val === "femalehoodie") {
    val = "hoodiefemale";
  } else if (val === "polomale" || val === "malepolo") {
    val = "polomale";
  } else if (val === "polofemale" || val === "femalepolo") {
    val = "polofemale";
  } else if (val === "femaleblue" || val === "bluefemale") {
    val = "femaleblue";
  } else if (val === "femalered" || val === "redfemale") {
    val = "femalered";
  } else if (val === "femaleyellow" || val === "yellowfemale") {
    val = "femaleyellow";
  } else if (val === "femalewhite" || val === "whitefemale") {
    val = "femalewhite";
  } else if (val === "femalegreen" || val === "greenfemale") {
    val = "femalegreen";
  } else if (val === "femaleblack" || val === "blackfemale") {
    val = "femaleblack";
  } else if (val === "maleblue" || val === "bluemale") {
    val = "maleblue";
  } else if (val === "malered" || val === "redmale") {
    val = "malered";
  } else if (val === "maleyellow" || val === "yellowmale") {
    val = "maleyellow";
  } else if (val === "malewhite" || val === "whitemale") {
    val = "malewhite";
  } else if (val === "malegreen" || val === "greenmale") {
    val = "malegreen";
  } else if (val === "maleblack" || val === "blackmale") {
    val = "maleblack";
  } else if (val === "malegrey" || val === "greymale") {
    val = "malegrey";
  } else if (val === "femalegrey" || val === "greyfemale") {
    val = "femalegrey";
  } else if (val === "malecream" || val === "creammale") {
    val = "malecream";
  } else if (val === "femalecream" || val === "creamfemale") {
    val = "femalecream";
  } else if (
    val === "round" ||
    val === "roundneck" ||
    val === "roundnecktshirt" ||
    val === "roundnecktshirts"
  ) {
    val = "round";
  } else if (val === "polo" || val === "polotshirt" || val === "polotshirts") {
    val = "polo";
  } else if (val === "hoodie" || val === "hoodies") {
    val = "hoodie";
  } else if (val === "roundred" || val === "redround") {
    val = "roundred";
  } else if (val === "roundyellow" || val === "yellowround") {
    val = "roundyellow";
  } else if (val === "roundwhite" || val === "whiteround") {
    val = "roundwhite";
  } else if (val === "hoodiered" || val === "redhoodie") {
    val = "hoodiered";
  } else if (val === "hoodieyellow" || val === "yellowhoodie") {
    val = "hoodieyellow";
  } else if (val === "hoodiewhite" || val === "whitehoodie") {
    val = "hoodiewhite";
  } else if (val === "poloblack" || val === "blackpolo") {
    val = "poloblack";
  } else if (val === "pologrey" || val === "greypolo") {
    val = "pologrey";
  } else if (val === "poloblue" || val === "bluepolo") {
    val = "poloblue";
  } else if (val === "pologreen" || val === "greenpolo") {
    val = "pologreen";
  } else if (val === "roundblack" || val === "blackround") {
    val = "roundblack";
  } else if (val === "roundgrey" || val === "greyround") {
    val = "roundgrey";
  } else if (val === "roundblue" || val === "blueround") {
    val = "roundblue";
  } else if (val === "roundgreen" || val === "greenround") {
    val = "roundgreen";
  } else if (val === "hoodieblue" || val === "bluehoodie") {
    val = "hoodieblue";
  } else if (val === "hoodiegreen" || val === "greenhoodie") {
    val = "hoodiegreen";
  } else if (
    val === "hoodiecream" ||
    val === "creamhoodie" ||
    val === "hoodiecream"
  ) {
    val = "hoodiecream";
  } else if (
    val === "hoodiewhite" ||
    val === "whitehoodie" ||
    val === "hoodiewhite"
  ) {
    val = "hoodiewhite";
  } else if (
    val === "roundwhite" ||
    val === "whiteround" ||
    val === "roundwhitetshirt" ||
    val === "roundwhitetshirts" ||
    val === "whiteroundtshirt" ||
    val === "whiteroundtshirts"
  ) {
    val = "roundwhite";
  } else if (
    val === "roundredfemale" ||
    val === "redroundfemale" ||
    val === "roundfemalered" ||
    val === "femaleredround" ||
    val === "redfemaleround" ||
    val === "femaleredround"
  ) {
    val = "roundredfemale";
  } else if (
    val === "roundyellowfemale" ||
    val === "yellowroundfemale" ||
    val === "roundfemaleyellow" ||
    val === "femaleyellowround" ||
    val === "yellowfemaleround" ||
    val === "femaleroundyellow"
  ) {
    val = "roundyellowfemale";
  } else if (
    val === "roundwhitefemale" ||
    val === "whiteroundfemale" ||
    val === "femalewhiteround" ||
    val === "femalewhiteround" ||
    val === "roundfemalewhite"
  ) {
    val = "roundwhitefemale";
  } else if (
    val === "hoodieredfemale" ||
    val === "redhoodiefemale" ||
    val === "femalehoodiered" ||
    val === "femaleredhoodie" ||
    val === "hoodiefemalered" ||
    val === "redfemalehoodie"
  ) {
    val = "hoodieredfemale";
  } else if (
    val === "hoodieyellowfemale" ||
    val === "yellowhoodiefemale" ||
    val === "femalehoodieyellow" ||
    val === "femaleyellowhoodie" ||
    val === "hoodiefemaleyellow" ||
    val === "yellowfemalehoodie"
  ) {
    val = "hoodieyellowfemale";
  } else if (
    val === "hoodiewhitefemale" ||
    val === "whitehoodiefemale" ||
    val === "femalehoodiewhite" ||
    val === "femalewhitehoodie" ||
    val === "hoodiefemalewhite" ||
    val === "whitefemalehoodie"
  ) {
    val = "hoodiewhitefemale";
  } else if (
    val === "roundwhitemale" ||
    val === "whiteroundmale" ||
    val === "malewhiteround" ||
    val === "malewhiteround" ||
    val === "roundmalewhite"
  ) {
    val = "roundwhitemale";
  } else if (
    val === "roundyellowmale" ||
    val === "yellowroundmale" ||
    val === "maleyellowround" ||
    val === "roundmaleyellow" ||
    val === "maleroundyellow"
  ) {
    val = "roundyellowmale";
  } else if (
    val === "roundbluemale" ||
    val === "blueroundmale" ||
    val === "maleblueround" ||
    val === "maleroundblue" ||
    val === "roundmaleblue"
  ) {
    val = "roundbluemale";
  } else if (
    val === "roundgreenmale" ||
    val === "greenroundmale" ||
    val === "malegreenround" ||
    val === "maleroundgreen" ||
    val === "roundmalegreen"
  ) {
    val = "roundgreenmale";
  } else if (
    val === "hoodieyellowmale" ||
    val === "yellowhoodiemale" ||
    val === "malehoodieyellow" ||
    val === "maleyellowhoodie" ||
    val === "hoodiemaleyellow"
  ) {
    val = "hoodieyellowmale";
  } else if (
    val === "hoodiebluemale" ||
    val === "bluehoodiemale" ||
    val === "malehoodieblue" ||
    val === "malebluehoodie" ||
    val === "hoodiemaleblue"
  ) {
    val = "hoodiebluemale";
  } else if (
    val === "hoodiegreenmale" ||
    val === "greenhoodiemale" ||
    val === "malehoodiegreen" ||
    val === "malegreenhoodie" ||
    val === "hoodiemalegreen"
  ) {
    val = "hoodiegreenmale";
  } else if (
    val === "hoodiecreammale" ||
    val === "creamhoodiemale" ||
    val === "malehoodiecream" ||
    val === "malecreamhoodie" ||
    val === "hoodiemalecream"
  ) {
    val = "hoodiecreammale";
  } else if (
    val === "hoodiewhitemale" ||
    val === "whitehoodiemale" ||
    val === "malehoodiewhite" ||
    val === "malewhitehoodie" ||
    val === "hoodiemalewhite"
  ) {
    val = "hoodiewhitemale";
  } else if (
    val === "poloblackmale" ||
    val === "blackpolomale" ||
    val === "maleblackpolo" ||
    val === "malepoloblack" ||
    val === "polomaleblack"
  ) {
    val = "poloblackmale";
  } else if (
    val === "pologreymale" ||
    val === "greypolomale" ||
    val === "malegreypolo" ||
    val === "malepologrey" ||
    val === "polomalegrey"
  ) {
    val = "pologreymale";
  } else if (
    val === "polobluemale" ||
    val === "bluepolomale" ||
    val === "malebluepolo" ||
    val === "malepoloblue"
  ) {
    val = "polobluemale";
  } else if (
    val === "pologreenmale" ||
    val === "greenpolomale" ||
    val === "malegreenpolo" ||
    val === "polomalegreen" ||
    val === "malepologreen"
  ) {
    val = "pologreenmale";
  } else if (
    val === "roundblackmale" ||
    val === "blackroundmale" ||
    val === "maleblackround" ||
    val === "roundmaleblack" ||
    val === "maleroundblack"
  ) {
    val = "roundblackmale";
  } else if (
    val === "roundgreymale" ||
    val === "greyroundmale" ||
    val === "malegreyround" ||
    val === "maleroundgrey"
  ) {
    val = "roundgreymale";
  } else if (
    val === "roundbluemale" ||
    val === "blueroundmale" ||
    val === "maleblueround" ||
    val === "maleroundblue" ||
    val === "roundmaleblue"
  ) {
    val = "roundbluemale";
  } else if (
    val === "roundredmale" ||
    val === "redroundmale" ||
    val === "maleredround" ||
    val === "roundmalered" ||
    val === "maleroundred"
  ) {
    val = "roundredmale";
  } else {
    val = val;
  }
  console.log("val", val);

  switch (val) {
    case "red":
      cardContainer.innerHTML = "";
      createCard(red);
      putInCart();
      removeCartDups();
      break;
    case "yellow":
      cardContainer.innerHTML = "";
      createCard(yellow);
      putInCart();
      removeCartDups();
      break;
    case "blue":
      cardContainer.innerHTML = "";
      createCard(blue);
      putInCart();
      removeCartDups();
      break;
    case "green":
      cardContainer.innerHTML = "";
      createCard(green);
      putInCart();
      removeCartDups();
      break;
    case "white":
      cardContainer.innerHTML = "";
      createCard(white);
      putInCart();
      removeCartDups();
      break;
    case "black":
      cardContainer.innerHTML = "";
      createCard(black);
      putInCart();
      removeCartDups();
      break;
    case "grey":
      cardContainer.innerHTML = "";
      createCard(grey);
      putInCart();
      removeCartDups();
      break;
    case "cream":
      cardContainer.innerHTML = "";
      createCard(cream);
      putInCart();
      removeCartDups();
      break;
    case "male":
      cardContainer.innerHTML = "";
      createCard(male);
      putInCart();
      removeCartDups();
      break;
    case "female":
      cardContainer.innerHTML = "";
      createCard(female);
      putInCart();
      removeCartDups();
      break;
    case "femaleblue":
      cardContainer.innerHTML = "";
      createCard(blueFemale);
      putInCart();
      removeCartDups();
      break;
    case "femalered":
      cardContainer.innerHTML = "";
      createCard(redFemale);
      putInCart();
      removeCartDups();
      break;
    case "femaleyellow":
      cardContainer.innerHTML = "";
      createCard(yellowFemale);
      putInCart();
      removeCartDups();
      break;
    case "femalewhite":
      cardContainer.innerHTML = "";
      createCard(whiteFemale);
      putInCart();
      removeCartDups();
      break;
    case "femalegreen":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "femaleblack":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "maleblue":
      cardContainer.innerHTML = "";
      createCard(bluemale);
      putInCart();
      removeCartDups();
      break;
    case "malered":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "maleyellow":
      cardContainer.innerHTML = "";
      createCard(yellowmale);
      putInCart();
      removeCartDups();
      break;
    case "malewhite":
      cardContainer.innerHTML = "";
      createCard(whitemale);
      putInCart();
      removeCartDups();
      break;
    case "malegreen":
      cardContainer.innerHTML = "";
      createCard(greenmale);
      putInCart();
      removeCartDups();
      break;
    case "maleblack":
      cardContainer.innerHTML = "";
      createCard(blackmale);
      putInCart();
      removeCartDups();
      break;
    case "malegrey":
      cardContainer.innerHTML = "";
      createCard(greymale);
      putInCart();
      removeCartDups();
      break;
    case "femalegrey":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "malecream":
      cardContainer.innerHTML = "";
      createCard(creammale);
      putInCart();
      removeCartDups();
      break;
    case "femalecream":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "round":
      cardContainer.innerHTML = "";
      createCard(round);
      putInCart();
      removeCartDups();
      break;
    case "polo":
      cardContainer.innerHTML = "";
      createCard(polo);
      putInCart();
      removeCartDups();
      break;
    case "hoodie":
      cardContainer.innerHTML = "";
      createCard(hood);
      putInCart();
      removeCartDups();
      break;
    case "roundmale":
      cardContainer.innerHTML = "";
      createCard(roundMale);
      putInCart();
      removeCartDups();
      break;
    case "roundfemale":
      cardContainer.innerHTML = "";
      createCard(roundFemale);
      putInCart();
      removeCartDups();
      break;
    case "polomale":
      cardContainer.innerHTML = "";
      createCard(poloMale);
      putInCart();
      removeCartDups();
      break;
    case "polofemale":
      cardContainer.innerHTML = "";
      cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
      break;
    case "hoodiemale":
      cardContainer.innerHTML = "";
      createCard(hoodiesMale);
      putInCart();
      removeCartDups();
      break;
    case "hoodiefemale":
      cardContainer.innerHTML = "";
      createCard(hoodiesFemale);
      putInCart();
      removeCartDups();
      break;
    case "roundred":
      cardContainer.innerHTML = "";
      createCard(roundred);
      putInCart();
      removeCartDups();
      break;
    case "roundyellow":
      cardContainer.innerHTML = "";
      createCard(roundyellow);
      putInCart();
      removeCartDups();
      break;
    case "roundwhite":
      cardContainer.innerHTML = "";
      createCard(roundwhite);
      putInCart();
      removeCartDups();
      break;
    case "hoodiered":
      cardContainer.innerHTML = "";
      createCard(hoodiered);
      putInCart();
      removeCartDups();
      break;
    case "hoodieyellow":
      cardContainer.innerHTML = "";
      createCard(hoodieyellow);
      putInCart();
      removeCartDups();
      break;
    case "hoodiewhite":
      cardContainer.innerHTML = "";
      createCard(hoodiewhite);
      putInCart();
      removeCartDups();
      break;
    case "poloblack":
      cardContainer.innerHTML = "";
      createCard(poloblack);
      putInCart();
      removeCartDups();
      break;
    case "pologrey":
      cardContainer.innerHTML = "";
      createCard(pologrey);
      putInCart();
      removeCartDups();
      break;
    case "poloblue":
      cardContainer.innerHTML = "";
      createCard(poloblue);
      putInCart();
      removeCartDups();
      break;
    case "pologreen":
      cardContainer.innerHTML = "";
      createCard(pologreen);
      putInCart();
      removeCartDups();
      break;
    case "roundblack":
      cardContainer.innerHTML = "";
      createCard(roundblack);
      putInCart();
      removeCartDups();
      break;
    case "roundgrey":
      cardContainer.innerHTML = "";
      createCard(roundred);
      putInCart();
      removeCartDups();
      break;
    case "roundblue":
      cardContainer.innerHTML = "";
      createCard(roundblue);
      putInCart();
      removeCartDups();
      break;
    case "roundgreen":
      cardContainer.innerHTML = "";
      createCard(roundred);
      putInCart();
      removeCartDups();
      break;
    case "hoodieblue":
      cardContainer.innerHTML = "";
      createCard(hoodieblue);
      putInCart();
      removeCartDups();
      break;
    case "hoodiegreen":
      cardContainer.innerHTML = "";
      createCard(hoodiegreen);
      putInCart();
      removeCartDups();
      break;
    case "hoodiecream":
      cardContainer.innerHTML = "";
      createCard(hoodiecream);
      putInCart();
      removeCartDups();
      break;
    case "hoodiewhite":
      cardContainer.innerHTML = "";
      createCard(hoodiewhite);
      putInCart();
      removeCartDups();
      break;
    case "roundredfemale":
      cardContainer.innerHTML = "";
      createCard(redRoundfemale);
      putInCart();
      removeCartDups();
      break;
    case "roundyellowfemale":
      cardContainer.innerHTML = "";
      createCard(yellowRoundfemale);
      putInCart();
      removeCartDups();
      break;
    case "roundwhitefemale":
      cardContainer.innerHTML = "";
      createCard(whiteRoundfemale);
      putInCart();
      removeCartDups();
      break;
    case "hoodieredfemale":
      cardContainer.innerHTML = "";
      createCard(redHoodiefemale);
      putInCart();
      removeCartDups();
      break;
    case "hoodieyellowfemale":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "hoodiewhitefemale":
      cardContainer.innerHTML = "";
      createCard(whiteHoodiefemale);
      putInCart();
      removeCartDups();
      break;
    case "roundwhitemale":
      cardContainer.innerHTML = "";
      createCard(whiteRoundmale);
      putInCart();
      removeCartDups();
      break;
    case "roundyellowmale":
      cardContainer.innerHTML = "";
      createCard(yellowRoundfemale);
      putInCart();
      removeCartDups();
      break;
    case "roundbluemale":
      cardContainer.innerHTML = "";
      createCard(blueRoundmale);
      putInCart();
      removeCartDups();
      break;
    case "roundgreenmale":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "roundredmale":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "hoodieyellowmale":
      cardContainer.innerHTML = "";
      createCard(yellowHoodiemale);
      putInCart();
      removeCartDups();
      break;
    case "hoodiebluemale":
      cardContainer.innerHTML = "";
      createCard(blueHoodiemale);
      putInCart();
      removeCartDups();
      break;
    case "hoodiegreenmale":
      cardContainer.innerHTML = "";
      createCard(greenHoodiemale);
      putInCart();
      removeCartDups();
      break;
    case "hoodiecreammale":
      cardContainer.innerHTML = "";
      createCard(creamHoodiemale);
      putInCart();
      removeCartDups();
      break;
    case "hoodiewhitemale":
      cardContainer.innerHTML = "<h1>Sorry, No Items Available</h1>";
      break;
    case "poloblackmale":
      cardContainer.innerHTML = "";
      createCard(blackPolomale);
      putInCart();
      removeCartDups();
      break;
    case "pologreymale":
      cardContainer.innerHTML = "";
      createCard(greyPolomale);
      putInCart();
      removeCartDups();
      break;
    case "polobluemale":
      cardContainer.innerHTML = "";
      createCard(bluePolomale);
      putInCart();
      removeCartDups();
      break;
    case "pologreenmale":
      cardContainer.innerHTML = "";
      createCard(greenPolomale);
      putInCart();
      removeCartDups();
      break;
    case "roundblackmale":
      cardContainer.innerHTML = "";
      createCard(blackRoundmale);
      putInCart();
      removeCartDups();
      break;
    case "roundgreymale":
      cardContainer.innerHTML = "";
      createCard(greyRoundmale);
      putInCart();
      removeCartDups();
      break;
    default:
      cardContainer.innerHTML = "<h1>Sorry, Item Not Availiable</h1>";
      break;
  }
});
