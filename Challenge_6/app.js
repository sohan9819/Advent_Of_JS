const dollars = document.querySelector('.dollars');
const input_slider = document.querySelector('#priceRange');

input_slider.addEventListener('input', (e) => {
  dollars.innerText = e.target.value;
});
