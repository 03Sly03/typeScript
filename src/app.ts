const counter = document.querySelector('#counter');
let i = 0;

const increment = (e) => {
    i++;
    counter.querySelector('span').innerText = i;
}

counter.addEventListener('click', increment);