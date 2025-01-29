export function getRootPath() {
  let root = "";
  const hostname = window.location.hostname;
  if (hostname === "rolazar.github.io") root = "/react-navigation";
  // console.log(`hostname: ${hostname}`);
  return root;
}
