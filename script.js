
const navToggler = document.getElementById('nav-toggler');

const two = document.getElementById('two');

const navbar = document.getElementById('navbar');

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active');
  two.classList.toggle('hide');
  navbar.classList.toggle('show');
  if(navbar.classList.contains('show')) {
    navbar.classList.toggle('to-left')
  }
});