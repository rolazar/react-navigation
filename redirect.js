const home = "/react-navigation";
const path = window.location.pathname;
const state = { path: path };

debugger;

//CHANGE THE URL WITHOUT REROUTING
window.history.replaceState(state, "", path);

//REDIRECT WITH RELOADING
window.location.replace(home);
