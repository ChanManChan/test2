//! ASIDE MENU

const button = document.querySelector('.personal');

button.addEventListener('click', (e) => {
  const left = document.querySelector('.personal-expand').children[0].classList;
  const right = document.querySelector('.personal-expand').children[1]
    .classList;
  const icon = e.target.children[0];
  const main = document.querySelector('main');
  const body = document.querySelector('.body');
  if (!left.contains('expanded') && !right.contains('expanded')) {
    left.add('expanded');
    right.add('expanded');
    icon.classList.remove('fa-arrow-down');
    icon.classList.add('fa-arrow-up');
    main.style.height = '100%';
    body.style.display = 'none';
  } else {
    left.remove('expanded');
    right.remove('expanded');
    icon.classList.remove('fa-arrow-up');
    icon.classList.add('fa-arrow-down');
    main.style.height = '0%';
    body.style.display = 'block';
  }
});

//! CAROUSEL

let index = 1;
let timeout;
const move = (val) => {
  displaySlide((index += val));
};

const displaySlide = (num) => {
  clearTimeout(timeout);
  const slides = document.querySelectorAll('.carousel_grid');
  if (num > slides.length) index = 1;
  if (num < 1) index = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].style.animation = 'none';
  }
  slides[index - 1].style.display = 'grid';
  slides[index - 1].style.opacity = '1';
  timeout = setTimeout(() => {
    for (let j = 0; j < slides.length; j++) {
      slides[j].style.display = 'grid';
      slides[j].style.opacity = '0';
      slides[j].style.animation = `display 20s ${4 * j}s infinite`;
    }
  }, 3000);
};
