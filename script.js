const WHATSAPP_NUMBER = "201203580875";


function orderPackage(game, packageName, price) {

    let playerId = "";
    let playerName = "";


    if (game === "Free Fire") {

        playerId =
            document.getElementById("ff-id").value.trim();

        playerName =
            document.getElementById("ff-name").value.trim();

    }


    if (game === "PUBG Mobile") {

        playerId =
            document.getElementById("pubg-id").value.trim();

        playerName =
            document.getElementById("pubg-name").value.trim();

    }


    /*
       العضويات لا تحتاج ID
    */

    if (
        game !== "Free Fire" &&
        game !== "PUBG Mobile"
    ) {

        playerId = "غير مطلوب";
        playerName = "غير مطلوب";

    }


    /*
       التأكد من كتابة ID
    */

    if (
        (game === "Free Fire" ||
        game === "PUBG Mobile") &&
        playerId === ""
    ) {

        alert("من فضلك اكتب ID اللاعب أولاً");

        return;
    }


    /*
       رسالة واتساب
    */

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


    window.open(
        whatsappURL,
        "_blank"
    );
}
