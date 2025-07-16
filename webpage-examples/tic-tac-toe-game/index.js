$(document).ready(function () {
  let currentPlayer = "X";
  let board = Array(9).fill(null);
  let gameOver = false;

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function renderTurnText() {
    $("#turnText").text(`It's ${currentPlayer}'s turn`);
  }

  function checkGameStatus() {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        gameOver = true;
        $("#resultText").text(`${currentPlayer} wins!`);
        $("#resultAlert")
          .removeClass("d-none alert-info")
          .addClass("alert-success");
        return;
      }
    }

    if (!board.includes(null)) {
      gameOver = true;
      $("#resultText").text("It's a draw!");
      $("#resultAlert")
        .removeClass("d-none alert-success")
        .addClass("alert-info");
    }
  }

  $(".cell").on("click", function () {
    const index = $(this).data("index");

    if (!gameOver && !board[index]) {
      board[index] = currentPlayer;
      $(this)
        .text(currentPlayer)
        .addClass(currentPlayer === "X" ? "x-move" : "o-move");

      checkGameStatus();

      if (!gameOver) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        renderTurnText();
      }
    }
  });

  $("#resetBtn").click(function () {
    board = Array(9).fill(null);
    currentPlayer = "X";
    gameOver = false;
    $(".cell").text("").removeClass("x-move o-move");
    $("#resultAlert").addClass("d-none");
    renderTurnText();
  });
});
