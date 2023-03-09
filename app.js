//variables for "pages"
const appliancesPage = document.querySelector(".appliances");
const coffeesPage = document.querySelector(".coffees");
const chocolatesPage = document.querySelector(".chocolates");
const cartPage = document.querySelector(".cart");
const footPage = document.querySelector("#foot");

//default to products page by hiding cart page
cartPage.style.display = "none";

//variables for nav elements
const appliancesNav = document.querySelector("#appliances");
const homeNav = document.querySelector("#home");
const chocolatesNav = document.querySelector("#chocolates");
const cartNav = document.querySelector("#cart");
const coffeesNav = document.querySelector("#coffees");
const continueShopping = document.querySelector("#continue-shopping");

//event listeners for nav elements
appliancesNav.addEventListener("click", function () {
    coffeesPage.style.display = "none";
    chocolatesPage.style.display = "none";
    cartPage.style.display = "none";
    appliancesPage.style.display = "block";
});

homeNav.addEventListener("click", function () {
    cartPage.style.display = "none";
    appliancesPage.style.display = "block";
    chocolatesPage.style.display = "block";
    coffeesPage.style.display = "block";
    footPage.style.display = "block";
});

continueShopping.addEventListener("click", function () {
    cartPage.style.display = "none";
    appliancesPage.style.display = "block";
    chocolatesPage.style.display = "block";
    coffeesPage.style.display = "block";
    footPage.style.display = "block";
});

coffeesNav.addEventListener("click", function () {
    appliancesPage.style.display = "none";
    chocolatesPage.style.display = "none";
    cartPage.style.display = "none";
    coffeesPage.style.display = "block";
    footPage.style.display = "block";
});

chocolatesNav.addEventListener("click", function () {
    appliancesPage.style.display = "none";
    coffeesPage.style.display = "none";
    cartPage.style.display = "none";
    chocolatesPage.style.display = "block";
    footPage.style.display = "block";
});

cartNav.addEventListener("click", function () {
    appliancesPage.style.display = "none";
    coffeesPage.style.display = "none";
    chocolatesPage.style.display = "none";
    footPage.style.display = "none";
    cartPage.style.display = "block";
    getTotal();
});

//price variables for shopping cart
let darkRoastPrice = 11.99;
let lightRoastPrice = 9.99;
let celticGrogPrice = 11.49;
let colombianDecafPrice = 12.49;
let ethiopianPrice = 10.99;
let costaRicanPrice = 12.99;

//price paragraphs to change
const darkRoastPriceTag = document.querySelector("#dark-roast-price");
const lightRoastPriceTag = document.querySelector("#light-roast-price");
const celticGrogPriceTag = document.querySelector("#celtic-grog-price");
const colombianDecafPriceTag = document.querySelector("#colombian-decaf-price");
const ethiopianPriceTag = document.querySelector("#ethiopian-price");
const costaRicanPriceTag = document.querySelector("#costa-rican-price");

//set price variable in html
darkRoastPriceTag.innerText = priceFormat(darkRoastPrice);
lightRoastPriceTag.innerText = priceFormat(lightRoastPrice);
celticGrogPriceTag.innerText = priceFormat(celticGrogPrice);
colombianDecafPriceTag.innerText = priceFormat(colombianDecafPrice);
ethiopianPriceTag.innerText = priceFormat(ethiopianPrice);
costaRicanPriceTag.innerText = priceFormat(costaRicanPrice);

//formatting price
function priceFormat(num) {
    let str = "";
    return (str = `$${num}`);
}

let productValues = [];

//adding items to shopping cart
function addItem(id, value) {
    const ul = document.querySelector(".cart-items");
    const li = document.createElement("li");
    li.innerText = `${priceFormat(value)} - ${id}`;
    li.class = value;
    productValues.push(li.class);
    ul.appendChild(li);
}

function hideDefaultMessage() {
    if (productValues.length > 0) {
        document.querySelector("#default-cart-empty").style.display = "none";
    }
}

function getTotal() {
    let subTotal = 0;
    for (let item of productValues) {
        subTotal += Number(item);
    }
    subTotal = Number.parseFloat(subTotal.toFixed(2));
    document.querySelector(".total").innerText = `Your subtotal is $${subTotal}`;
}