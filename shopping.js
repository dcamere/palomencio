const button = document.querySelector("#buy");
const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart");
const total = document.querySelector(".total");

const purchase = () => {
    let purchaseObj = {};
    let productPrice;
    let productQuantity;

    products.forEach((item, index) => {
        productName = item.closest(".product").querySelector(".product__title").innerHTML;
        productPrice = parseInt(item.closest(".product").querySelector(".product__price").innerHTML);
        productQuantity = item.closest(".product").querySelector("input").value;

        // console.log(productName);
        // console.log(productPrice);
        // console.log(productQuantity)
        purchaseObj[productName] = {
            quantity: productQuantity,
            paying: productPrice * productQuantity
        }
    })

    cart.innerHTML = "";
    const div = document.createElement('div');
    for (const [key, value] of Object.entries(purchaseObj)) {
        div.innerHTML += `${key} --> `;
        for (const [key2, value2] of Object.entries(value)) {
            div.innerHTML += ` ${key2}: ${value2} <br>`;
        }
    }
    cart.appendChild(div);

}

button.addEventListener("click", purchase);