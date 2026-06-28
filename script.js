const toggle = document.getElementById('mode-toggle');
const moonIcon = toggle.querySelector('.icon-moon');
const sunIcon = toggle.querySelector('.icon-sun');

function setMode(dark) {
    if (dark) {
        document.body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
}

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setMode(saved === 'dark' || (!saved && prefersDark));

toggle.addEventListener('click', () => {
    setMode(!document.body.classList.contains('dark-mode'));
});
