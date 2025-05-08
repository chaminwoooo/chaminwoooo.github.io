'use strict';



let textInput = document.querySelector('#textValue');
let btnAdd = document.querySelector('.btn-add');
let todoList = document.querySelector('.todo-list');
let items = [];

btnAdd.addEventListener('click', () => {
    if (textInput === '') return;
    const textValue = textInput.value.trim();

    items.push(textValue);
    textInput.value = '';
    renderList();
});

function renderList() {
    todoList.innerHTML = '';

    items.forEach((el, index) => {
        const li = document.createElement('li');
        const btnDel = document.createElement('button');

        li.textContent = el;
        btnDel.textContent = '삭제';

        btnDel.addEventListener('click', () => {
            items.splice(index, 1);
            renderList();
        })
        li.appendChild(btnDel);
        todoList.appendChild(li);
    });


}