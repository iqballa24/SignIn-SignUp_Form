const btnSignIn = document.querySelector('#sign-in-btn');
const btnSignUp = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

btnSignUp.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

btnSignIn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});
