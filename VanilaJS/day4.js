'use strict';




let btnTest = document.querySelector('.btn-test');
let msg = document.querySelector('.msg');

btnTest.addEventListener('click', () => {
    msg.textContent = '버튼 클릭 완완'
})


const itMe = {
    name: 'cha',
    age: 31,
    email: 't@t.com',
}

console.log(itMe.name);
console.log(itMe.age);
console.log(itMe.email);

itMe.isAdmin = true;

console.log(itMe.isAdmin);

const users = [
    { name: 'cha', age: 31 },
    { name: 'yel', age: 30 },
    { name: 'yj', age: 1 },
]

console.log(users[1].name);


let btnAdd = document.querySelector('.btn-add');
let num = document.querySelector('.num');
let count = 0;

btnAdd.addEventListener('click', () => {
    count ++ ;
    num.textContent = count;
})