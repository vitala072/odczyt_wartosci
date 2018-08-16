'use strict';
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementsByTagName('input')[0];
    const nazwisko = document.getElementsByTagName('input')[1];
    const result =  document.querySelector('#result');
    result.innerHTML = `Twoje imię to: <b>${name.value}</b> <br> 
    Twoje nazwisko to: <b>${nazwisko.value}</b>`;
     name.value = '';
    nazwisko.value = '';
});
