var menus = [];
menus[0] = {
    name: '닭칼국수',
    price: 7000,
    number: 1
}
menus[1] = {
    name: '닭볶음탕',
    price: 30000,
    number: 1
};
menus[2] = {
    name: '삼계탕',
    price: 10000,
    number: 1
};
menus[3] = {
    name: '공기밥',
    price: 1000,
    number: 1
};
menus[4] = {
    name: '주먹밥',
    price: 5000,
    number: 1
};
menus[5] = {
    name: '음료수',
    price: 1000,
    number: 1
};

var ordered =[];

var btns = document.querySelectorAll('div.menu-item');

var elCalItems = document.querySelector('div.cal-items');

for (let index = 0; index < btns.length; index++) {

       
    btns[index].onclick = function() {

        ordered.push(menus[index])

        for (let index = 0; index < ordered.length; index++) {
            menus[index].number = ordered.filter((ele) => ele.name === menus[index].name).length;
        }

        var elContent = document.createElement('div');
        elContent.className = 'Content';
        elContent.innerHTML = '<div>' + menus[index].name + '    '+
        menus[index].number+'       '+ menus[index].number*menus[index].price + '    ' + '</div>';
        elCalItems.appendChild(elContent);
           
    }
};

