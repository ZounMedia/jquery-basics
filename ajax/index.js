$(document).ready(function () {
  // Fetching Data
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/5",
    method: "GET",
    success: function (data) {
      //updating the DOM to display the data
      console.log("data from request: ", { data });
      $("#data").html("<strong>Title:</strong> " + data.title);
    },
    error: function (error) {
      //updating the DOM to display the data
      console.log("Error from request: ", { error });
    },
  });

  // User Authentication
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    let formData = $(this).serialize();
    //Note: This a dummy URL, it won't work
    $.post("https://example.com/auth", formData, function (response) {
      $("#authStatus").text(response.message);
    });
  });

  // Form Submission
  $("#commentForm").submit(function (event) {
    event.preventDefault();
    let formData = $(this).serialize();
    //Note: This a dummy URL, it won't work
    $.post("https://example.com/comments", formData, function (response) {
      $("#commentStatus").text(response.message);
    });
  });

  // Auto-Suggestions and Search
  $("#searchBox").keyup(function () {
    let query = $(this).val();
    //Note: This a dummy URL, it won't work
    $.get("https://example.com/search?q=" + query, function (data) {
      let suggestions = data.suggestions;
      let suggestionsList = "";
      suggestions.forEach(function (item) {
        suggestionsList += "<li>" + item + "</li>";
      });
      $("#suggestions").html(suggestionsList);
    });
  });
});

/**In this example:
The fetchData section fetches a sample post data from JSONPlaceholder.
The userAuthentication section demonstrates form submission for user authentication.
The formSubmission section shows form submission (comment submission, for example).
The autoSuggestions section provides auto-suggestions as the user types in the search box.
*/
