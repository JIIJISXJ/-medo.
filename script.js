const WHATSAPP_NUMBER = "201203580875";


function toggleGame(game) {

    const section = document.querySelector(
        game === "freefire"
            ? ".freefire-section"
            : ".pubg-section"
    );

    const otherSection = document.querySelector(
        game === "freefire"
            ? ".pubg-section"
            : ".freefire-section"
    );

    // افتح اللعبة المطلوبة
    section.classList.toggle("open");

    // اقفل اللعبة الثانية
    otherSection.classList.remove("open");
}


function orderPackage(game, packageName, price) {

    let playerId = "";
    let playerName = "";

    if (game === "Free Fire") {

        playerId = document.getElementById("ff-id").value.trim();
        playerName = document.getElementById("ff-name").value.trim();

    } else if (game === "PUBG Mobile") {

        playerId = document.getElementById("pubg-id").value.trim();
        playerName = document.getElementById("pubg-name").value.trim();

    } else {

        playerId = "غير مطلوب";
        playerName = "غير مطلوب";
    }


    if (
        game !== "Free Fire" &&
        game !== "PUBG Mobile"
    ) {
        playerId = "غير مطلوب";
        playerName = "غير مطلوب";
    }


    if (
        (game === "Free Fire" || game === "PUBG Mobile") &&
        playerId === ""
    ) {
        alert("من فضلك اكتب ID اللاعب أولاً");
        return;
    }


    const message =
`🔥 طلب جديد من Medo & البرازيلي ستور

🎮 اللعبة: ${game}
📦 الباقة: ${packageName}
💰 السعر: ${price} جنيه

🆔 ID اللاعب: ${playerId}
👤 اسم اللاعب: ${playerName}

✅ أريد إتمام الطلب`;


    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(whatsappURL, "_blank");
}
