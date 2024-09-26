const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const modeToggle = document.getElementById('modeToggle');
const title = document.getElementById('title');
const tagline = document.getElementById('tagline');
const body = document.body;

let time = 0;
let isDarkMode = false;
const wave = {
    y: 0,
    length: 0.008,
    amplitude: 15,
    frequency: 0.002
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 3;
    wave.y = canvas.height / 2;
}

function getGradient(t, isDark) {
    const baseColor = isDark ? [30, 50, 80] : [100, 150, 220];
    const r = Math.sin(0.3 * t) * 20 + baseColor[0];
    const g = Math.sin(0.3 * t + 2) * 20 + baseColor[1];
    const b = Math.sin(0.3 * t + 4) * 20 + baseColor[2];
    return `rgb(${r}, ${g}, ${b})`;
}

function drawWave() {
    ctx.fillStyle = isDarkMode ? '#1a1a1a' : '#f0f8ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for (let x = 0; x < canvas.width; x++) {
        const y = wave.y + Math.sin(x * wave.length + time) * wave.amplitude;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, getGradient(time, isDarkMode));
    gradient.addColorStop(1, getGradient(time + Math.PI, isDarkMode));
    ctx.fillStyle = gradient;
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWave();
    time += wave.frequency;
    requestAnimationFrame(animate);
}

function updateColors() {
    body.classList.toggle('dark-mode', isDarkMode);
}

modeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateColors();
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
updateColors();
animate();