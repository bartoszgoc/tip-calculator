"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const buttonCalculate = document.querySelector('.button__calculate--js');
const buttonClear = document.querySelector('.button__clear--js');

const totalTip = document.querySelector('.item__total-tip--js')
const tipPerson = document.querySelector('.item__tip-person--js')
const tipTotal = document.querySelector('.item__tip-total--js')
const totalPerson = document.querySelector('.item__total-person--js')

buttonCalculate.addEventListener('click', (e) => {
    const totalBill = document.querySelector('.item-bill--js').value
    const tipPercent = document.querySelector('.item-percent--js').value
    const pplNumber = document.querySelector('.item-ppl--js').value

    document.getElementsByClassName('result--js')[0].style.display='flex'

    const result = Math.floor((+totalBill + +tipPercent)/+pplNumber);
    var tipTotalValue = (tipPercent/100) * totalBill;

    totalTip.innerHTML = tipTotalValue;
    tipPerson.innerHTML = +tipTotalValue/pplNumber;
    tipTotal.innerHTML = +totalBill+tipTotalValue;
    totalPerson.innerHTML = (+totalBill+tipTotalValue)/pplNumber;
});

buttonClear.addEventListener('click', (e) => {
    document.getElementsByClassName('result--js')[0].style.display='none'
})

