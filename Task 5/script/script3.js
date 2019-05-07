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
    $('#kingdoms').append('<li class="kingdom"><span>'+ kingdom.name +'</span></li>');
    $('.kingdom').last().append('<ul class="types"></ul>');

    $.each(kingdom.children, function(k, type){
        $('.types').last().append('<li class="type"><span>'+ type.name +'</span></li>');
        $('.type').last().append('<ul class="creatures"></ul>');
        
        $.each(type.children, function(k, creature){
            $('.creatures').last().append('<li class="creature"><span>' + creature + '</span></li>')
            console.log(creature);
        })

    })

})

$('.kingdom').click(function() {
    $(this).children().not('span').slideToggle();
})

$('.type').click(function(event) {
    event.stopPropagation();
    $(this).children().not('span').slideToggle();
})

$('.creatures').click(function(event) {
    event.stopPropagation();
})