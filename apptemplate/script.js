var actors = [
    {firstName: "Tom", lastName: "Cruise", year: 1962 },
    {firstName: "Jackie", lastName: "Chan", year: 1954 },
    {firstName: "Brad", lastName: "Pitt", year: 1963 },
    {firstName: "Jean-Claude", lastName: "Van Damme", year: 1960 },
    {firstName: "Bruce", lastName: "Willis", year: 1955 },
    {firstName: "Arnold", lastName: "Schwarzenegger", year: 1946 },
    {firstName: "Silvester", lastName: "Stallone", year: 1947 },
];

var list = document.getElementById('list');
var all = document.getElementById('all'),
    b1 = document.getElementById('b1'),
    b2 = document.getElementById('b2'),
    b3 = document.getElementById('b3'),
    b4 = document.getElementById('b4');

var full_list = actors.map(function(val){
    let li = document.createElement('li');
    li.innerHTML = '<span class="firstname">'+val.firstName+'</span> <span class="lastname">'+val.lastName+'</span> <span class="year">'+val.year+'</span>';
    li.setAttribute('data-year',val.year);
    return li;
});

full_list.forEach(function(val){
    list.appendChild(val);
});

all.onclick = function(e){
    list.innerHTML='';
    full_list.forEach(function(val){
        list.appendChild(val);
    });
}

//1. Получить массив который будет содержать всех актеров родившихся до 1950го года

b1.onclick = function(e){
    var newList = full_list.filter(function(val){
        return val.dataset.year<1950;
    });
    list.innerHTML='';
    newList.forEach(function(val){
        list.appendChild(val);
    })
}

//2. Получить массив который будет содержать полное имя каждого актера

var name_list = actors.map(function(val){
    let li = document.createElement('li');
    li.innerHTML = '<span class="firstname">'+val.firstName+'</span> <span class="lastname">'+val.lastName+'</span>';
    li.setAttribute('data-year',val.year);
    return li;
});

b2.onclick = function(e){
    list.innerHTML='';
    name_list.forEach(function(val){
        list.appendChild(val);
    })
}

//3. Отсортировать массив по возрасту актеров - от старшего

b3.onclick = function(e){
    list.innerHTML='';
    full_list.slice().sort(function(a,b){return a.dataset.year - b.dataset.year;}).forEach(function(val){
        list.appendChild(val);
    });
}

//4. Какой общий возраст всех актеров (предположим что ворзраст актера равен 2018-actor.year)

var years_list = actors.map(function(val){
    let li = document.createElement('li');
    li.innerHTML = '<span class="firstname">'+val.firstName+'</span> <span class="lastname">'+val.lastName+'</span> <span class="year">'+(2018-val.year)+' yo</span>';
    li.setAttribute('data-year',val.year);
    return li;
});

var sum = actors.reduce(function(res, actor){

    return res + (2018 - actor.year);
}, 0);

b4.onclick = function(e){
    list.innerHTML='';
    let sumLi = document.createElement('div');
    sumLi.innerHTML = 'Summary : '+ sum;
    years_list.forEach(function(val){
        list.appendChild(val);
    })
    list.appendChild(sumLi);
}



