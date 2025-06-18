// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS for scroll animations
AOS.init({
    duration: 1000,
    once: true,
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
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#00aaff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
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
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
});

// Typewriter effect in Hero Section
new Typed('#typewriter', {
    strings: [
        'An AI Enthusiast',
        'A Machine Learning Developer',
        'A Python Programmer',
        'A Lifelong Learner'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
    cursorChar: '_',
});

// Contact Form Submission with Formspree
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    formStatus.innerText = "Sending...";
    formStatus.style.color = 'var(--text-color)';
    
    // Debugging: Log the form action URL to the console
    console.log("Attempting to submit to:", event.target.action);

    fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            formStatus.innerText = "Thanks for your submission!";
            formStatus.style.color = 'var(--primary-color)';
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.innerText = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    formStatus.innerText = "Oops! There was a problem submitting your form";
                }
                formStatus.style.color = 'red';
            })
        }
    }).catch(error => {
        formStatus.innerText = "Oops! There was a problem submitting your form";
        formStatus.style.color = 'red';
    });
}
form.addEventListener("submit", handleSubmit)

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
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