const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const modeToggle = document.getElementById('modeToggle');
const title = document.getElementById('title');
const tagline = document.getElementById('tagline');

let time = 0;
let isDarkMode = false;
const wave = {
    y: 0,
    length: 0.01,
    amplitude: 20,
    frequency: 0.005
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 3;
    wave.y = canvas.height / 2;
}

function getGradient(t, isDark) {
    if (isDark) {
        const r = Math.sin(0.3 * t) * 20 + 30;
        const g = Math.sin(0.3 * t + 2) * 20 + 50;
        const b = Math.sin(0.3 * t + 4) * 20 + 80;
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        const r = Math.sin(0.3 * t) * 30 + 100;
        const g = Math.sin(0.3 * t + 2) * 30 + 150;
        const b = Math.sin(0.3 * t + 4) * 30 + 220;
        return `rgb(${r}, ${g}, ${b})`;
    }
}

function drawWave() {
    ctx.fillStyle = isDarkMode ? '#1a1a1a' : '#87CEEB';
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
    document.body.style.backgroundColor = isDarkMode ? '#1a1a1a' : '#87CEEB';
    title.style.color = isDarkMode ? '#ffffff' : '#000000';
    tagline.style.color = isDarkMode ? '#cccccc' : '#333333';
    modeToggle.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.7)';
    modeToggle.style.color = isDarkMode ? 'black' : 'black';
}

modeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    modeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    updateColors();
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
updateColors();
animate();