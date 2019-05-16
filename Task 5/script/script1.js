var animals = [
    {
        name: 'Животные',
        children: [
            {
                name: 'Млекопитающие',
                children: [
                    { name: 'Коровы' },
                    { name: 'Ослы' },
                    { name: 'Собаки' },
                    { name: 'Тигры' },
                ]
            },
            {
                name: 'Другие',
                children: [
                    { name: 'Змеи' },
                    { name: 'Птицы' },
                    { name: 'Ящерицы' },
                ]
            },
        ]
    },
    {
        name: 'Рыбы',
        children: [
            {
                name: 'Аквариумные',
                children: [
                    { name: 'Гуппи' },
                    { name: 'Скалярии' },
                ]
            },
            {
                name: 'Морские',
                children: [
                    { name: 'Морская форель' },
                ]
            },
        ]
    },
];

function generate(array) {
    var html = '<ul>';
    array.forEach(item => {
        var li = '<li>';
        html += li + item.name;
        if (item.children) {
            html += generate(item.children);
        }
        html += '</li>';
    });
    html += '</ul>';
    return html;
}

document.body.innerHTML = generate(animals);