/* ===========================================================
     COMPTE À REBOURS
========================================================== */
const eventDate = new Date("Novembre 12, 2026 09:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
  const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("jours").textContent = jours;
  document.getElementById("heures").textContent = heures;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("secondes").textContent = secondes;
}
updateCountdown();
setInterval(updateCountdown, 1000);