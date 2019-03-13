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
    
    $(document).on('click', '.show', function() {
        $("#gifs-here").empty();
        var thisShow = $(this).attr('data-name');
        var apiKey = "api_key=0QUd0TfVGJQSkxletkWjnagHeQSgwTU4";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisShow + "&" + apiKey + "&limit=10";
        // console.log(thisShow);
        // console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            // console.log("response:");
            // console.log(response);
            var allShows = response.data;
            // console.log(allShows);
    
            for (var i = 0; i < allShows.length; i++) {
                //Storing the current show object inside variable "thisShow"
                thisShow = allShows[i];
                // console.log(thisShow);
                //Creating a div to store all of the details
                showGif = $("<div>").addClass("gif");
                thisRating = $("<div>").text("Rating: " + thisShow.rating);
                thisImage = $("<img>").attr("src", thisShow.images.fixed_height.url);
                //Appending the details to the new div
                showGif.append(thisRating, thisImage);
                //Appending the new div to $("#gifs-here")
                $("#gifs-here").prepend(showGif);
            }
    
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