/**
 * Simple Vanilla JavaScript Theme Toggle
 * Architecture: Uses HTML5 data attributes to swap configurations
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const modeIcon = themeToggleBtn.querySelector('.mode-icon');

    // Check system preference or localStorage fallback
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine target scheme initial state
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Apply initial state
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    // Click handler for switching themes
    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = htmlElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        
        // Execute state update
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    /**
     * Changes button symbol dynamically based on current UI state
     * @param {string} theme - 'light' or 'dark'
     */
    function updateIcon(theme) {
        if (theme === 'dark') {
            modeIcon.textContent = '☀️'; // Shows sun icon to toggle to light
        } else {
            modeIcon.textContent = '🌙'; // Shows moon icon to toggle to dark
        }
    }
});