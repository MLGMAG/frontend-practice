function nextPage() {
  window.location.href = "yes.html";
}

function moveButton() {
  const noButton = document.getElementById("noButton");

  let x = Math.random() * (window.innerWidth - noButton.offsetWidth - 150);
  let y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}
