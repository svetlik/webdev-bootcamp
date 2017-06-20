var button = document.querySelector("button");

button.addEventListener("click", function() {
  document.body.classList = [];
  document.body.classList.add("color-" + Math.floor(Math.random() * 6 + 1));
})
