("use strict");
import { updateThemeDataAttr } from "/lib/theme.js";

const baseOnLoad = () => {
  updateThemeDataAttr();
};
window.addEventListener("load", baseOnLoad, false);
