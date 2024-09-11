document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.from("header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Showcase text animation
    gsap.from("#showcase h1, #showcase p", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out"
    });

    // Skills section animation
    gsap.from(".skill-item", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    });

    // Projects section animation
    gsap.from(".project-item", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%"
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    });

    // Contact section animation
    gsap.from("#contact p", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%"
        },
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    });

    // Hover effect for skill and project items
    const items = document.querySelectorAll('.skill-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.05,
                duration: 0.3,
                ease: "power1.out"
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    });
});