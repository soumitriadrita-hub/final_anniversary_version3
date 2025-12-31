const knife = document.getElementById("knife");
const cake = document.getElementById("cake");

knife.addEventListener("dragend", () => {
  cake.src = "static/cake.png";
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 2000);
});
