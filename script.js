// ==========================
// BIZCONNECT SCRIPT
// ==========================

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// STICKY NAVBAR SHADOW
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// SMOOTH SCROLL FOR PAGE LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// FADE-IN ANIMATION
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
".business-card, .category-card, .feature-card, .review-card, .stat-box"
).forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// SIMPLE SEARCH BUTTON
const searchForm = document.querySelector(".search-form");

if (searchForm) {

    searchForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Search functionality will be connected to the BizConnect database in Version 2.");

    });

}