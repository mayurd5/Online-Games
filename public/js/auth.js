import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDzc8Xz8HEBTnNk-mJSuqVgvWmTpzEl714",
    authDomain: "online-games-b9959.firebaseapp.com",
    projectId: "online-games-b9959",
    storageBucket: "online-games-b9959.firebasestorage.app",
    messagingSenderId: "772455631525",
    appId: "1:772455631525:web:2b8263660d8390475a9b4c",
    measurementId: "G-3ZF8H59YED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authForm = document.getElementById("authForm");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (authForm) {
    authForm.addEventListener("submit", (e) => e.preventDefault());
    registerBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => alert("User Registered!"))
            .catch((error) => alert(error.message));
    });

    loginBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        signInWithEmailAndPassword(auth, email, password)
            .then(() => (window.location.href = "dashboard.html"))
            .catch((error) => alert(error.message));
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => (window.location.href = "index.html"));
    });
}

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
