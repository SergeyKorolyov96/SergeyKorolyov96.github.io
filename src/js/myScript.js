"use strict"
function calc(){
    let type_services = document.getElementById("type_services");
    let design = document.getElementById("design");
    let adapt = document.getElementById("adapt");
    let result = document.getElementById("result");
    let price = 0;
    price += parseInt(type_services.options[type_services.selectedIndex].value);
    price += (design.checked == true) ? parseInt(design.value) : 0;
    price = parseInt(adapt.value) * price;
    result.innerHTML = price;
}
console.log('calc');