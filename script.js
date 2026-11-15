document.addEventListener("DOMContentLoaded", function () {

const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");
const openButton = document.getElementById("openButton");

// ABRIR CONVITE
openButton.addEventListener("click", function () {

    const envelopeCard = document.getElementById("envelopeCard");

    openButton.disabled = true;

    envelopeCard.classList.add("opened");

    setTimeout(function () {

        envelope.style.opacity = "0";

        setTimeout(function () {

            envelope.style.display = "none";
            invitation.style.display = "block";

            window.scrollTo(0, 0);

        }, 900);

    }, 1800);

});

// DATA DO EVENTO: 12 DE DEZEMBRO DE 2026
const eventDate = new Date(2026, 11, 12, 16, 0, 0).getTime();

function updateCountdown() {

    const now = Date.now();
    const difference = eventDate - now;

    if (difference <= 0) {
        ["days", "hours", "minutes", "seconds"].forEach(function(id) {
            document.getElementById(id).textContent = "00";
        });
        return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// WHATSAPP
const telefone = "258859306121";

const mensagem = encodeURIComponent(
    "Olá, Sania e Mauro! Quero confirmar a minha presença no vosso noivado, dia 12/12/2026."
);

document.getElementById("whatsappButton").href =
    "https://wa.me/" + telefone + "?text=" + mensagem;

});
// PARTÍCULAS DOURADAS CINEMATOGRÁFICAS
const particleArea = document.querySelector(".particles");

if (particleArea) {
    for (let i = 0; i < 45; i++) {
        const particle = document.createElement("span");

        particle.className = "gold-particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = (5 + Math.random() * 8) + "s";
        particle.style.animationDelay = (Math.random() * 8) + "s";
        particle.style.setProperty(
            "--particle-size",
            (2 + Math.random() * 4) + "px"
        );

        particleArea.appendChild(particle);
    }
}