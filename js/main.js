/* ==============================
   DARK MODE
============================== */

const themeButton = document.getElementById("themeBtn");


// Load saved theme
const savedTheme = localStorage.getItem("writer-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀";
}


// Toggle theme
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    themeButton.textContent =
        darkMode ? "☀" : "☾";

    localStorage.setItem(
        "writer-theme",
        darkMode ? "dark" : "light"
    );

});