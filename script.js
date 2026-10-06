// ========================================
// Medo & البرازيلي ستور
// ========================================

const WHATSAPP_NUMBER = "201203580875";

// مكسب باقات الجواهر
const DIAMOND_PROFIT = 15;


// ========================================
// باقات الجواهر
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

const membershipGrid =
  document.getElementById("membershipGrid");

const selectedPackage =
  document.getElementById("selectedPackage");

const totalPrice =
  document.getElementById("totalPrice");

const orderForm =
  document.getElementById("orderForm");


// ========================================
// حساب السعر النهائي للجواهر
// ========================================

function diamondFinalPrice(base) {

  return base + DIAMOND_PROFIT;

}


// ========================================
// إنشاء كارت الجواهر
// بدون السعر المشطوب
// ========================================

function createDiamondCard(item) {

  const price =
    diamondFinalPrice(item.base);


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
      ${price} جنيه
    </div>

    <button type="button">
      اختيار الباقة
    </button>

  `;


  card
    .querySelector("button")
    .addEventListener("click", () => {

      selectedPackage.value =
        item.name;


      totalPrice.textContent =
        `${price} جنيه`;


      document
        .getElementById("order")
        .scrollIntoView({
          behavior: "smooth"
        });

    });


  return card;

}


// ========================================
// إنشاء كارت العضوية
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
      ${item.base} جنيه
    </div>

    <button type="button">
      اختيار العضوية
    </button>

  `;


  card
    .querySelector("button")
    .addEventListener("click", () => {

      selectedPackage.value =
        item.name;


      totalPrice.textContent =
        `${item.base} جنيه`;


      document
        .getElementById("order")
        .scrollIntoView({
          behavior: "smooth"
        });

    });


  return card;

}


// ========================================
// عرض باقات الجواهر
// ========================================

diamondPackages.forEach(item => {

  diamondGrid.appendChild(
    createDiamondCard(item)
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


    // التأكد من اختيار الباقة

    if (!packageName) {

      alert(
        "من فضلك اختار الباقة أولاً."
      );

      document
        .getElementById("packages")
        .scrollIntoView({
          behavior: "smooth"
        });

      return;

    }


    // التأكد من البيانات

    if (!playerId || !playerName) {

      alert(
        "من فضلك اكتب ID اللاعب واسم اللاعب."
      );

      return;

    }


    const price =
      totalPrice.textContent;


    // ========================================
    // رسالة واتساب
    // ========================================

    const message =

`🔥 أهلاً بيك في Medo & البرازيلي ستور ❤️

🎮 طلب شحن Free Fire

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
