const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("romanticModal");
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

// No button escapes
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Heart Animation Setup
let hearts = [];
function createHearts() {
    for (let i = 0; i < 50; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 20 + 10,
            speed: Math.random() * 3 + 2,
            opacity: Math.random()
        });
    }
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, i) => {
        ctx.globalAlpha = h.opacity;
        ctx.font = `${h.size}px Arial`;
        ctx.fillText("❤️", h.x, h.y);
        h.y += h.speed;
        if (h.y > canvas.height) hearts[i].y = -20;
    });
    requestAnimationFrame(drawHearts);
}

// Yes button click
yesBtn.addEventListener("click", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createHearts();
    drawHearts();
    modal.style.display = "block";
});

document.getElementById("closeBtn").onclick = () => modal.style.display = "none";