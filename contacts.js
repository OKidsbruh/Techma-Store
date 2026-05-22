document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ЕЛЕМЕНТИ
    // =========================

    const form = document.getElementById("contactForm");

    const themeToggle = document.getElementById("theme-toggle");



    // =========================
    // ТЕМНА ТЕМА
    // =========================

    // якщо тема була збережена
    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark");

        themeToggle.checked = true;
    }



    // перемикач теми
    themeToggle.addEventListener("change", () => {

        document.body.classList.toggle("dark");



        // зберігаємо тему
        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme", "dark");

        }else{

            localStorage.setItem("theme", "light");
        }

    });



    // =========================
    // ВІДПРАВКА ФОРМИ
    // =========================

    // =========================
// ВІДПРАВКА ФОРМИ + MODAL
// =========================

// елементи popup (один раз!)
const successModal = document.getElementById("success-modal");
const closeSuccess = document.getElementById("close-success");
const successText = document.getElementById("success-text");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    // дані форми
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // перевірка
    if(name === "" || email === "" || message === "") {
        alert("Заповніть всі поля");
        return;
    }

    // текст у popup
    successText.textContent = `Дякуємо, ${name}! Повідомлення надіслано ✔`;

    // показ popup
    successModal.style.display = "flex";

    // очистка форми
    form.reset();
});

closeSuccess.addEventListener("click", () => {
    successModal.style.display = "none";
});

});

// кружечок
let cartCount = document.getElementById("cart-count");



// ===== ОНОВЛЕННЯ КІЛЬКОСТІ =====
function updateCartCount(){

    // беремо товари з localStorage
    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];



    // якщо в товарах є quantity
    let total = 0;

    cart.forEach(function(item){

        total += item.quantity || 1;

    });



    // ставимо число
    cartCount.textContent = total;



    // якщо 0 — ховаємо кружечок
    if(total === 0){

        cartCount.style.display = "none";

    }else{

        cartCount.style.display = "flex";

    }

}



// запускаємо при відкритті
updateCartCount();

