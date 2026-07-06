// 練習5-2から5-5の処理をすべてまとめた関数
function changeDom() {

    
    var l = document.createElement('li');
    l.textContent = 'ヨット';
    
    
    var u = document.querySelector('ul#kazoeuta');
    
    
    u.insertAdjacentElement('beforeend', l);


    
    var i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    
    var a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    var p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);


    u = document.querySelector('ul#kassen');
    u.remove();


    u = document.createElement('ul');

    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);

    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);

}


var btn = document.querySelector('#henkou');
btn.addEventListener('click', function() {
    changeDom();
});