var animals = [
    {
        name: 'Животные',
        children: [
            {
                name: 'Млекопитающие',
                children: ['Коровы', 'Ослы', 'Собаки', 'Тигры']
            },

            {
                name: 'Другие',
                children: ['Змеи', 'Птицы', 'Ящерицы']
            }
        ]
    },

    {
        name: 'Рыбы',
        children: [
            {
                name: 'Аквариумные',
                children: ['Гуппи', 'Скалярии']
            },

            {
                name: 'Морские',
                children: ['Морская форель']
            }
        ]
    }
]

const section = document.getElementsByTagName('section')[0];

var kingdoms = document.createElement('ul');
document.body.insertBefore(kingdoms, section);

animals.forEach(kingdom => {
    kingdoms.innerHTML += '<li>' + kingdom.name + '</li>';

    var types = document.createElement('ul');
    kingdom.children.forEach(type => {
        types.innerHTML += '<li>' + type.name + '</li>';

        var _animals = document.createElement('ul');
        type.children.forEach(animal => {
            _animals.innerHTML += '<li>' + animal + '</li>';
        });
        types.appendChild(_animals);
    });
    kingdoms.appendChild(types);
});