const home = "/react-navigation";
const path = window.location.pathname;
window.location.replace(home);
window.history.pushState("", "", path);
