// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Show more functionality
document.getElementById("show-more").addEventListener("click", function() {
    const content = document.getElementById("about-content");
    const button = document.getElementById("show-more");
    
    content.classList.toggle("expanded");
    button.textContent = content.classList.contains("expanded") ? "Show Less" : "Show More";
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});