var counter = document.querySelector('#counter');
var i = 0;
var increment = function (e) {
    i++;
    counter.querySelector('span').innerText = i;
};
counter.addEventListener('click', increment);
