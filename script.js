document.addEventListener("DOMContentLoaded", () => {

    const newGrid = document.getElementById("new-grid");
    const recommendedGrid = document.getElementById("recommended-grid");

    const allCards = Array.from(
        document.querySelectorAll("main.movies-grid .movie-card")
    );


    // NOVOS
    const newCards = allCards.filter(card => {
        return card.querySelector(".new") !== null;
    });

    // Embaralha os filmes novos
    newCards.sort(() => Math.random() - 0.5);

    // Pega no máximo 4
    const selectedNewCards = newCards.slice(0, 4);

    selectedNewCards.forEach(card => {

        const clone = card.cloneNode(true);

        clone.removeAttribute("id");

        newGrid.appendChild(clone);
    });

    // RECOMENDADOS
    const validCards = allCards.filter(card => {

        const link = card.getAttribute("href");
        const image = card.querySelector("img");
        const title = card.querySelector("h3");

        return (
            link &&
            link !== "#" &&
            image &&
            image.getAttribute("src") &&
            image.getAttribute("src").trim() !== "" &&
            title &&
            title.textContent.trim() !== ""
        );
    });

    // Embaralha
    validCards.sort(() => Math.random() - 0.5);

    // Pega 4
    const recommendedCards = validCards.slice(0, 4);

    recommendedCards.forEach(card => {

        const clone = card.cloneNode(true);

        clone.removeAttribute("id");

        recommendedGrid.appendChild(clone);
    });

});