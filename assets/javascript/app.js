$(document).ready(function() {

var myShows = ["Naruto", "Southpark", "Pokemon", "Archer"];
// gifs-here = " ";
// function displayGIFS() {
//     var gify = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&" + apiKey + "&limit=10";
//     var apiKey = "api_key=0QUd0TfVGJQSkxletkWjnagHeQSgwTU4"
// }

function renderButtons() {
    $("#generatedButtons").empty();

    for (i = 0; i < myShows.length; i++) {
        var newButtons = $("<button>");
        newButtons.addClass("show");
        newButtons.attr('data-name', myShows[i]);
        newButtons.text(myShows[i]);
        $("#generatedButtons").append(newButtons);
    }
    $("#searchInput").focus();
}

renderButtons();

$("#add-search").on('click', function() {
    event.preventDefault();
    var show = $("#search-input").val().trim();
    myShows.push(show);
    renderButtons();
});

$(document).on('click', 'button', function() {
    // $("#gifs-here").empty();
    var thisShow = $(this).attr('data-name');
    var apiKey = "api_key=0QUd0TfVGJQSkxletkWjnagHeQSgwTU4";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisShow + "&" + apiKey + "&limit=10";
    console.log(thisShow);
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET'
    })

    .done(function(response) {
        console.log(response);
      var showData = response.data;
        for (var i = 0; i < response.length; i++) {
            var showgifDiv = $("<div>");
            var rating = showData[i].rating;
            var thisRating = $("<p>").text("Rating: " + rating);
            var thisImg = $("<img>");

            thisImg.attr("src", showData[i].images.fixed_height_still.url)
                .attr("data-still", showData[i].images.fixed_height_still.url)
                .attr("data-animate", showData[i].images.fixed_height.url)
                .attr("data-state", 'still');
            thisImg.addClass("gif");

            showgifDiv.append(thisRating);
            showgifDiv.append(thisImg);

            $("#gifs-here").prepend(showgifDiv);
        }
            console.log(thisImg);
            console.log(showgifDiv);
    });
});

// $(document).on("click", "#generatedButtons", function () {
//     var showName = $(this).attr("data-showName");
//     var apiKey = "api_key=0QUd0TfVGJQSkxletkWjnagHeQSgwTU4";
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&" + apikey + "&limit=10";
//     getGifs(queryURL);
// });

$(document).on("click", ".gif", function() {
    var state = $(this).data('state');

    if (state == "still") {
        $(this).attr('src', $(this).data('animate'))
        .data('state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'))
        .data('state', 'still');
    }

});
});