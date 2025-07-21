// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //  Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// แสดงปุ่มเมื่อเลื่อนลงเกิน 100px
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// ฟังก์ชันเลื่อนไปบนสุด
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// แสดง/ซ่อนปุ่มเมื่อ scroll
window.addEventListener('scroll', function () {
    const btn = document.getElementById("scrollBottomBtn");

    // เช็กว่าอยู่ล่างสุดหรือยัง
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 5) {
        // ซ่อนปุ่มถ้าอยู่ล่างสุด (เผื่อไว้ 5px ป้องกันพลาด)
        btn.classList.add("hidden");
    } else {
        // แสดงปุ่มถ้ายังไม่ถึงล่างสุด
        btn.classList.remove("hidden");
    }
});

// ฟังก์ชันเลื่อนไปล่างสุด
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
