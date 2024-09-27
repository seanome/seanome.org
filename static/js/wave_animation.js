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
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--wave-color-1'));
        gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue('--wave-color-2'));        ctx.fillStyle = gradient;
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
            document.documentElement.style.setProperty('--bg-color', '#000000');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--wave-color-1', '#64dfdf');
            document.documentElement.style.setProperty('--wave-color-2', '#48bfe3');
            modeToggle.innerHTML = '🌙';
        } else {
            document.documentElement.style.setProperty('--bg-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#000000');
            document.documentElement.style.setProperty('--wave-color-1', '#3a86ff');
            document.documentElement.style.setProperty('--wave-color-2', '#8ecae6');
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
    resizeCanvas();
    updateMode();
    animate();
});