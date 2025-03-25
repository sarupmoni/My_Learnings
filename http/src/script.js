function greet(name) {
  const h1 = document.createElement("h1");
  h1.textContent = `Hello ${name}`;
  document.body.appendChild(h1);
}

greet(name);
