"use strict"
/*
if(confirm("Добро пожаловать!")){
    name = prompt("Как вас зовут?");
    alert("Привет, " + name);
}
else{
    alert("Вы нажали на <Отмена>");
}
prompt("Какой тип сайта нужен?");
    


alert("Будет сделано!");
    
var name = "Визитка";
*/
/*if(prompt("Тип сайта")){
    let type = "Визитка",
        cash = 5000,
        term = 5;
}*/
//if(prompt("Какой тип сайта нужен?")){
    let term11 = "5 дней";
    let cash11 = "5000 руб";
    let type11 = `Визитка: ${term11}, ${cash11}`;
console.log(type11);

    let term12 = "9 дней";
    let cash12 = "10000 руб";
    let type12 = `Интернет магазин: ${term12}, ${cash12}`;
console.log(type12);

    let term13 = "7 дней";
    let cash13 = "8000 руб";
    let type13 = `Форум: ${term13}, ${cash13}`;
console.log(type13);
//}
//else if(prompt("Какой дизайн?")){
    let term21 = "5 дней";
    let cash21 = "5000 руб";
    let type21 = `Дизайн 1: ${term21}, ${cash21}`;
console.log(type21);
    
    let term22 = "7 дней";
    let cash22 = "8000 руб";
    let type22 = `Дизайн 2: ${term22}, ${cash22}`;
console.log(type22);
//}
//else(prompt("Требуется адаптивность?")){
    let term31 = "7 дней";
    let cash31 = "8000 руб";
    let type31 = `Да: ${term31}, ${cash31}`;
console.log(type31);
    
    let term32 = "0 дней";
    let cash32 = "0 руб";
    let type32 = `Нет: ${term32}, ${cash32}`;
console.log(type32);
//}

function getLocation(term11 = 5, term21 = 5, term31 = 7){
    return term11 + term21 + term31;
}
let term = getLocation();
console.log(term);
