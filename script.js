function createHeart() {

    let heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);

}

setInterval(createHeart, 500);
