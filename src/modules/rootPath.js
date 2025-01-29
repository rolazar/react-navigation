export const rootPath = getRootPath();

function getRootPath() {
  let rootPath = "";
  const hostname = window.location.hostname;
  if (hostname === "rolazar.github.io") rootPath = "/react-navigation";
  return rootPath;
}
