document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DYNAMIC THEME CONTROLLER ---
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    const cachedTheme = localStorage.getItem("portfolio-theme") || 
                        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    htmlElement.setAttribute("data-theme", cachedTheme);

    themeToggle.addEventListener("click", () => {
        const activeTheme = htmlElement.getAttribute("data-theme");
        const nextTheme = activeTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
    });

    // --- 2. HORIZONTAL SCROLL CAROUSEL ENGINE ---
    const track = document.getElementById("gallery-track");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const viewport = document.querySelector(".gallery-viewport");

    if (track && prevBtn && nextBtn && viewport) {
        const getScrollStep = () => {
            const firstCard = track.querySelector(".project-gallery-card");
            if (firstCard) {
                // Returns individual card width plus its column gaps
                return firstCard.getBoundingClientRect().width + 24; 
            }
            return 360;
        };

        nextBtn.addEventListener("click", () => {
            viewport.scrollBy({
                left: getScrollStep(),
                behavior: "smooth"
            });
        });

        prevBtn.addEventListener("click", () => {
            viewport.scrollBy({
                left: -getScrollStep(),
                behavior: "smooth"
            });
        });
    }
});