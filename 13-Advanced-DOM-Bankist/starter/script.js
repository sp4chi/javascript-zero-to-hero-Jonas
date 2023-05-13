'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let message = document.createElement('div')
message.classList.add('cookie-message');

let header = document.querySelector('.header')

message.innerHTML = 'We use cookies for improve functionality and analytics <button class="btn btn--close-cookie">Got it!</button>'

header.append(message)

//closing cookie functionality

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove()
})


//manipulating styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

//console.log(getComputedStyle(message).height);

//adding scroll fucntionality
let btnScrollTo = document.querySelector('.btn--scroll-to')
let section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  // let s1coords = section1.getBoundingClientRect()
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X/Y)', scrollX, scrollY);

  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY)

  //smooth scrooling
  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: 'smooth'
  // })

  //modern scroll approach
  section1.scrollIntoView({ behavior: 'smooth' })


})
//events
//using addEventListener allows adding multiple events to same element and it also allows removing the listener if required.
let h1 = document.querySelector('h1')
const h1Event = function (e) {
  alert('You entered the header section')
  //removing event listener after one use
  // h1.removeEventListener('mouseenter', h1Event)
}
h1.addEventListener('mouseenter', h1Event)

//removing listener after 3 seconds
setTimeout(() => h1.removeEventListener('mouseenter', h1Event), 3000)
//old school way of listening events
// h1.onmouseclick = function () {
//   alert('You entered the header section')
// }

