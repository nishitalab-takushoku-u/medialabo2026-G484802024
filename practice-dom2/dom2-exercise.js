//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function show() {
    var p = document.createElement('p');
    p.textContent = campus.address;
    
    var h2Addr = document.querySelector('h2#addr');
    h2Addr.insertAdjacentElement('afterend', p);

    var ul = document.createElement('ul');
    for (var g of gakka) {
        var li = document.createElement('li');
        li.textContent = g.name;
        ul.insertAdjacentElement('beforeend', li);
    }
    
    var h2Dept = document.querySelector('h2#dept');
    h2Dept.insertAdjacentElement('afterend', ul);
}

var btn = document.querySelector('#show');
btn.addEventListener('click', function() {
    show();
});

