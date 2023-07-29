function Theme() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}

document.getElementById("theme").addEventListener("click", function () {
  const moonIcon = "🌙";
  const sunIcon = "☀️";

  const button = document.getElementById("theme");
  const currentIcon = button.innerText;

  if (currentIcon === moonIcon) {
    button.innerText = sunIcon;
    Theme(); 
  } else if (currentIcon === sunIcon) {
    button.innerText = moonIcon;
    Theme();
  }
});


document.getElementById("open_pop_up").addEventListener("click", function() {
  document.getElementById("id_pop_up").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("id_pop_up").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("id_pop_up")) {
      document.getElementById("id_pop_up").style.display = "none";
  }
});

document.getElementById("redButton").addEventListener("click", function() {
  document.getElementById("id_pop_up").style.display = "none";
});

document.getElementById("greenButton").addEventListener("click", function() {
  document.getElementById("id_pop_up").style.display = "none";
});
