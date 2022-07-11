let addbtn = document.getElementById('btn');
let inputfield = document.getElementById('inpt');
let todocont = document.getElementById('todo');

addbtn.addEventListener('click', function(){
    let elem = document.createElement('li');
    elem.innerHTML = inputfield.value;
    todocont.appendChild(elem);


})