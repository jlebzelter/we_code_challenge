console.log("inside questions.js");

var options = [
    ['blue', 'green', 'purple', 'orange'],
    ['New York', 'LA', 'Chicago', 'the middle of nowhere'],
    ['pancakes', 'waffles', 'bacon and eggs']
];

function refreshDOM(){
    if (options === undefined) return;

    var container = $(".options");
    container.html("");

    for (var i=0; i<options.length; i++) {
        var opts = options[i];
        for (var j=0; j<opts.length; j++) {
            var listItem = $("<li>");
            listItem.append(opts[j]);
            container.append(listItem);
        }

        var currentListing = options[i];
        var listItem = $("<li>");
        // content
        listItem.append($("<h3>").html(currentListing.author));
        listItem.append("<h6>" + currentListing.date + "</h6>");
        listItem.append("<p>" + currentListing.desc + "</p>");
        listItem.append("<p>$" + currentListing.price + "</p>");

        if (currentListing.sold === true) {
            print("its sold already");
            listItem.addClass("sold");
        }
    }
};

refreshDOM();