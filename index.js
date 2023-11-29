const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
  if (document.getElementById("moveOneText")) {
    document
      .getElementById("player-one-move")
      .removeChild(document.getElementById("moveOneText"));
  }
  if (document.getElementById("moveTwoText")) {
    document
      .getElementById("player-two-move")
      .removeChild(document.getElementById("moveTwoText"));
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  const playerOneImg = document.getElementById("player-one-move__img");
  playerOneImg.setAttribute("src", `./images/${moveOne}.png`);
  playerOneImg.textContent = moveOne;
  const playerOneText = document.createElement("p");
  playerOneText.textContent = moveOne;
  playerOneText.setAttribute("id", "moveOneText");
  playerOneImg.parentElement.appendChild(playerOneText);

  const playerTwoImg = document.getElementById("player-two-move__img");
  playerTwoImg.setAttribute("src", `./images/${moveTwo}.png`);
  playerTwoImg.textContent = moveTwo;
  const playerTwoText = document.createElement("p");
  playerTwoText.textContent = moveTwo;
  playerTwoText.setAttribute("id", "moveTwoText");

  playerTwoImg.parentElement.appendChild(playerTwoText);

  //show outcome
  const outcomeElement = document.createElement("p");
  outcomeElement.textContent = outcome;
  outcomeElement.setAttribute("id", "outcome");
  document.body.appendChild(outcomeElement);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
