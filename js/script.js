$(function() {

    var search = function(keyword) {
        console.log("Search for " + keyword);
    }

    $('#search-btn').click(function() {
        search($('#keyword-text').val());
    });

    $('#keyword-text').keypress(function(event) {
        if (event.which == 13) search($(this).val());
    });
});