// ===== ЕЛЕМЕНТИ =====
const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");

const clearCartBtn = document.querySelector(".clear-cart-btn");
const orderBtn = document.querySelector(".order-btn");

const modal = document.getElementById("confirm-modal");
const cancelClear = document.getElementById("cancel-clear");
const confirmClear = document.getElementById("confirm-clear");

const themeToggle = document.getElementById("theme-toggle");



// ===== ТЕМА =====
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-theme");

    themeToggle.checked = true;
}



themeToggle.addEventListener("change", () => {

    document.body.classList.toggle("dark-theme");



    if(document.body.classList.contains("dark-theme")){

        localStorage.setItem("theme", "dark");

    }else{

        localStorage.setItem("theme", "light");
    }

});



// ===== РЕНДЕР КОШИКА =====
function renderCart(){

    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];



    cartContainer.innerHTML = "";



    let total = 0;



    // ===== ПОРОЖНІЙ КОШИК =====
    if(cart.length === 0){

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Кошик порожній 🛒
                </h2>

            </div>

        `;

        totalPrice.textContent = "0";

        updateCartCount();

        return;
    }



    // ===== ТОВАРИ =====
    cart.forEach(product => {

        // створюємо selected якщо його нема
        if(product.selected === undefined){

            product.selected = true;
        }



        // сума тільки вибраних
        if(product.selected){

            total += product.price * product.quantity;
        }



        // ===== КАРТКА =====
        let card = document.createElement("div");

        card.classList.add("cart-item");

        // якщо товар НЕ вибраний
        if(!product.selected){
            card.classList.add("inactive");
        }



        card.innerHTML = `

            <!-- CHECKBOX -->
            <input 
                type="checkbox"
                class="cart-check"
                ${product.selected ? "checked" : ""}
                onchange="toggleSelect(${product.id})"
            >



            <!-- IMAGE -->
            <img src="${product.img}">



            <!-- INFO -->
            <div class="cart-info">

                <h3>
                    ${product.fullname}
                </h3>



                <!-- PRICE -->
                <div class="price-box">

                    <span class="price-icon">
                            🛒
                    </span>

                    <span class="price">
                        ${product.price} ₴
                    </span>

                </div>



                <!-- QUANTITY -->
                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${product.id})">
                        -
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button onclick="increaseQuantity(${product.id})">
                        +
                    </button>

                </div>




        `;



        cartContainer.append(card);

    });



    // ===== СУМА =====
    totalPrice.textContent = total;



    // ===== ОНОВЛЕННЯ =====
    localStorage.setItem("techma-cart", JSON.stringify(cart));



    updateCartCount();
}



// ===== КІЛЬКІСТЬ =====
function increaseQuantity(id){

    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];



    cart = cart.map(product => {

        if(product.id === id){

            product.quantity++;
        }

        return product;
    });



    localStorage.setItem("techma-cart", JSON.stringify(cart));



    renderCart();
}



// ===== ЗМЕНШЕННЯ =====
function decreaseQuantity(id){
    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];

    // Спочатку зменшуємо кількість для потрібного товару
    cart = cart.map(product => {
        if (product.id === id) {
            product.quantity--;
        }
        return product;
    });

    // Відфільтровуємо (залишаємо) лише ті товари, у яких кількість більша за 0
    cart = cart.filter(product => product.quantity > 0);

    localStorage.setItem("techma-cart", JSON.stringify(cart));

    renderCart();
    if (typeof updateCartCount === "function") updateCartCount();
}



// ===== ВИДАЛЕННЯ =====
function removeFromCart(id){

    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];



    cart = cart.filter(product => product.id !== id);



    localStorage.setItem("techma-cart", JSON.stringify(cart));



    renderCart();
}



// ===== ВИБІР ТОВАРУ =====
function toggleSelect(id){

    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];



    cart = cart.map(product => {

        if(product.id === id){

            product.selected = !product.selected;
        }

        return product;
    });



    localStorage.setItem("techma-cart", JSON.stringify(cart));



    renderCart();
}



// ===== КІЛЬКІСТЬ У КОШИКУ =====
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];



    let count = 0;



    cart.forEach(product => {

        count += product.quantity;

    });



    document.getElementById("cart-count").textContent = count;
}



// ===== POPUP =====
clearCartBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});



cancelClear.addEventListener("click", () => {

    modal.style.display = "none";

});



confirmClear.addEventListener("click", () => {

    localStorage.removeItem("techma-cart");



    modal.style.display = "none";



    renderCart();
});



// ===== ORDER MODAL =====

const orderModal = document.getElementById("order-modal");

const orderProducts = document.getElementById("order-products");

const orderTotalPrice = document.getElementById("order-total-price");

const closeOrderModal = document.getElementById("close-order-modal");

const orderForm = document.getElementById("order-form");
// ===== SUCCESS MODAL =====

const successModal = document.getElementById("success-modal");

const successClose = document.getElementById("success-close");

// ===== CLOSE SUCCESS =====

successClose.addEventListener("click", () => {

    successModal.style.display = "none";

});

const errorModal = document.getElementById("error-modal");
const closeError = document.getElementById("close-error");

closeError.addEventListener("click", () => {
    errorModal.style.display = "none";
});

orderBtn.addEventListener("click", () => {

    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];

    let selectedProducts = cart.filter(product => product.selected);

    // =========================
    // ❌ якщо кошик порожній
    // =========================
    if(cart.length === 0 || selectedProducts.length === 0){

        errorModal.style.display = "flex";
        return;
    }

    // =========================
    // 🧾 очищаємо список
    // =========================
    orderProducts.innerHTML = "";

    let total = 0;

    // =========================
    // додаємо товари в popup
    // =========================
    selectedProducts.forEach(product => {

        total += product.price * product.quantity;

        let item = document.createElement("div");

        item.classList.add("order-product");

        item.innerHTML = `
            <span>${product.name}</span>
            <strong>${product.quantity} × ${product.price} ₴</strong>
        `;

        orderProducts.append(item);
    });

    // =========================
    // показ суми
    // =========================
    orderTotalPrice.textContent = total;

    // =========================
    // відкриваємо popup
    // =========================
    orderModal.style.display = "flex";
});



// ===== CLOSE =====

closeOrderModal.addEventListener("click", () => {

    orderModal.style.display = "none";

});



// ===== SUBMIT =====

orderForm.addEventListener("submit", (e) => {

    e.preventDefault();



        // показуємо success popup
        successModal.style.display = "flex";



    let cart = JSON.parse(

        localStorage.getItem("techma-cart")

    ) || [];



    // залишаємо тільки невибрані
    let remainingProducts = cart.filter(

        product => !product.selected

    );



    localStorage.setItem(

        "techma-cart",
        JSON.stringify(remainingProducts)

    );



    // закриваємо
    orderModal.style.display = "none";



    // очищаємо форму
    orderForm.reset();



    // ререндер
    renderCart();

});



// ===== СТАРТ =====
renderCart();