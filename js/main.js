// Take all buttons on click 
let clickBtn = document.querySelectorAll('.clickBtn');
let modal = document.querySelectorAll('.modal');
let cross = document.querySelectorAll('.cross');
// Sources Modal Footer 
// Get DOM Elements
const modalFooter = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Create array number modals
let clickBtnArr = Array.from(clickBtn);
let modalArr = Array.from(modal);
let crossArr = Array.from(cross);
// Function to aggrementer the number modals
for (let i = 0; i < clickBtnArr.length; i++) {
    clickBtnArr[i].addEventListener('click', function (e) {
        modalArr[i].classList.remove('hide');
        modalArr[i].classList.add('show');
    });
    modalArr[i].addEventListener('click', function (e) {
        if (e.target === e.currentTarget || e.target === crossArr[i]) {
            modalArr[i].classList.remove('show');
            modalArr[i].classList.add('hide');
        }
    });
}

// Modal Footer - events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modalFooter.style.display = 'block';
}

// Close
function closeModal() {
  modalFooter.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modalFooter) {
    modalFooter.style.display = 'none';
  }
}
