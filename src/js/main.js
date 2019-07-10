"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const buttonCalculate = document.querySelector('.button__calculate--js');
const buttonClear = document.querySelector('.button__clear--js');

buttonCalculate.addEventListener('click', (e) => {
    const totalBill = document.querySelector('.item-bill--js').value
    const tipPercent = document.querySelector('.item-percent--js').value
    const pplNumber = document.querySelector('.item-ppl--js').value


    const result = Math.floor((+totalBill + +tipPercent)/+pplNumber);
    console.log(`${result}`)
})
