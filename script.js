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

searchBtn.addEventListener("click", () => {
  searchBar.classList.add("active");
  // bar.style.opacity=1;
  searchBar.focus();
});

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
// const green = collection.filter((item) => item.name.includes("green"));
// const red = collection.filter((item) => item.name.includes("red"));
// const blue = collection.filter((item) => item.name.includes("blue"));
// const yellow = collection.filter((item) => item.name.includes("yellow"));
// const grey = collection.filter((item) => item.name.includes("grey"));
// const cream = collection.filter((item) => item.name.includes("cream"));
// const black = collection.filter((item) => item.name.includes("black"));
// const white = collection.filter((item) => item.name.includes("white"));
// const blackpolo = collection.filter(
//   (item) => item.name.includes("black") && item.name.includes("Polo")
// );
// const greypolo = collection.filter(
//   (item) => item.name.includes("grey") && item.name.includes("Polo")
// );
// const bluepolo = collection.filter(
//   (item) => item.name.includes("blue") && item.name.includes("Polo")
// );
// const greenpolo = collection.filter(
//   (item) => item.name.includes("green") && item.name.includes("Polo")
// );
// const roundwhite = collection.filter(
//   (item) => item.name.includes("white") && item.name.includes("Round")
// );
// const roundred = collection.filter(
//   (item) => item.name.includes("red") && item.name.includes("Round")
// );
// ----------------------------------------------------------------------
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
    console.log("getAddBtn", getAddBtn);

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
};

function removeDups(c) {
  newArr.length = 0;
  const cardItemNames = cardContainer.querySelectorAll(".info .c-name");
  console.log("cardItemNames", cardItemNames);

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
