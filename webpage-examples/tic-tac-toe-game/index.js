$(document).ready(function () {
  // ========== INITIAL GAME SETUP ==========

  // Keeps track of whose turn it is: either "X" or "O". Game always starts with "X".
  let currentPlayer = "X";

  // This flag tells us whether the game is finished.
  // It becomes true when someone wins or the game ends in a draw.
  let gameOver = false;

  // ========== MAIN GAMEPLAY: HANDLE CELL CLICKS ==========

  // When a cell inside the game board is clicked...
  $(".board").on("click", ".cell", function () {
    // Only proceed if:
    // 1. The game is still ongoing (not over), AND
    // 2. The clicked cell is currently empty
    if (!gameOver && $(this).text() === "") {
      // Add the current player's symbol (X or O) to the clicked cell
      $(this).text(currentPlayer);

      // Check if this move caused the current player to win
      checkWinner();

      // If no one has won yet and game is still running, switch to the next player
      if (!gameOver) {
        togglePlayer();
      }
    }
  });

  // ========== RESET BUTTON FUNCTIONALITY ==========

  // When the "Restart Game" button is clicked, reset everything to start over
  $("#resetBtn").click(function () {
    resetGame();
  });

  // ========== HELPER FUNCTION: SWITCH PLAYER TURN ==========

  // function togglePlayer() {
  //   // If currentPlayer is "X", switch to "O". If it's "O", switch to "X".
  //   currentPlayer = currentPlayer === "X" ? "O" : "X";

  //   // Update the heading text to show whose turn it is now
  //   $("#turnText").text("It's " + currentPlayer + "'s turn");
  // }

  function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    $("#turnText")
      .text("It's " + currentPlayer + "'s turn")
      .removeClass("x-turn o-turn")
      .addClass(currentPlayer === "X" ? "x-turn" : "o-turn");
  }
  // ========== HELPER FUNCTION: CHECK FOR WINNER OR DRAW ==========

  function checkWinner() {
    // Get all the individual game cells (they're <div> elements with class="cell")
    let cells = $(".cell");

    // These are all the possible winning combinations:
    // rows, columns, and diagonals (based on cell index positions)
    let combinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // top-left to bottom-right diagonal
      [2, 4, 6], // top-right to bottom-left diagonal
    ];

    // Loop through each possible combination
    for (let i = 0; i < combinations.length; i++) {
      // Destructure the indexes for the 3 cells in this combo
      let [a, b, c] = combinations[i];

      // Check if:
      // - Cell A is NOT empty (so we know someone played there), AND
      // - Cell A, B, and C all have the same symbol (either all X or all O)
      if (
        cells.eq(a).text() &&
        cells.eq(a).text() === cells.eq(b).text() &&
        cells.eq(a).text() === cells.eq(c).text()
      ) {
        // If true, we have a winner!
        gameOver = true;

        // Show the winner message
        $("#resultText").text(currentPlayer + " wins!");

        // Style the alert message using Bootstrap success theme
        $("#resultAlert")
          .removeClass("alert-warning") // remove any leftover classes
          .addClass("alert-success") // green for success
          .removeClass("d-none"); // unhide the alert

        return; // No need to check other combos anymore
      }
    }

    // If all 9 cells are filled and no one won, it's a draw
    if ($(".cell:empty").length === 0) {
      gameOver = true;

      // Show draw message
      $("#resultText").text("It's a draw!");

      // Style the alert message using Bootstrap info theme (blue)
      $("#resultAlert")
        .removeClass("alert-warning")
        .addClass("alert-info")
        .removeClass("d-none");
    }
  }

  // ========== HELPER FUNCTION: RESET GAME TO START ==========

  function resetGame() {
    // Clear all the X's and O's from the board
    $(".cell").text("");

    // Set game back to not over
    gameOver = false;

    // Hide any win/draw message
    $("#resultAlert").addClass("d-none");

    // Reset to starting player
    currentPlayer = "X";

    // Update turn text
    $("#turnText").text("It's X's turn");
  }
});
