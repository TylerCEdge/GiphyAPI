var gifArray = ["Naruto", "Southpark", "Pokemon", "Archer"];

// function displayGIFS() {
//     var gify = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&" + apiKey + "&limit=10";
//     var apiKey = "api_key=0QUd0TfVGJQSkxletkWjnagHeQSgwTU4"
// }

$(document).on("click", ".renderedButtons", function () {
    var showName = $(this).attr("data-showName");
    var apiKey = "api_key=0QUd0TfVGJQSkxletkWjnagHeQSgwTU4"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showName + "&" + apikey + "&limit=10";
    getGifs(queryURL);
});