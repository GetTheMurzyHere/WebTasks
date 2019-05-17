var animals = [
    {
        name: "Животные",
        children: [
            {
                name: "Млекопитающие",
                children: [
                    {
                        name: "Коровы",
                        children: []
                    },
                    {
                        name: "Ослы",
                        children: []
                    },
                    {
                        name: "Собаки",
                        children: []
                    },
                    {
                        name: "Тигры",
                        children: []
                    }
                ]
            },
            {
                name: "Другие",
                children: [
                    {
                        name: "Змеи",
                        children: []
                    },
                    {
                        name: "Птицы",
                        children: []
                    },
                    {
                        name: "Ящирицы",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        name: "Рыбы",
        children: [
            {
                name: "Аквариумные",
                children: [
                    {
                        name: "Гуппи",
                        children: []
                    },
                    {
                        name: "Скалярии",
                        children: []
                    }
                ]
            },
            {
                name: "Морские",
                children: [
                    {
                        name: "Морская форель",
                        children: []
                    }
                ]
            }
        ]
    }
];

function generate(item, par) {
    if (item.length > 0) {
        par.append("<ul></ul>");
        for (var i = 0; i < item.length; i++) {
            par.children("ul").append("<li><span>" + item[i].name + "</span></li>");
            generate(item[i].children, par.children("ul").children("li:last-child"))
        }
    }
}

generate(animals, $("#workspace"));

$('li').each(function(k) {
    console.log('Элемент "' + $(this).children('span').text() + '" имеет ' + $(this).find('li').length + ' вложенных LI');
    $(this).children('span').after('<span class=li-count id="counter' + k + '"></span>');
    $('#counter' + k).html($(this).find('li').length != 0 ? ' [' + $(this).find('li').length + ' вложенных LI]' : '');
})

$('LI').click(function() {
    $(this).children().not('span').slideToggle();
    event.stopPropagation();
})