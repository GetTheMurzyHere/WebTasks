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

$('#workspace').append('<ul id="kingdoms"></ul>');
$.each(animals, function(k, kingdom) {
    $('#kingdoms').append('<li class="kingdom">'+ kingdom.name +'</li>');
    $('.kingdom').last().append('<ul class="types"></ul>');

    $.each(kingdom.children, function(k, type){
        $('.types').last().append('<li class="type">'+  type.name +'</li>');
        $('.type').last().append('<ul class="creatures"></ul>');
        
        $.each(type.children, function(k, creature){
            $('.creatures').last().append('<li class="creature">' + creature + '</li>')
            console.log(creature);
        })

    })

})