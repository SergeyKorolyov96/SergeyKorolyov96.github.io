"use strict"
let price = 0;
let days = 0;
alert("Добро пожаловать!");
let variableOne = prompt(`Введите цифру нужного вам сайта:
1. Визитка 
2. Интернет магазин 
3. Корпоративный`);
if(variableOne == "1"){
    price = 5000, days = 5;
    alert("Визитка (цена 5000 руб, срок 5 дней)")
};
if(variableOne == "2"){
    price = 8000, days = 5;
    alert("Интернет магазин (цена 8000 руб, срок 10 дней)")
};
if(variableOne == "3"){
    price = 10000, days = 5;
    alert("Корпоративный (цена 10000 руб, срок 12 дней)")
};
let variableTwo = prompt(`Тип дизайна:
1. Дизайн 1
2. Дизайн 2`);
if(variableTwo == "1"){
    price += 5000, days += 5;
    alert("Дизайн 1 (цена 5000 руб, срок 5 дней)")
};
if(variableTwo == "2"){
    price += 8000, days += 7;
    alert("Дизайн 2 (цена 8000 руб, срок 7 дней)")
};
let variableThree = prompt(`Требуется ли адаптивность:
1. Да
2. Нет`);
if(variableThree == "1"){
    price += 8000, days += 7;
    alert("Да (цена 8000 руб, срок 7 дней)")
};
if(variableThree == "2"){
    price += 0, days += 0;
    alert("Нет (цена 0 руб, срок 0 дней)")
};
console.log(price, days);
