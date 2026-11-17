
/* =========================
   فتح رسالة الحب
========================= */

const openBtn = document.getElementById("openBtn");

const letter = document.getElementById("letter");

openBtn.addEventListener("click", function () {

    letter.classList.remove("hidden");

    openBtn.textContent = "وصلتلك رسالتي يا عيون قلبي ❤️";

    openBtn.disabled = true;

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================
   تشغيل الأغنية
========================= */

const song = document.getElementById("song");

const musicBtn = document.getElementById("musicBtn");

const musicStatus = document.getElementById("musicStatus");

musicBtn.addEventListener("click", async function () {

    if (song.paused) {

        try {

            await song.play();

            musicBtn.textContent = "⏸ إيقاف الأغنية";

            musicStatus.textContent = "الأغنية شغالة ليكي يا منمونه ❤️";

        } catch (error) {

            musicStatus.textContent =
                "اتأكدي إن ملف الأغنية موجود داخل مجلد music باسم song.mp3";

        }

    } else {

        song.pause();

        musicBtn.textContent = "▶ شغلي أغنيتنا";

        musicStatus.textContent = "الأغنية متوقفة يا عيون قلبي ❤️";

    }

});


/* =========================
   عند انتهاء الأغنية
========================= */

song.addEventListener("ended", function () {

    musicBtn.textContent = "▶ شغلي أغنيتنا";

    musicStatus.textContent = "خلصت الأغنية يا منمونه ❤️";

});


/* =========================
   رسائل الحب الخاصة بمنمونه
========================= */

const messages = [

    "يا منمونه قلبي، وجودك في حياتي بيخلّي حاجات كتير أحلى، وابتسامتك لوحدها كفاية تفرح قلبي ❤️",

    "يا عيون قلبي، بحب تفاصيلك الصغيرة وطريقتك في الكلام، وحتى الحاجات اللي إنتي مش واخدة بالك منها 💗",

    "نفسي أشوفك دايماً مبسوطة، ومفيش حاجة تقدر تزعلك أو تطفي ضحكتك الجميلة يا أميرتي 🌹",

    "يمكن مش بعرف أقول كل اللي جوايا، بس إنتي ليكي مكانة خاصة جداً عندي، ومش عايزك تنسي ده أبداً 💕",

    "لو هختار لحظة حلوة في يومي، هختار اللحظة اللي بتكوني فيها مبسوطة وبتضحكي من قلبك 💌",

    "من Kimo ليكي، خلي بالك من قلبك الجميل، وافتكري دايماً إنك إنسانة غالية وتستاهلي كل حاجة حلوة 🫶"

];


/* =========================
   تشغيل رسائل القلوب
========================= */

const messageButtons =
    document.querySelectorAll(".message-heart");

const messageBox =
    document.getElementById("messageBox");

const messageText =
    document.getElementById("messageText");


messageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const index = Number(button.dataset.index);

        messageText.textContent = messages[index];

        messageBox.classList.remove("hidden");

        messageBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


/* =========================
   المفاجأة الأخيرة
========================= */

const finalBtn = document.getElementById("finalBtn");

const finalText = document.getElementById("finalText");

finalBtn.addEventListener("click", function () {

    finalText.classList.remove("hidden");

    finalBtn.textContent = "بحبك يا عيون قلبي ❤️";

    finalBtn.disabled = true;

    finalText.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================
   القلوب المتحركة
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 800);
