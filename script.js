const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Make the "No" button move away when the mouse gets near
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Yes button logic
yesBtn.addEventListener("click", () => {
    alert("I know you love me 😚 lets celebrate the love for life");
});