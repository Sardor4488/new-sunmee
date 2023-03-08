let count=1
let counter = document.getElementById('count_product')
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

 counter.value = count;

 incrementBtn.addEventListener('click', () => {
  count++;
  counter.value = count;
});

decrementBtn.addEventListener('click', () => {
  if (count != 1) {
    count--;
  }
  counter.value = count;
});
