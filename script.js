// Function to add the 'fade-in' class to the site-wrapper on page load
function addFadeInClass() {
    const siteWrapper = document.querySelector('.site-wrapper');
    siteWrapper.classList.add('fade-in');
}

// Call the addFadeInClass function when the window is loaded
window.onload = function () {
    addFadeInClass();
};