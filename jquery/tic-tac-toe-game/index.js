$(document).ready(function () {
  // Initialize letiables for the game
  let currentPlayer = "X"; // Represents the current player's turn, starts with X
  let gameOver = false; // Indicates if the game is over or still in progress

  // Event listener for grid cell clicks
  $(".board").on("click", ".cell", function () {
    // Check if the game is not over and the clicked cell is empty
    if (!gameOver && $(this).text() === "") {
      $(this).text(currentPlayer); // Fill the cell with the current player's symbol
      checkWinner(); // Check if the current move results in a win
      togglePlayer(); // Switch to the next player's turn
    }
  });

  // Event listener for the "Restart Game" button click
  $("#resetBtn").click(function () {
    resetGame(); // Reset the game when the button is clicked
  });

  // Function to toggle the current player (X or O)
  function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    $("#turnText").text("It's " + currentPlayer + "'s turn"); // Update the turn display
  }

  // Function to check if there's a winner or a draw
  function checkWinner() {
    let cells = $(".cell"); // Get all grid cells
    let combinations = [
      // All possible winning combinations (rows, columns, diagonals)
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Loop through each winning combination
    for (let i = 0; i < combinations.length; i++) {
      let [a, b, c] = combinations[i]; // Get the indices of the current combination
      // Check if the symbols in the current combination are the same and not empty
      if (
        cells.eq(a).text() &&
        cells.eq(a).text() === cells.eq(b).text() &&
        cells.eq(a).text() === cells.eq(c).text()
      ) {
        gameOver = true; // Game is over
        $("#resultText").text(currentPlayer + " wins!"); // Display the winning player
        $("#resultAlert")
          .removeClass("alert-warning")
          .addClass("alert-success")
          .removeClass("d-none"); // Show the result message
        return;
      }
    }

    // If all cells are filled and no winner is found, it's a draw
    if ($(".cell:empty").length === 0) {
      gameOver = true; // Game is over
      $("#resultText").text("It's a draw!"); // Display draw message
      $("#resultAlert")
        .removeClass("alert-warning")
        .addClass("alert-info")
        .removeClass("d-none"); // Show the result message
    }
  }

  // Function to reset the game
  function resetGame() {
    $(".cell").text(""); // Clear all grid cells
    gameOver = false; // Reset game over status
    $("#resultAlert").addClass("d-none"); // Hide the result message
    currentPlayer = "X"; // Reset to the first player (X)
    $("#turnText").text("It's X's turn"); // Update the turn display
  }
});
