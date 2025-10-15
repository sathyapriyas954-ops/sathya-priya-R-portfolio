
// Background star animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 80; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    d: Math.random() * 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.d;
    if (s.y > canvas.height) s.y = 0;
  }
  requestAnimationFrame(drawStars);
}
drawStars();

// Navigation handling
const navBtns = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll("section");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
    navLinks.classList.remove("show");
  });
});

// Toggle mobile menu
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
