'use strict';

let book2 = document.querySelectorAll('.book')[0];
console.log(book2);

let book1 = document.querySelectorAll('.book')[1];
console.log(book1);

let book6 = document.querySelectorAll('.book')[2];
console.log(book6);

let book4 = document.querySelectorAll('.book')[3];
console.log(book4);

let book3 = document.querySelectorAll('.book')[4];
console.log(book3);

let book5 = document.querySelectorAll('.book')[5];
console.log(book5);

book1.insertAdjacentElement('afterend', book2);
book3.insertAdjacentElement('afterend', book4);
book5.insertAdjacentElement('afterend', book6);

document.body.style.backgroundImage = "url('./image/adv.jpg')";

let textBook3 = document.querySelectorAll('.book a')[2];
console.log(textBook3);

textBook3.textContent = 'Книга 3. this и Прототипы Объектов';

let adv = document.querySelector('.adv');
adv.remove();

let listBook2 = document.querySelectorAll('.book');
let listLi = listBook2[1].querySelectorAll('li');

listLi[3].insertAdjacentElement('afterend', listLi[6]);
listLi[8].insertAdjacentElement('afterend', listLi[5]);
listLi[8].insertAdjacentElement('afterend', listLi[5]);
listLi[8].insertAdjacentElement('afterend', listLi[4]);

let listBook5 = document.querySelectorAll('.book');
let listLi5 = listBook5[4].querySelectorAll('li');

listLi5[10].insertAdjacentElement('beforebegin', listLi5[8]);
listLi5[8].insertAdjacentElement('beforebegin', listLi5[5]);
listLi5[6].insertAdjacentElement('beforebegin', listLi5[2]);
listLi5[1].insertAdjacentElement('afterend', listLi5[9]);

let bookUl6 = document.querySelectorAll('.book ul')[5];
let li = document.createElement('li');
let textLi = document.createTextNode('Глава 8: За пределами ES6');
li.appendChild(textLi);
bookUl6.appendChild(li);

let listLi6 = listBook5[5].querySelectorAll('li');
listLi6[9].insertAdjacentElement('beforebegin', listLi6[10]);