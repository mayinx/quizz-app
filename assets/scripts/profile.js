// import { getData, setData, loadSeedData } from "/lib/db.js";
// import { theme } from "/assets/scripts/base.js";
import { getTheme, setTheme } from "/lib/theme.js";

const profileOnLoad = () => {
  const enableDarkModeBtnCaption = "Enable Dark Mode!";
  const disableDarkModeBtnCaption = "Disable Dark Mode!";

  const initializeDarkModeToggleBtn = (btn, theme = "light") => {
    btn.textContent =
      theme && theme === "dark"
        ? disableDarkModeBtnCaption
        : enableDarkModeBtnCaption;
    if (btn.textContent == disableDarkModeBtnCaption)
      btn.classList.add("dark-mode-btn--toggled");
  };

  const darkModeToggleBtn = document.querySelector(".dark-mode-btn");
  initializeDarkModeToggleBtn(darkModeToggleBtn, getTheme());

  // TOGGLE DARK MODE
  darkModeToggleBtn.addEventListener("click", (e) => {
    let theme;
    if (e.target.classList.toggle("dark-mode-btn--toggled")) {
      theme = "dark";
      e.target.textContent = disableDarkModeBtnCaption;
    } else {
      theme = "light";
      e.target.textContent = enableDarkModeBtnCaption;
    }

    setTheme(theme);
  });

  // RESET QUESTIONS DB / CLEAR LOCAL_STORAGE
  document
    .querySelector(".reset-questions-db-btn")
    .addEventListener("click", (e) => {
      if (confirm("Really? Destruction? You sure?")) {
        localStorage.removeItem("questions");
        alert("Questions DB cleared");
      }
    });
};
window.addEventListener("load", profileOnLoad, false);
