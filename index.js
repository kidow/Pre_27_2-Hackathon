var menu = {
    닭칼국수: {
        price: 7000,
        number:0
    },
    닭볶음탕: {
        price: 30000,
        number: 0
    },
    삼계탕: {
        price: 10000,
        number: 0
    },
    공기밥: {
        price: 1000,
        number: 0
    },
    주먹밥:{
        price: 5000,
        number: 0
    },
    음료수:{
        price: 1000,
        number: 0
    }
};
var ordered = [];
var btns = document.querySelectorAll('div.menu-item');
var elCalItems = document.querySelector('div.cal-items');

for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click', function() {
        
        if(menu[btns[index].id].number === 0){
            menu[btns[index].id].number += 1;
            var eldiv = document.createElement('div');
            eldiv.className= 'cal-item'
            eldiv.id = 'cal-'+btns[index].id;
            var eldivName = document.createElement('div');
            var eldivNumber = document.createElement('div');
            var eldivPrice = document.createElement('div');
            var eldivDel = document.createElement('div');
            eldivName.className = 'name';
            eldivNumber.className = 'count';
            eldivNumber.id = btns[index].id+'number';
            eldivPrice.className = 'price';
            eldivPrice.id = btns[index].id+'price';
            eldivDel.className = 'delete';
            eldivName.textContent = btns[index].id;
            eldivNumber.textContent = menu[btns[index].id].number;
            eldivPrice.textContent = menu[btns[index].id].number*menu[btns[index].id].price;
            eldivDel.textContent = '삭제';
            eldiv.appendChild(eldivName);
            eldiv.appendChild(eldivNumber);
            eldiv.appendChild(eldivPrice);
            eldiv.appendChild(eldivDel);
            elCalItems.appendChild(eldiv);

            eldivDel.onclick = delDiv;
        }
        else{
            menu[btns[index].id].number += 1;
            document.getElementById(btns[index].id+'number').textContent = menu[btns[index].id].number;
            document.getElementById(btns[index].id+'price').textContent = menu[btns[index].id].number*menu[btns[index].id].price;
        }
        ordered.push(menu[btns[index].id])
        
        var total = document.querySelector('.total .number');
        total.innerHTML = '<div>'+ totalCal() + '원' +'</div>'

        function totalCal() {
            return ordered.map((element)=>element.price).reduce((acc, curr)=>acc+curr)
        }
    })
}

function delDiv() {
    this.parentNode.remove();
    menu[this.parentNode.childNodes[0].textContent].number = 0;
    
    ordered.push({price:-this.parentNode.childNodes[2].textContent});
    
    var total = document.querySelector('.total .number');
        total.innerHTML = '<div>'+ totalCal() + '원' +'</div>'

        function totalCal() {
            return ordered.map((element)=>element.price).reduce((acc, curr)=>acc+curr)
        }
}