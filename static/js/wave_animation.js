// Listen for system color scheme changes


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    let time = 0;
    let isDarkMode = false;
    const wave = {
        y: 0,
        length: 0.01,
        amplitude: 30,
        frequency: 0.005
    };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 3;
        wave.y = canvas.height / 2;
    }

    function getCSSVariable(variableName) {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    }

    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x < canvas.width; x++) {
            const variationFactor = Math.sin(x * 0.02 + time * 0.2) * 5;
            const y = wave.y + Math.sin(x * wave.length + time) * wave.amplitude + variationFactor;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, getCSSVariable('--accent-color'));
        gradient.addColorStop(1, getCSSVariable('--secondary-color'));
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    function animate() {
        drawWave();
        time += wave.frequency;
        requestAnimationFrame(animate);
    }

    function toggleMode() {
        isDarkMode = !isDarkMode;
        updateMode();
    }

    function updateMode() {
        if (isDarkMode) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modeToggle.innerHTML = '🌙';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modeToggle.innerHTML = '☀️';
        }
    }

    modeToggle.addEventListener('click', toggleMode);
    window.addEventListener('resize', resizeCanvas);

    // Updated color scheme change detection
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleColorSchemeChange(e) {
        isDarkMode = e.matches;
        updateMode();
    }

    // Set up the listener for color scheme changes
    colorSchemeQuery.addEventListener('change', handleColorSchemeChange);

    // Initial setup
    isDarkMode = colorSchemeQuery.matches;
    body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
    resizeCanvas();
    updateMode();
    animate();
});