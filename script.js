const WHATSAPP_NUMBER = "201203580875";

// الزيادة مخفية داخل السعر النهائي
const PROFIT = 15;


// ========================================
// FREE FIRE
// ========================================

const diamondPackages = [

  {
    name: "100 جوهرة",
    base: 50,
    icon: "💎"
  },

  {
    name: "310 جوهرة",
    base: 150,
    icon: "💎"
  },

  {
    name: "520 جوهرة",
    base: 250,
    icon: "💎"
  },

  {
    name: "1060 جوهرة",
    base: 500,
    icon: "💎"
  },

  {
    name: "2180 جوهرة",
    base: 1000,
    icon: "💎"
  },

  {
    name: "5600 جوهرة",
    base: 4300,
    icon: "💎"
  }

];


// ========================================
// PUBG MOBILE
// ========================================

const pubgPackages = [

  {
    name: "60 UC",
    base: 57.99,
    icon: "🎮"
  },

  {
    name: "325 UC",
    base: 293.99,
    icon: "🎮"
  },

  {
    name: "660 UC",
    base: 587.99,
    icon: "🎮"
  },

  {
    name: "1800 UC",
    base: 1471.99,
    icon: "🎮"
  },

  {
    name: "3850 UC",
    base: 2943.99,
    icon: "🎮"
  },

  {
    name: "8100 UC",
    base: 5888.99,
    icon: "🎮"
  }

];


// ========================================
// العضويات
// ========================================

const memberships = [

  {
    name: "عضوية أسبوعية",
    base: 100,
    icon: "👑"
  },

  {
    name: "عضوية شهرية",
    base: 300,
    icon: "👑"
  }

];


// ========================================
// عناصر الصفحة
// ========================================

const diamondGrid =
  document.getElementById("diamondGrid");

const pubgGrid =
  document.getElementById("pubgGrid");

const membershipGrid =
  document.getElementById("membershipGrid");

const selectedPackage =
  document.getElementById("selectedPackage");

const totalPrice =
  document.getElementById("totalPrice");

const orderForm =
  document.getElementById("orderForm");


// ========================================
// السعر النهائي
// ========================================

function finalPrice(base) {

  return base + PROFIT;

}


// ========================================
// تنسيق السعر
// ========================================

function formatPrice(price) {

  if (Number.isInteger(price)) {

    return `${price} جنيه`;

  }

  return `${price.toFixed(2)} جنيه`;

}


// ========================================
// اختيار المنتج
// ========================================

function selectPackage(name, price) {

  selectedPackage.value = name;

  totalPrice.textContent =
    formatPrice(price);

  document
    .getElementById("order")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ========================================
// كارت Free Fire
// ========================================

function createDiamondCard(item) {

  const price =
    finalPrice(item.base);

  const card =
    document.createElement("article");

  card.className =
    "package";

  card.innerHTML = `

    <div class="diamond">
      ${item.icon}
    </div>

    <h3>
      ${item.name}
    </h3>

    <div class="price">
      ${formatPrice(price)}
    </div>

    <button type="button">
      اختيار الباقة
    </button>

  `;

  card
    .querySelector("button")
    .addEventListener("click", () => {

      selectPackage(
        `Free Fire - ${item.name}`,
        price
      );

    });

  return card;

}


// ========================================
// كارت PUBG
// ========================================

function createPubgCard(item) {

  const price =
    finalPrice(item.base);

  const card =
    document.createElement("article");

  card.className =
    "package";

  card.innerHTML = `

    <div class="diamond">
      ${item.icon}
    </div>

    <h3>
      ${item.name}
    </h3>

    <div class="price">
      ${formatPrice(price)}
    </div>

    <button type="button">
      اختيار الباقة
    </button>

  `;

  card
    .querySelector("button")
    .addEventListener("click", () => {

      selectPackage(
        `PUBG Mobile - ${item.name}`,
        price
      );

    });

  return card;

}


// ========================================
// كارت العضوية
// ========================================

function createMembershipCard(item) {

  const card =
    document.createElement("article");

  card.className =
    "package membership";

  card.innerHTML = `

    <div class="diamond">
      ${item.icon}
    </div>

    <h3>
      ${item.name}
    </h3>

    <div class="price">
      ${formatPrice(item.base)}
    </div>

    <button type="button">
      اختيار العضوية
    </button>

  `;

  card
    .querySelector("button")
    .addEventListener("click", () => {

      selectPackage(
        item.name,
        item.base
      );

    });

  return card;

}


// ========================================
// عرض Free Fire
// ========================================

diamondPackages.forEach(item => {

  diamondGrid.appendChild(
    createDiamondCard(item)
  );

});


// ========================================
// عرض PUBG
// ========================================

pubgPackages.forEach(item => {

  pubgGrid.appendChild(
    createPubgCard(item)
  );

});


// ========================================
// عرض العضويات
// ========================================

memberships.forEach(item => {

  membershipGrid.appendChild(
    createMembershipCard(item)
  );

});


// ========================================
// إرسال الطلب إلى واتساب
// ========================================

orderForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const playerId =
      document
        .getElementById("playerId")
        .value
        .trim();


    const playerName =
      document
        .getElementById("playerName")
        .value
        .trim();


    const packageName =
      selectedPackage.value
        .trim();


    // ==============================
    // التحقق من الباقة
    // ==============================

    if (!packageName) {

      alert(
        "من فضلك اختار الباقة أولاً."
      );

      document
        .getElementById("games")
        .scrollIntoView({
          behavior: "smooth"
        });

      return;

    }


    // ==============================
    // التحقق من البيانات
    // ==============================

    if (!playerId || !playerName) {

      alert(
        "من فضلك اكتب ID اللاعب واسم اللاعب."
      );

      return;

    }


    const price =
      totalPrice.textContent;


    // ==============================
    // رسالة واتساب
    // ==============================

    const message =

`🔥 أهلاً بيك في Medo & البرازيلي ستور ❤️

🎮 طلب شحن ألعاب

👤 اسم اللاعب:
${playerName}

🆔 ID اللاعب:
${playerId}

📦 الباقة:
${packageName}

💰 السعر:
${price}

💳 التحويل / التواصل:
+20 12 03580875

✅ برجاء تأكيد الطلب بعد التحويل.

شكراً لاختيارك
Medo & البرازيلي ستور ❤️`;


    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
      url,
      "_blank"
    );

  }
);
