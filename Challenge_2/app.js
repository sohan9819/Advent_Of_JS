const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 2.23,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 1,
  },
  {
    name: "Salmon and Vegetables",
    price: 5.12,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 1,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 7.82,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 1,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 5.99,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 1,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 6.98,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 1,
  },
  {
    name: "Fish Sticks and Fries",
    price: 6.34,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 1,
  },
];

let inCartItems = [];

const menu = document.querySelector('ul[class="menu"]');
const cartSummary = document.querySelector('ul[class="cart-summary"');

const subtotal = document.querySelector(".subtotal");
const tax = document.querySelector(".tax");
const total = document.querySelector(".amount.price.total");

// console.log(subtotal);
console.log(tax);
console.log(total);

let decreaseBtns;
let increaseBtns;
let quantityInDisplay;
let quantityOutDisplay;
let subtotalAmount;
let taxAmount;
let totalAmount;

const menuItemsHtml = menuItems
  .map((item) => {
    return `
    <li>
    <div class="plate">
      <img src="images/${item.image}" alt="${item.alt}" class="plate" />
    </div>
    <div class="content">
      <p class="menu-item">${item.name}</p>
      <p class="price">$${item.price}</p>
      <button class="add">
        <img src="images/check.svg" alt="Check" />
        In Cart
      </button>
    </div>
  </li>
    `;
  })
  .join("");

menu.innerHTML = menuItemsHtml;

const cartBtns = Array.from(document.querySelectorAll(".content > button"));

function arrayContains(menuName) {
  console.log(menuName);
  inCartItems.forEach((item, index) => {
    if (menuName == item.name) {
      console.log(menuName + " : " + item.name);
      //   inCartItems.splice(index, 1);
      return index;
    }
  });
  return false;
}

cartBtns.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("add");
    e.target.classList.toggle("in-cart");
    let removeIndex = inCartItems.findIndex(
      (i) => i.name === menuItems[index].name
    );
    console.log(removeIndex);
    removeIndex === -1
      ? inCartItems.push(menuItems[index])
      : inCartItems.splice(removeIndex, 1);

    console.log(inCartItems);
    UpdateCartSummary();
    // updateBtns();
  });
});

const UpdateCartSummary = () => {
  inCartHtml = inCartItems
    .map((item) => {
      return `
    <li>
    <div class="plate">
      <img
        src="images/${item.image}"
        alt="${item.alt}"
        class="plate"
      />
      <div class="quantity">${item.count}</div>
    </div>
    <div class="content">
      <p class="menu-item">${item.name}</p>
      <p class="price">$${item.price}</p>
    </div>
    <div class="quantity__wrapper">
      <button class="decrease">
        <img src="images/chevron.svg" />
      </button>
      <div class="quantity">${item.count}</div>
      <button class="increase">
        <img src="images/chevron.svg" />
      </button>
    </div>
    <div class="subtotal">$${roundOff(item.price * item.count)}</div>
  </li>
    `;
    })
    .join("");

  cartSummary.innerHTML = inCartHtml;

  quantityInDisplay = document.querySelectorAll(
    ".quantity__wrapper > .quantity"
  );
  quantityOutDisplay = document.querySelectorAll(".plate > .quantity");

  quantityInDisplay.forEach((quan, index) => {
    quan.innerText = inCartItems[index].count;
    console.log(inCartItems[index].count);
  });

  quantityOutDisplay.forEach((quan, index) => {
    quan.innerText = inCartItems[index].count;
    console.log(inCartItems[index].count);
  });
  updateBtns();
};

const updateBtns = () => {
  decreaseBtns = document.querySelectorAll(".decrease");
  increaseBtns = document.querySelectorAll(".increase");
  // quantityInDisplay = document.querySelectorAll(
  //   ".quantity__wrapper > .quantity"
  // );
  // quantityOutDisplay = document.querySelectorAll(".plate > .quantity");

  decreaseBtns.forEach((dbtn, index) => {
    dbtn.addEventListener("click", (e) => {
      if (inCartItems[index].count > 0) {
        inCartItems[index].count--;
      }
      console.log(inCartItems[index]);
      UpdateCartSummary();
    });
  });

  increaseBtns.forEach((ibtn, index) => {
    ibtn.addEventListener("click", (e) => {
      console.log(e);
      inCartItems[index].count++;
      UpdateCartSummary();
    });
  });

  updateTotal();
};

const roundOff = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const updateTotal = () => {
  subtotalAmount = inCartItems.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);
  subtotalAmount = roundOff(subtotalAmount);
  // taxAmount =
  //   1.05 *
  //   inCartItems.reduce((total, item) => {
  //     return total + item.count;
  //   }, 0);
  taxAmount = roundOff((subtotalAmount * 10) / 100);
  totalAmount = roundOff(subtotalAmount + taxAmount);

  console.log(subtotalAmount);
  subtotal.innerText = `$${subtotalAmount}`;
  tax.innerText = `$${taxAmount}`;
  total.innerText = `$${totalAmount}`;
};
