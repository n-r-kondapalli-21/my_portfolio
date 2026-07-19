// Loading Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    document.querySelector('.progress-bar').style.width = scrollProgress + '%';
});

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Initialize AOS for scroll animations
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});

// tsParticles Initialization
tsParticles.load("particles-js", {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 150,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#00d4ff",
        },
        links: {
            color: "#7c3aed",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 60,
        },
        opacity: {
            value: 0.4,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 4 },
        },
    },
    detectRetina: true,
});

// Typewriter effect in Hero Section
new Typed('#typewriter', {
    strings: [
        'Python Developer',
        'AI Engineer',
        'Algorithmic Trading Engineer',
        'LLM Applications Developer',
        'Backend API Developer'
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
    cursorChar: '|',
    backDelay: 1500,
});

// GitHub Statistics
async function fetchGitHubStats() {
    const username = 'n-r-kondapalli-21';
    
    try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposResponse.json();
        
        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        // Update stats
        document.getElementById('repo-count').textContent = userData.public_repos || reposData.length;
        document.getElementById('star-count').textContent = totalStars;
        document.getElementById('follower-count').textContent = userData.followers;
        
        // Estimate total commits (GitHub API doesn't provide this directly)
        const totalCommits = reposData.length > 0 ? Math.floor(reposData.length * 15) : 0;
        document.getElementById('commit-count').textContent = totalCommits + '+';
        
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Set default values if API fails
        document.getElementById('repo-count').textContent = '10+';
        document.getElementById('star-count').textContent = '5+';
        document.getElementById('follower-count').textContent = '5+';
        document.getElementById('commit-count').textContent = '50+';
    }
}

// Fetch GitHub stats when page loads
fetchGitHubStats();

// Contact Form Submission
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    formStatus.innerText = "Sending...";
    formStatus.style.color = 'var(--text-color)';
    
    try {
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.innerText = "Thanks for your submission!";
            formStatus.style.color = 'var(--primary-color)';
            form.reset();
        } else {
            const result = await response.json();
            if (Object.hasOwn(result, 'errors')) {
                formStatus.innerText = result["errors"].map(error => error["message"]).join(", ");
            } else {
                formStatus.innerText = "Oops! There was a problem submitting your form";
            }
            formStatus.style.color = 'red';
        }
    } catch (error) {
        formStatus.innerText = "Oops! There was a problem submitting your form";
        formStatus.style.color = 'red';
    }
}

if (form) {
    form.addEventListener("submit", handleSubmit);
}

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref && linkHref.slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add smooth reveal animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 