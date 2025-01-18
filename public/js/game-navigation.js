<!-- js/game-navigation.js -->
document.addEventListener("DOMContentLoaded", () => {
    const games = document.querySelectorAll(".game-link");

    games.forEach((game) => {
        game.addEventListener("click", (e) => {
            e.preventDefault();
            const gameUrl = game.getAttribute("href");
            window.location.href = gameUrl;
        });
    });
});
