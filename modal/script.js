'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

const openmodal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', openmodal);

}

btnClosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})