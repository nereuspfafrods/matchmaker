function calculateLove() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  const percentage = Math.floor(Math.random() * 101);

  document.getElementById("percentage").innerText = percentage + "%";

  const fill = document.getElementById("fill");

  fill.style.height = "0%";

  setTimeout(() => {
    fill.style.height = percentage + "%";
  }, 100);

  let message = "";

  if (percentage >= 90) {
    message = "Soulmates ❤️";
  } else if (percentage >= 70) {
    message = "Perfect Match 💕";
  } else if (percentage >= 50) {
    message = "Great Connection 😊";
  } else if (percentage >= 30) {
    message = "Maybe Maybe 😅";
  } else {
    message = "Better as Friends 😂";
  }

  document.getElementById("resultText").innerText =
    `${name1} + ${name2} = ${message}`;
}

/* FLOATING PARTICLES */

function createParticle() {
  const particle = document.createElement("div");

  particle.classList.add("particle");
  particle.innerHTML = "❤";

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.fontSize = Math.random() * 20 + 10 + "px";
  particle.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 300);
