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
</div>`;

const colorMContainer = document.createElement("div");
colorMContainer.className = "select-colors-male";
colorMContainer.classList.add("select-colors");
colorMContainer.innerHTML = `<h2>Choose a Color</h2>
<div class="btns">
</div>`;

const typeContainer = document.createElement("div");
typeContainer.className = "select-type";
typeContainer.innerHTML = `<h2>Choose a Type</h2>
<div class = "btns">
</div>`;

const cart = document.querySelector(".cart");

const checkOutMenu = document.querySelector(".c-menu");

const checkOutItems = document.querySelector(".cart-items");

const orderBtn = document.getElementById("order");

const cancelBtn = document.getElementById("cancel");

const closeBtn = document.getElementById("close");

const collection = [
  {
    name: "Polo black T-shirt",
    price: 499,
    type: "polo",
    stock: 5,
    gender: "male",
    img: "/polo/clement-vatte-f67Caxg3akg-unsplash.jpg",
  },
  {
    name: "Polo grey T-shirt",
    price: 399,
    type: "polo",
    stock: 0,
    gender: "male",
    img: "/polo/clement-vatte-Y-00g_VgQTc-unsplash.jpg",
  },
  {
    name: "Polo blue T-shirt",
    price: 299,
    type: "polo",
    stock: 2,
    gender: "male",
    img: "/polo/muhammad-abdullah-87fuAGjguA4-unsplash.jpg",
  },
  {
    name: "Polo green T-shirt",
    price: 499,
    type: "polo",
    stock: 5,
    gender: "male",
    img: "/polo/manny-moreno-LTo6ce3YkSc-unsplash.jpg",
  },
  {
    name: "Hoodie blue",
    price: 599,
    type: "hoodie",
    stock: 0,
    gender: "male",
    img: "/hoodies/waldo-kleyn-vtnhu9LgScs-unsplash.jpg",
  },
  {
    name: "Hoodie yellow",
    price: 399,
    type: "hoodie",
    stock: 5,
    gender: "male",
    img: "/hoodies/gab-mWSXyWe2H9Q-unsplash.jpg",
  },
  {
    name: "Hoodie green",
    price: 599,
    type: "hoodie",
    stock: 5,
    gender: "male",
    img: "/hoodies/the-ian-s9q_bn-uLhg-unsplash.jpg",
  },
  {
    name: "Hoodie cream",
    price: 599,
    type: "hoodie",
    stock: 5,
    gender: "male",
    img: "/hoodies/the-ian-ZCoqcrWp9GY-unsplash.jpg",
  },
  {
    name: "Hoodie white (F)",
    price: 599,
    type: "hoodie",
    stock: 5,
    gender: "female",
    img: "/female/photo-1526476148966-98bd039463ea.avif",
  },
  {
    name: "Hoodie blue (F)",
    price: 499,
    type: "hoodie",
    stock: 5,
    gender: "female",
    img: "/female/photo-1635796273083-93e4091d9712.avif",
  },
  {
    name: "Hoodie red (F)",
    price: 499,
    type: "hoodie",
    stock: 5,
    gender: "female",
    img: "/female/premium_photo-1689371957831-40f044457743.avif",
  },
  {
    name: "Round grey T-shirt",
    price: 199,
    type: "round",
    stock: 5,
    gender: "male",
    img: "/round/alireza-zare-WjoQCjdPMIc-unsplash.jpg",
  },
  {
    name: "Round black T-shirt",
    price: 299,
    type: "round",
    stock: 5,
    gender: "male",
    img: "/round/faith-yarn-Wr0TpKqf26s-unsplash.jpg",
  },
  {
    name: "Round white T-shirt",
    price: 299,
    type: "round",
    stock: 5,
    gender: "male",
    img: "/round/mediamodifier-fTDWpCxLA0k-unsplash.jpg",
  },
  {
    name: "Round blue T-shirt",
    price: 199,
    type: "round",
    stock: 5,
    gender: "male",
    img: "/round/m-ghufanil-muta-ali-UkijHku-7kM-unsplash.jpg",
  },
  {
    name: "Round white T-shirt(F)",
    price: 299,
    type: "round",
    stock: 5,
    gender: "female",
    img: "/female/ac8a89150dffe6a8feee64224a949090.jpg",
  },
  {
    name: "Round red T-shirt(F)",
    price: 199,
    type: "round",
    stock: 5,
    gender: "female",
    img: "/female/photo-1523649455276-48bd8171dcec.avif",
  },
  {
    name: "Round yellow T-shirt(F)",
    price: 199,
    type: "round",
    stock: 5,
    gender: "female",
    img: "/female/premium_photo-1689575249631-ae82a19adaf9.avif",
  },
];

const colorsPresent = [
  ...new Set(collection.map((item) => item.name.split(" ")[1])),
];
const typesPresent = [...new Set(collection.map((item) => item.type))];
const male = collection.filter((item) => item.gender === "male");
const female = collection.filter((item) => item.gender === "female");
// Type Filter & Gender Filter
// const hoodiesMale = male.filter((item) => item.type === "hoodie");
// const hoodiesFemale = female.filter((item) => item.type === "hoodie");
// const roundMale = male.filter((item) => item.type === "round");
// const roundFemale = female.filter((item) => item.type === "round");
// const poloMale = male.filter((item) => item.type === "polo");
// Price Filter
const low = collection.filter((item) => item.price < 300);
const mid = collection.filter((item) => item.price >= 300 && item.price < 500);
const high = collection.filter((item) => item.price >= 500);
// -----------------------------------------------------------------------
function createTypeContainer(types) {
  types.forEach((type) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = type;
    btn.innerHTML = `<div class="card">
    <div class="info">
      ${type}
    </div>
  </div>`;
    typeContainer.querySelector(".btns").append(btn);
  });
}
createTypeContainer(typesPresent);
function createFColorBtn(colors) {
  colors.forEach((color) => {
    const colorsFemale = female.filter((item) => item.name.includes(color));
    if (colorsFemale.length === 0) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = color;
    btn.innerHTML = `<div class="card get-${color}">
  <div class="info">${color}</div>
</div>`;
    colorFContainer.querySelector(".btns").append(btn);
  });
}
createFColorBtn(colorsPresent);
function createMColorBtn(colors) {
  colors.forEach((color) => {
    const colorsMale = male.filter((item) => item.name.includes(color));
    if (colorsMale.length === 0) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = color;
    btn.innerHTML = `<div class="card get-${color}">
  <div class="info">${color}</div>
</div>`;
    colorMContainer.querySelector(".btns").append(btn);
  });
}
createMColorBtn(colorsPresent);

let newArr = [];
function createCard(cards) {
  cards.forEach((card) => {
    let getCardImg = card.img;
    let getCardName = card.name;
    let getCardPrice = card.price;
    let getCardStock = card.stock;
    const crd = document.createElement("div");
    crd.classList.add("card");
    crd.innerHTML = `<img src="./Images${getCardImg}" alt="" />
                      <div class="info">
                          <h4 class="c-name">${getCardName}</h4>
                          <div class="cost">
                            <h4>Price: &#8377;<span>${getCardPrice}</span></h4>
                            <button type="button" class="add">add to cart
                            </button>
                          </div>
                      </div`;
    if (getCardStock > 0) {
      crd.querySelector(".add").innerText = "add to cart";
      cardContainer.append(crd);
    } else {
      crd.querySelector(".add").innerText = "Out of Stock";
      crd.querySelector(".add").disabled = "disabled";
      crd.querySelector(".add").style.fontSize = "10px";
      cardContainer.append(crd);
    }
  });
}

createCard(collection);
removeDups();

cart.onclick = function checkOut() {
  checkOutMenu.classList.toggle("active");
  setTimeout(() => {
    cardContainer.innerHTML = "";
    searchBar.value = "";
    cardContainer.append(createCard(collection));
    putInCart();
  }, 1000);
};

cancelBtn.onclick = function () {
  checkOutMenu.classList.remove("active");
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
  const cartItems = checkOutMenu.querySelectorAll(".cart-create");
  for (const item of cartItems) {
    if (parseInt(item.querySelector(".no_of_added")) < 1) {
      item.classList.add("remove");
      setTimeout(() => {
        item.remove();
      }, 500);
    }
    const rBtn = item.querySelector(".remove");
    const aBtn = item.querySelector(".add");
    const itemQuantity = collection.find(
      (product) => product.name === item.querySelector(".name").innerText
    ).stock;
    if (aBtn) {
      const price = parseInt(item.querySelector(".price span").innerText);
      aBtn.onclick = function () {
        const count = parseInt(item.querySelector(".no_of_added").innerText);
        item.querySelector(".no_of_added").innerText = count + 1;
        item.querySelector(".price span").innerText = price * (count + 1);
        // console.log("count", count);
        if (count >= itemQuantity - 1) {
          aBtn.style.display = "none";
          aBtn.previousElementSibling.style.paddingRight = "20px";
          alert("Item Out of Stock!");
        }
        totalCost();
      };
    }
    if (rBtn) {
      const price = parseInt(item.querySelector(".price span").innerText);
      rBtn.onclick = function () {
        const count = parseInt(item.querySelector(".no_of_added").innerText);
        if (count > 1) {
          item.querySelector(".no_of_added").innerText = count - 1;
          item.querySelector(".price span").innerText = price * (count - 1);
          if (count < itemQuantity + 1) {
            aBtn.style.display = "inline-block";
            aBtn.previousElementSibling.style.paddingRight = "0";
          }
          totalCost();
        } else {
          const menuItems = document.querySelectorAll(".card");
          for (const menuItem of menuItems) {
            if (item.children[0].src == menuItem.children[0].src) {
              menuItem.querySelector(".add").classList.remove("added");
              menuItem.querySelector(".add").style.display = "inline-block";
              menuItem.querySelector(".add").innerText = "add to cart";
            }
          }
          removeFromCart();
          item.classList.add("remove");
          setTimeout(() => {
            item.remove();
            totalCost();
          }, 500);
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
  removeCartDups();
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

closeBtn.onclick = function () {
  orderComplete.classList.remove("active");
  document.location.reload();
  searchBar.value = "";
};

function removeDups() {
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
  newArr.length = 0;
  const cartItems = checkOutItems.children;
  for (let i = 0; i < cartItems.length; i++) {
    const cartItemName =
      cartItems[i].querySelector(".item-nm-cnt .name").innerText;

    if (!newArr.includes(cartItemName)) {
      newArr.push(cartItemName);
    } else {
      cartItems[i].remove();
      count.innerHTML = checkOutItems.children.length;
    }
  }
}

const logo = header.querySelector("p");
logo.onclick = function () {
  cardContainer.innerHTML = "";
  cardContainer.append(createCard(collection));
  putInCart();
  removeDups();
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
  const colors = colorFContainer.children[1].children;
  for (const type of types) {
    type.addEventListener("click", () => {
      cardContainer.innerHTML = "";
      cardContainer.appendChild(colorFContainer);
      for (const color of colors) {
        color.addEventListener("click", () => {
          const filterItem = female.filter(
            (item) => item.name.includes(color.id) && item.type === type.id
          );
          if (filterItem.length === 0) {
            cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
          } else {
            cardContainer.innerHTML = "";
            createCard(filterItem);
            putInCart();
          }
        });
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
      cardContainer.appendChild(colorMContainer);
      for (const color of colors) {
        color.addEventListener("click", () => {
          const filterItem = male.filter(
            (item) => item.name.includes(color.id) && item.type === type.id
          );
          if (filterItem.length === 0) {
            cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
          } else {
            cardContainer.innerHTML = "";
            createCard(filterItem);
            putInCart();
          }
        });
      }
    });
  }
};

searchBar.focus();
if (document.location.reload) {
  searchBar.value = "";
}
searchBtn.addEventListener("click", () => {
  let val = searchBar.value.toLowerCase();
  typesPresent.forEach((type) => {
    colorsPresent.forEach((color) => {
      if (val === color) {
        const filterItem = collection.filter((item) =>
          item.name.includes(color)
        );
        if (filterItem.length === 0) {
          cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
        } else {
          cardContainer.innerHTML = "";
          createCard(filterItem);
          putInCart();
        }
      } else if (val === type) {
        const filterItem = collection.filter((item) => item.type === type);
        if (filterItem.length === 0) {
          cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
        } else {
          cardContainer.innerHTML = "";
          createCard(filterItem);
          putInCart();
        }
      } else if (
        val === color + type ||
        val === type + color ||
        val === color + " " + type ||
        val === type + " " + color
      ) {
        const filterItem = collection.filter(
          (item) => item.name.includes(color) && item.type === type
        );
        if (filterItem.length === 0) {
          cardContainer.innerHTML = `<h1>Sorry, No Items Available</h1>`;
        } else {
          cardContainer.innerHTML = "";
          createCard(filterItem);
          putInCart();
        }
      }
    });
  });
});
