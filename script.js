// Dark mode toggle (remembers your choice)
const toggle = document.getElementById('mode-toggle');

function setMode(dark) {
    document.body.classList.toggle('dark-mode', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setMode(saved === 'dark' || (!saved && prefersDark));

toggle.addEventListener('click', () => {
    setMode(!document.body.classList.contains('dark-mode'));
});

// "My work" pills: click one to show its projects
const chips = document.querySelectorAll('.chip[role="tab"]');
chips.forEach((chip) => {
    chip.addEventListener('click', () => {
        chips.forEach((c) => {
            const selected = c === chip;
            c.setAttribute('aria-selected', selected);
            document.getElementById(c.getAttribute('aria-controls')).hidden = !selected;
        });
    });
});

// Highlight the sidebar link for the section you are reading
const links = document.querySelectorAll('.side-nav a');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach((a) => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
