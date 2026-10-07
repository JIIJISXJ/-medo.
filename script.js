const WHATSAPP_NUMBER = "201203580875";

const PROFIT = 15;

/*
  Free Fire
  الأسعار الأساسية مأخوذة من الصورة التي أرسلتها
  والـ 15 جنيه يتم إضافتها تلقائيًا.
*/

const diamondPackages = [
  {
    name: "100 جوهرة",
    base: 49.99,
    icon: "💎"
  },

  {
    name: "310 جوهرة",
    base: 149.99,
    icon: "💎"
  },

  {
    name: "520 جوهرة",
    base: 249.99,
    icon: "💎"
  },

  {
    name: "1060 جوهرة",
    base: 499.99,
    icon: "💎"
  },

  {
    name: "2180 جوهرة",
    base: 999.99,
    icon: "💎"
  },

  {
    name: "5600 جوهرة",
    base: 2499.99,
    icon: "💎"
  }
];


/*
  PUBG Mobile
  الأسعار الحالية الموجودة في الموقع
  + 15 جنيه زيادة.
*/

const pubgPackages = [
  {
    name: "60 UC",
    base: 49.99,
    icon: "🎮"
  },

  {
    name: "300 UC",
    base: 249.99,
    icon: "🎮"
  },

  {
    name: "600 UC",
    base: 499.99,
    icon: "🎮"
  },

  {
    name: "1500 UC",
    base: 1249.99,
    icon: "🎮"
  },

  {
    name: "3000 UC",
    base: 2499.99,
    icon: "🎮"
  },

  {
    name: "6000 UC",
    base: 4999.99,
    icon: "🎮"
  }
];


/*
  العضويات
  بدون إضافة الـ 15 جنيه.
*/

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


function finalPrice(base) {
  return base + PROFIT;
}


function formatPrice(price) {

  if (Number.isInteger(price)) {
    return `${price} جنيه`;
  }

  return `${price.toFixed(2)} جنيه`;
}


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


/* Free Fire */

function createDiamondCard(item) {

  const price =
    finalPrice(item.base);

  const card =
    document.createElement("article");

  card.className = "package";

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


/* PUBG */

function createPubgCard(item) {

  const price =
    finalPrice(item.base);

  const card =
    document.createElement("article");

  card.className = "package";

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


/* Membership */

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


/* عرض الباقات */

diamondPackages.forEach(item => {

  diamondGrid.appendChild(
    createDiamondCard(item)
  );

});


pubgPackages.forEach(item => {

  pubgGrid.appendChild(
    createPubgCard(item)
  );

});


memberships.forEach(item => {

  membershipGrid.appendChild(
    createMembershipCard(item)
  );

});


/* إرسال الطلب على واتساب */

orderForm.addEventListener(
  "submit",
  event => {

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
      selectedPackage.value.trim();


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


    if (!playerId || !playerName) {

      alert(
        "من فضلك اكتب ID اللاعب واسم اللاعب."
      );

      return;
    }


    const price =
      totalPrice.textContent;


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
