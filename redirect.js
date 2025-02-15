const home = "/react-navigation";
const path = window.location.pathname;
window.location.replace(home);
setTimeout(() => window.history.pushState("", "", path), 3000);
