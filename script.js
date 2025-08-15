// Initialize ScrollReveal


const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 0.5 + 0.2,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.8 + 0.2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 204, 21, ${p.opacity})`; // Yellow color with opacity
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false // Animations repeat only once
});

// --- HERO SECTION ---
sr.reveal('.comic-subtitle', { delay: 400, origin: 'top' });
sr.reveal('.neon-title', { delay: 600, origin: 'top', distance: '40px' });
sr.reveal('.tagline', { delay: 800 });

// --- ABOUT SECTION ---
sr.reveal('.comic-panel', { 
    origin: 'left', 
    distance: '100px', 
    duration: 1200 
});

// --- SKILLS SECTION ---
sr.reveal('#skills .section-title');
sr.reveal('.skill-item', { interval: 100 });

// --- LANGUAGES SECTION ---
sr.reveal('.bubble', { interval: 200, origin: 'top' });

// --- PROJECTS SECTION ---
sr.reveal('#projects .section-title');
sr.reveal('.project-card', { interval: 200 });

// --- TIMELINE SECTION ---
sr.reveal('#timeline .section-title');
sr.reveal('.strip-panel', { interval: 200, origin: 'left' });

// --- CONTACT SECTION ---
sr.reveal('#contact .section-title');
sr.reveal('.contact-console', { origin: 'right' });

// --- FOOTER ---
sr.reveal('blockquote');


