const products = [

    {
        id: 1,

        name: "Ноутбук ASUS TUF Gaming",
        fullname:'Ноутбук ASUS TUF Gaming A15 FA506NCG-HN206 (90NR0JF7-M00HF0) Graphite Black / 15.6" IPS Full HD 144 Гц / AMD Ryzen 7 7445HS / RAM 16 ГБ / SSD 512 ГБ / NVIDIA GeForce RTX 3050, 4 ГБ',

        price: 47999,

        category: "Ноутбуки",

        img: "ASUSTUFGaming.png",

        // картинки для popup
        images: [
            "ASUSTUFGaming.png",
            "ASUSTUFGaming1.png",
            "ASUSTUFGaming2.png",
            "ASUSTUFGaming3.png",
            "ASUSTUFGaming4.png",
            "ASUSTUFGaming5.png"
        ],

        // характеристики
        specs: {
            screen: '15.6" IPS 144Hz',
            cpu: "Intel Core i7",
            ram: "16 GB",
            ssd: "512 GB SSD",
            gpu: "RTX 4060"
        }
    },

    {
        id: 2,

        name: "Samsung Galaxy S26 Ultra",
        fullname:'Мобільний телефон Samsung Galaxy S26 Ultra 12/512GB Black (SM-S948BZKGEUC)',

        price: 70999,

        category: "Смартфони",

        img: "S26ultra.png",

        images: [
            "S26ultra.png",
            "samsungUltra1.png",
            "samsungUltra2.png",
            "samsungUltra3.png",
            "samsungUltra4.png",
            "samsungUltra5.png"
        ],

        specs: {
            screen: '6.9" AMOLED',
            memory: "512 GB",
            camera: "200 MP",
            battery: "5500 mAh"
        }
    },
    
// ===== Apple AirPods Pro =====
{
    id: 3,
    name: "Apple AirPods Pro",
    fullname:'Навушники Apple AirPods Pro with MagSafe Case USB-C (3-тє покоління) (MFHP4ZE/A)',
    price: 14099,
    category: "Навушники",
    img: "AppleAirPodsPro.png",

    images: [
        "AppleAirPodsPro.png",
        "AppleAirPodsPro1.png",
        "AppleAirPodsPro2.png"
    ],

    specs: {
        type: "In-Ear",
        noise_canceling: "Active Noise Cancellation",
        battery: "До 6 годин (до 30 годин з кейсом)",
        chip: "Apple H2",
        features: "Прозорий режим, Spatial Audio"
    }
},

// ===== Apple Watch SE 3 =====
{
    id: 4,
    name: "Apple Watch SE 3",
    fullname:'Смарт-годинник Apple Watch SE 3 (2025) GPS 40mm Starlight Aluminium Case with Starlight Sport Band - S/M (MEH34RK/A)',
    price: 13899,
    category: "Годинники",
    img: "AppleWatchSE3.png",

    images: [
        "AppleWatchSE3.png",
        "AppleWatchSE31.png",
        "AppleWatchSE32.png"
    ],

    specs: {
        display: "Retina OLED",
        size: "40/44 мм",
        cpu: "S8 chip",
        sensors: "Пульс, сон, активність",
        battery: "До 18 годин"
    }
},

// ===== Apple iPhone 15 =====
{
    id: 5,
    name: "Apple iPhone 15",
    fullname:'Мобільний телефон Apple iPhone 15 128GB Black (MTP03RX/A)',
    price: 36299,
    category: "Смартфони",
    img: "AppleiPhone15.png",

    images: [
        "AppleiPhone15.png",
        "AppleiPhone151.png",
        "AppleiPhone152.png",
        "AppleiPhone153.png"
    ],

    specs: {
        display: '6.1" Super Retina XDR OLED',
        processor: "A16 Bionic",
        camera: "48 MP основна камера",
        memory: "128 GB / 256 GB / 512 GB",
        battery: "До 20 годин відео",
        charging: "Lightning / MagSafe"
    }
},

// ===== JBL Tune 520BT =====
{
    id: 6,
    name: "JBL Tune 520BT",
    fullname:'Навушники JBL Tune 520BT Black (JBLT520BTBLKEU)',
    price: 1799,
    category: "Навушники",
    img: "JBLTune520BT.png",

    images: [
        "JBLTune520BT.png",
        "JBLTune520BT1.png",
        "JBLTune520BT2.png",
        "JBLTune520BT3.png",
        "JBLTune520BT4.png"
    ],

    specs: {
        type: "On-Ear (накладні)",
        connection: "Bluetooth 5.3",
        battery: "До 57 годин роботи",
        charging: "USB-C (швидка зарядка)",
        sound: "JBL Pure Bass Sound",
        weight: "157 г"
    }
},
{
    id: 7,

    name: "Lenovo IdeaPad Slim 5",
    fullname:'Ноутбук Lenovo IdeaPad Slim 5 16ARP10 (83HU0038RA) Luna Grey / 16" IPS WUXGA / AMD Ryzen 5 7535HS / RAM 16 ГБ / SSD 512 ГБ / AMD Radeon 660M',
    price: 39999,

    category: "Ноутбуки",

    img: "LenovoIdeaPadSlim5.png",

    images: [
        "LenovoIdeaPadSlim5.png",
        "LenovoIdeaPadSlim51.png",
        "LenovoIdeaPadSlim52.png",
        "LenovoIdeaPadSlim53.png",
        "LenovoIdeaPadSlim54.png"
    ],

    specs: {
        screen: '16" WUXGA IPS',
        processor: "AMD Ryzen 7 8845HS",
        ram: "16 GB LPDDR5",
        ssd: "1 TB SSD",
        gpu: "AMD Radeon Graphics",
        battery: "До 12 годин",
        weight: "1.89 кг"
    }
},
{
    id: 8,

    name: "ASUS VivoBook S14",
    fullname:'Ноутбук ASUS Vivobook 15 X1504VA-BQ978 (90NB10J2-M016N0) Cool Silver / 15.6" IPS Full HD / Intel Core i3-1315U / RAM 12 ГБ / SSD 512 ГБ',
    price: 49999,

    category: "Ноутбуки",

    img: "ASUSVivoBookS14.png",

    images: [
        "ASUSVivoBookS14.png",
        "ASUSVivoBookS141.png",
        "ASUSVivoBookS142.png",
        "ASUSVivoBookS143.png",
        "ASUSVivoBookS144.png",
    ],

    specs: {
        screen: '14" OLED 120Hz',
        processor: "Intel Core Ultra 7",
        ram: "16 GB LPDDR5X",
        ssd: "1 TB SSD",
        gpu: "Intel Arc Graphics",
        battery: "До 14 годин",
        weight: "1.3 кг"
    }
},
    {
    id: 9,

    name: "Xiaomi Redmi Note 15",
    fullname:'Мобільний телефон Xiaomi Redmi Note 15 8/256GB Black (1183675)',

    price: 10999,

    category: "Смартфони",

    img: "RedmiNote15.png",

    images: [
        "RedmiNote15.png",
        "RedmiNote151.png",
        "RedmiNote152.png",
        "RedmiNote153.png"
    ],

    specs: {
        display: '6.67" AMOLED 120Hz',
        processor: "MediaTek Dimensity 8300",
        memory: "256 GB",
        ram: "12 GB",
        camera: "200 MP",
        battery: "5100 mAh",
        charging: "120W Fast Charge"
    }
},
{
    id: 10,

    name: "Samsung Galaxy Watch 7",
    fullname:'Смарт-годинник Samsung Galaxy Watch 7 40mm Cream (SM-L300NZEASEK)',

    price: 11499,

    category: "Годинники",

    img: "GalaxyWatch7.png",

    images: [
        "GalaxyWatch7.png",
        "GalaxyWatch71.png",
        "GalaxyWatch72.png",
        "GalaxyWatch73.png"
    ],

    specs: {
        display: '1.5" Super AMOLED',
        processor: "Exynos W1000",
        memory: "32 GB",
        battery: "До 40 годин",
        sensors: "Пульс, SpO2, сон, ЕКГ",
        protection: "5ATM + IP68",
        os: "Wear OS"
    }
},
{
    id: 11,

    name: "HyperX Cloud Stinger 2",
    fullname:'Навушники HyperX Cloud Stinger 2 Core Wired Black (683L9AA)',

    price: 1889,

    category: "Навушники",

    img: "HyperXCloudStinger2.png",

    images: [
        "HyperXCloudStinger2.png",
        "HyperXCloudStinger21.png",
        "HyperXCloudStinger22.png",
        "HyperXCloudStinger23.png",
        "HyperXCloudStinger24.png"
    ],

    specs: {
        type: "Gaming Headset",
        connection: "3.5 мм",
        sound: "DTS Headphone:X",
        microphone: "Поворотний мікрофон",
        weight: "275 г",
        compatibility: "PC, PS5, Xbox, Nintendo Switch"
    }
},
{
    id: 12,

    name: "Google Pixel Watch Polished Silver",
    fullname:'Смарт-годинник Google Pixel Watch Polished Silver Case/Charcoal Active Band',

    price: 19967,

    category: "Годинники",

    img: "PixelWatchSilver.png",

    images: [
        "PixelWatchSilver.png",
        "PixelWatchSilver1.png",
        "PixelWatchSilver2.png"
    ],

    specs: {
        display: '1.2" AMOLED',
        processor: "Qualcomm Snapdragon W5",
        memory: "32 GB",
        battery: "До 24 годин",
        sensors: "Пульс, SpO2, сон, Fitbit",
        protection: "5ATM",
        os: "Wear OS"
    }
}

];






let slides = document.querySelectorAll(".slide");
let next = document.querySelector(".right");
let prev = document.querySelector(".left");

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

next.addEventListener("click", function() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
});

prev.addEventListener("click", function() {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
});


let toggle = document.getElementById("theme-toggle");

// перевірка збереження
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

// зміна
toggle.addEventListener("change", function() {

    if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }

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

// ===== ДОДАВАННЯ В КОШИК ЗА ID ДЛЯ КНОПОК З HTML =====
function addToCartById(productId) {
    // 1. Шукаємо товар у нашому глобальному масиві products за його id
    let product = products.find(p => p.id === productId);

    // Якщо раптом товар не знайшовся в масиві, зупиняємо роботу функції
    if (!product) {
        console.error("Товар з id " + productId + " не знайдено в масиві products!");
        return;
    }

    // 2. Беремо поточний кошик з localStorage
    let cart = JSON.parse(localStorage.getItem("techma-cart")) || [];

    // 3. Шукаємо, чи є вже такий товар у кошику
    let existingProduct = cart.find(item => item.id === product.id);

    // 4. Якщо є — збільшуємо кількість, якщо немає — додаємо об'єкт з quantity: 1
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // 5. Зберігаємо оновлений кошик назад у localStorage
    localStorage.setItem("techma-cart", JSON.stringify(cart));

    // 6. Оновлюємо кружечок кількості в шапці сайту
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // 7. Робимо моментальний перехід на сторінку кошика
    window.location.href = "cart.html";
}