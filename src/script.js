/** Add any JavaScript you need to this file. */

const filterButtonAll = document.querySelector('#f-all');
const filterButtonyng = document.querySelector('#f-small');
const filterButtonold = document.querySelector('#f-large');

const small = document.querySelectorAll('.yng');
const sculptures = document.querySelectorAll('.old');

let oldIsFiltered = false;
let yngIsFiltered = false;

filterButtonAll.addEventListener('click', reset);

filterButtonyng.addEventListener('click', e => {
  if (oldIsFiltered) {
    reset();
  }
  if (!oldIsFiltered) {
    sculptures.forEach(item => {
      item.style.display = 'none';
    });
    e.target.style.backgroundColor = '#bb4a46';
    yngIsFiltered = true;
  } else {
    sculptures.forEach(item => {
      item.style.display = 'block';
    });
    e.target.style.backgroundColor = 'lightgray';

    yngIsFiltered = false;
  }
});

filterButtonold.addEventListener('click', e => {
  if (yngIsFiltered) {
    reset();
  }
  if (!yngIsFiltered) {
    small.forEach(item => {
      item.style.display = 'none';
    });
    e.target.style.backgroundColor = '#bb4a46';
    oldIsFiltered = true;
  } else {
    small.forEach(item => {
      item.style.display = 'block';
    });
    e.target.style.backgroundColor = 'lightgray';

    oldIsFiltered = false;
  }
});

function reset() {
  {
    small.forEach(painting => {
      painting.style.display = 'block';
    });
    sculptures.forEach(painting => {
      painting.style.display = 'block';
    });

    filterButtonyng.style.backgroundColor = 'lightgray';
    filterButtonold.style.backgroundColor = 'lightgray';

    oldIsFiltered = false;
    yngIsFiltered = false;
  }
}
