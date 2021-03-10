const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel   = document.querySelector('#panel');
const ratingsContainer = document.querySelector('.ratings-container');
let selectedRating     = '';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    };
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Gracias!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>Usaremos tu feedback para mejorar nuestros servicios.</p>`
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    };
};