const home = "/react-navigation";
const path = window.location.pathname;
setTimeout(() => window.history.pushState("", "", home), 10000);
// setTimeout(() => window.history.pushState("", "", path), 3000);
// window.location.replace(home);
