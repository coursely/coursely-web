function component() {
  let element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  return element;
}

console.log("Hello, Webpack!");
document.body.appendChild(component());
