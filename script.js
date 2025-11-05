// Wait for the entire page to load before running the script
window.addEventListener('DOMContentLoaded', (event) => {

    // Get the modal elements
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // --- This is the key part for your request ---
    // It checks if the user has visited before
    if (!localStorage.getItem('hasVisited')) {
        // If not, show the modal
        modal.style.display = 'block';

        // And set a flag in the browser's storage
        localStorage.setItem('hasVisited', 'true');
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // When the user clicks on (x) or the "Enter Site" button, close the modal
    closeBtn.onclick = closeModal;
    modalCloseBtn.onclick = closeModal;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
