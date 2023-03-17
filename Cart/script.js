const product = {
  name: "Example Product",
  price: 10.00
};

let cart = [];

function addToCart() {
  const quantityInput = document.getElementById("quantity");
  const quantity = parseInt(quantityInput.value);

  if (quantity <= 0) {
    alert("Please enter a quantity greater than 0.");
    return;
  }

  const item = {
    product: product,
    quantity: quantity
  };

  cart.push(item);
  updateCart();
  quantityInput.value = 1;
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalPrice = document.getElementById("total-price");

  let cartListHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemName = item.product.name;
    const itemPrice = item.product.price;
    const itemQuantity = item.quantity;
    const itemTotal = itemPrice * itemQuantity;
    total += itemTotal;

    cartListHTML += `<li>${itemName} - $${itemPrice.toFixed(2)} x ${itemQuantity} = $${itemTotal.toFixed(2)} <button class="remove-unit" data-name="${itemName}">Remove Unit</button></li>`;
  });

  cartList.innerHTML = cartListHTML;
  totalPrice.innerText = `Total Price: $${total.toFixed(2)}`;
}

function removeFromCart(name) {
  cart = cart.filter(item => item.product.name !== name);
  updateCart();
}

function removeUnitFromCart(name) {
  const index = cart.findIndex(item => item.product.name === name);

  if (index !== -1) {
    cart[index].quantity -= 1;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    updateCart();
  }
}

const clearCartButton = document.getElementById("clear-cart");

clearCartButton.addEventListener("click", () => {
  cart = [];
  updateCart();
});

const addProductButton = document.getElementById("add-to-cart");

addProductButton.addEventListener("click", addToCart);

const cartList = document.getElementById("cart-list");

cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-unit")) {
    const name = event.target.dataset.name;
    removeUnitFromCart(name);
  }
});

updateCart();
