'use strict';

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const button = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const rangeInput = document.getElementById('range');
const span = document.getElementById('range-span');

btn.addEventListener('click', function(color) {
    color = text.value;
    btn.style.backgroundColor = color;
});

button.style.display = "none";

rangeInput.addEventListener('input', function({target}) {
    circle.style.width = `${target.value}%`;
    circle.style.height = `${target.value}%`;
});