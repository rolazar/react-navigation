const home = "/react-navigation";
const path = window.location.pathname;
const state = { path: path };

debugger;
console.log(state);

//CHANGE THE URL WITHOUT REROUTING
// window.history.replaceState(state, "", path);

//REDIRECT WITH RELOADING
window.location.replace(`${home}?redirect=${path}`);
