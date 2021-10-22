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
    $(this).prop(`counter`, 0).animate({
        counter:$(this).text()
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
/*setTimeout(function(){
  $.colorbox({
    html:`<h2 class="h2">Желаешь скидку?</h2>
    <label class="label">Введи свой Email:</label>
    <input placeholder="Писать тут ..." id="yurEmail">
    <button class="button" type="submit">Отправить</button>`,
    className: `cta`,
    width: 400,
    height: 180
  });
    $("button").click(function(){
     $("#colorbox").css("visibility", "hidden");
    });
    $("button").click(function(){
        $(".cta").css("visibility", "hidden");
    });
}, 1000);*/

    
    
    
//Калькулятор//
    
var typeServices,
    design,
    adapt,
    price,
    result,
    result2,
    modalResult,
    modalResult2;

    modalResult = $(`#result`);
    modalResult2 = $(`#result2`);

    modalResult = 0;
    modalResult2 = 0;

function calc(){
    price = parseInt($(`option[name=type]:checked`,`#price`).val());
    price += parseInt($(`option[name=design]:checked`,`#price`).val());
    price += parseInt($(`option[name=adapt]:checked`,`#price`).val());
    
    alert(price);

    };

$("select").on("change", function(){
calc();


});
    
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

