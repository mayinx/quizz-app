export function getTheme() {
  return localStorage.getItem("data-theme");
}
export function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("data-theme", theme);
}
export function updateThemeDataAttr(newTheme = null) {
  let theme = newTheme || getTheme();
  document.documentElement.setAttribute("data-theme", theme ? theme : "light");
}
