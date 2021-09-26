'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const dotsContainer = document.querySelector('.dots');

const openModal = function (e) {
  // e is the event
  e.preventDefault(); // prevent it form jumping to to the top
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); // This is to loop for all the elements with .btn--show--moal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // return nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // all buttons

// Creating and inserting elements
// .insertAdjacentHTML adds new elements

const message = document.createElement('div'); // create a dom element, not yet in the dom, need to insert into the dom
message.classList.add('cookie-message'); // create the dom with a class
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class = "btn btn--close--cookie"> Got it! </button>';
// header.prepend(message); //can insert elements, can only exist at only 1 place at 1 time
header.append(message);
// header.append(message);
// header.append(message.cloneNode(True));
// header.before(message); //before the header
// header.after(message); //after the header

// delete elements

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove(); //this is the newer way of removing the node
  });

//styles

message.style.backgroundColor = '#37384d';
message.style.width = '120%';
message.children.item(0).style.backgroundColor = '#5ec576';
// .style.backgroundColor = '#37384d';

// console.log(getComputedStyle(message)); //gets allm the CSS values and attributes

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', '#5ec576');

// attributes, in JS can change attributes in the HTML page

const logo = document.querySelector('.nav__logo');

// Non-standard
logo.setAttribute('company', ' Bankist'); // set an attribute
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attibute
const headerImage = document.querySelector('.header__img');
console.log(headerImage.dataset.versionNumber);

//classes
logo.classList.add('c', 'j'); // does not alter the current calss, but adds to it.
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Smooth scorlling | THE OLD SCHOOL WAY

const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

buttonScrollTo.addEventListener('click', function (e) {
  //e.preventDefault();
  const s1coords = section1.getBoundingClientRect(); // get a DOM rectangle

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Event Delegation: Implementing Page Navigation
// 2 steps, 1. Add event listener to common parent elements 2. Determine what element originated the Event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching strat
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    const query = document.querySelector(`${id}`);
    query.scrollIntoView({ behavior: 'smooth' });
  }
});

// tab component, use event delegation
const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; // guard clause, return immidiately when null. When clicked beyond the parameter. More modern method

  // active tab

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  // Active area content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};
// Passing "argument" into handler
nav.addEventListener('mouseover', handHover.bind(0.5));
nav.addEventListener('mouseout', handHover.bind(1));

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // when our viewport is 0%, we will do smth
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//reveal sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry.target);

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// SLIDER
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

let curSlide = 0;
const maxSlide = slides.length;

const buttonLeft = document.querySelector('.slider__btn--left');
const buttonRight = document.querySelector('.slider__btn--right');

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
// next slider

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
  console.log(e);
});

const createDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class = "dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};

init();
