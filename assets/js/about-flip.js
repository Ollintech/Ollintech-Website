(function () {
    const root = document.querySelector("[data-about-flip]");
    if (!root) return;

    const cardBtn = root.querySelector(".about-card");
    const dots = root.querySelectorAll("[data-about-face]");
    const photoFace = root.querySelector(".about-card__face--photo");
    const textFace = root.querySelector(".about-card__face--text");

    function setFlipped(flipped) {
        root.classList.toggle("is-flipped", flipped);

        if (cardBtn) {
            cardBtn.setAttribute("aria-expanded", flipped ? "true" : "false");
            cardBtn.setAttribute(
                "aria-label",
                flipped
                    ? "Quem somos nós. Clique para voltar à foto da equipe."
                    : "Quem somos nós. Clique para ver mais sobre a equipe."
            );
        }

        if (photoFace) photoFace.setAttribute("aria-hidden", flipped ? "true" : "false");
        if (textFace) textFace.setAttribute("aria-hidden", flipped ? "false" : "true");

        dots.forEach((dot, i) => {
            const active = flipped ? i === 1 : i === 0;
            dot.classList.toggle("is-active", active);
            dot.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    cardBtn.addEventListener("click", () => {
        setFlipped(!root.classList.contains("is-flipped"));
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            e.stopPropagation();
            setFlipped(Number(dot.dataset.aboutFace) === 1);
        });
    });
})();
