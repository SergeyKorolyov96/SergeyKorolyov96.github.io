"use strict"
/*let price = 0;
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
alert("Общая стоимость: " + price + " Сроки: " + days);
*/

$(document).ready(function(){
    
//блюр картинки//
    let option = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, option);
    let elemets = $(`.photo`);
    elemets.each((i, el) => {
        observer.observe(el);
    });
    
function onEntry (entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
}
//Бегущие цифры//
$(`.num`).each(function(){
    $(this).prop(`Counter`, 0),animate({
        Counter:$(this).text()
    },{
        duration: 4000,
        easing: `swing`,
        step:function(now){
        $(this).text(Math.ceil(now));
    }
    });
});
    
//Отступ сверху//
$(`a[href^="#"]`).click(function(){
    let valHref = $(this).attr("href");
    $(`html, body`).animate({scrollTop:$(valHref).offset().top - 50 + "px"});
});

//Таймер на модальное окно//
setTimeout(function(){
    $.modalDialog({
    width: 350,
    height: 150
    })
}, 2000);
    
//Выделение//
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $("section").each((i, el) => {
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $(`nav li:eq(`+ i +`)`).find(`a`).addClass(`active`);
        }
    });
});
});

//Зум картинки//
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

