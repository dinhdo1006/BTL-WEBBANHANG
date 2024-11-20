document.getElementById("price-filter").addEventListener("change", filterProducts);
document.getElementById("size-filter").addEventListener("change", filterProducts);

function filterProducts() {
  const priceValue = document.getElementById("price-filter").value;
  const sizeValue = document.getElementById("size-filter").value;

  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    const matchesPrice = priceValue === "all" || product.dataset.price === priceValue;
    const matchesSize = sizeValue === "all" || product.dataset.size === sizeValue;

    if (matchesPrice && matchesSize) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
const cart = [];
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", event => {
    const name = event.target.dataset.name;
    const price = parseInt(event.target.dataset.price);

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  cartItems.innerHTML = cart.map(item => `<li>${item.name} - ${item.price}₫</li>`).join("");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = `Tổng: ${total.toLocaleString()}₫`;
}
const translations = {
    vi: {
      title: "Shop Quần Áo",
      banner: "Giảm giá đến <span>50%</span> từ 13/11 - 01/12",
      cart: "Giỏ hàng",
      total: "Tổng",
      addToCart: "Thêm vào giỏ"
    },
    en: {
      title: "Clothing Store",
      banner: "Up to <span>50%</span> off from 13/11 - 01/12",
      cart: "Shopping Cart",
      total: "Total",
      addToCart: "Add to Cart"
    }
  };
  
  document.getElementById("lang-vi").addEventListener("click", () => switchLanguage("vi"));
  document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
  
  function switchLanguage(lang) {
    document.title = translations[lang].title;
    document.querySelector(".banner p").innerHTML = translations[lang].banner;
    document.querySelector("#cart h2").textContent = translations[lang].cart;
    document.getElementById("total-price").textContent = `${translations[lang].total}: 0₫`;
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.textContent = translations[lang].addToCart;
    });
  }