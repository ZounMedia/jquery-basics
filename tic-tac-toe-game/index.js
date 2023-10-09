$(document).ready(function () {
  let currentPlayer = "X";
  let gameOver = false;

  $(".board").on("click", ".cell", function () {
    if (!gameOver && $(this).text() === "") {
      $(this).text(currentPlayer);
      checkWinner();
      togglePlayer();
    }
  });

  $("#resetBtn").click(function () {
    resetGame();
  });

  function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    $("#turnText").text("It's " + currentPlayer + "'s turn");
  }

  function checkWinner() {
    let cells = $(".cell");
    let combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      let [a, b, c] = combinations[i];
      if (
        cells.eq(a).text() &&
        cells.eq(a).text() === cells.eq(b).text() &&
        cells.eq(a).text() === cells.eq(c).text()
      ) {
        gameOver = true;
        $("#resultText").text(currentPlayer + " wins!");
        $("#resultAlert")
          .removeClass("alert-warning")
          .addClass("alert-success")
          .removeClass("d-none");
        return;
      }
    }

    if ($(".cell:empty").length === 0) {
      gameOver = true;
      $("#resultText").text("It's a draw!");
      $("#resultAlert")
        .removeClass("alert-warning")
        .addClass("alert-info")
        .removeClass("d-none");
    }
  }

  function resetGame() {
    $(".cell").text("");
    gameOver = false;
    $("#resultAlert").addClass("d-none");
    currentPlayer = "X";
    $("#turnText").text("It's X's turn");
  }
});
