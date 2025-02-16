//CHANGE THE URL WITHOUT REROUTING
// const state = { path: path };
// window.history.replaceState(state, "", path);

//REDIRECT WITH RELOADING
const rootPath = "/react-navigation";
const path = window.location.pathname;
localStorage.setItem("redirect", path);
window.location.replace(rootPath);
// window.location.replace(`${rootPath}?redirect=${path}`);
