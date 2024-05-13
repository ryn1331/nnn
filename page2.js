const forgotPasswordLink = document.querySelector('.remember-forget a');
const forgotPasswordContainer = document.querySelector('.forgot-password-container');

forgotPasswordLink.addEventListener('click', (event) => {
    event.preventDefault();
    forgotPasswordContainer.classList.remove('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target !== forgotPasswordContainer && !forgotPasswordContainer.contains(event.target)) {
        forgotPasswordContainer.classList.add('hidden');
    }
});