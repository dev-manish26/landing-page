import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menuBar"]');

navBtn.addEventListener('click', () => {
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
})