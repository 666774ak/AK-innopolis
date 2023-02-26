let loginButton = document.querySelector('.main-button');
let loginPopUp = document.querySelector('.login-popup');
let closeButton = document.querySelector('.close-btn')

loginButton.addEventListener('click', showPopUp);
closeButton.addEventListener('click', closePopUp);

function showPopUp(evt) {
console.log(evt);
evt.preventDefault();

loginPopUp.classList.toggle('show-popup');
};

function closePopUp() {
loginPopUp.classList.remove('show-popup')
};

loginPopUp.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-popup')) {
        closePopUp();
    }
})