
$(function() {

    var search = function(keyword) {
        console.log("Search for " + keyword);
        $.getJSON("ajax/result.json", function(data) {
            $('#search-result').html("");
            var courses = data["courses"];
            $('#result-num').html(courses.length);
            for (var i = 0; i < courses.length; ++i) {
                $('#search-result').append("<div class='thumbnail course'>" +
                        "<h4 class='course-name'>" + courses[i]["name"] + "</h4>" +
                        "<p>" + courses[i]["instructor"] + 
                        "<button class='btn btn-small btn-info pull-right'>加入課表</button></p></div>");
            }
        });
    }

    $('#search-btn').click(function() {
        search($('#keyword-text').val());
    });

    $('#keyword-text').keypress(function(event) {
        if (event.which == 13) search($(this).val());
    });

    $(document).on("click", '.course', function(event) {
        console.log("add course " + $(this).find('.course-name').html());
    });
});