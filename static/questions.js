var categories = [
    {name: 'colors', options: ['blue', 'green', 'purple', 'orange']},
    {name: 'places', options: ['New York', 'LA', 'Chicago', 'the middle of nowhere']},
    {name: 'breakfast foods', options: ['pancakes', 'waffles', 'bacon and eggs']}
];

function refreshDOM(){
    var container = $(".options");
    container.html("");

    var circleClasses = ['one', 'two', 'three'];

    for (var i=0; i<categories.length; i++) {
        var cat = categories[i];
        var list = $('<dl>');
        list.addClass(circleClasses[i]);
        list.append('<dt>' + cat.name + '</dt>');
        for (var j=0; j<cat.options.length; j++) {
            list.append('<dd>' + cat.options[j] + '</dd>');
            container.append(list);
        }
    }
};

refreshDOM();