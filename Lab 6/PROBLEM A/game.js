// Global state variables
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];

// Starts the game after validating player name
function startGame() {
    let nameInput = document.getElementById("playerName").value.trim();

    if (nameInput === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;
    document.getElementById("welcomeMsg").innerHTML = "Welcome, " + nameInput + "!";
    document.getElementById("startTime").innerHTML = "Game started on: " + new Date();
}

// Randomly selects rock, paper, or scissors for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Plays one round and updates UI, score, and history table
function playRound(playerChoice) {
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();

    // Update choice images
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    let outcome = "";
    let resultElement = document.getElementById("result");

    // Determine winner
    if (playerChoice === computerChoice) {
        outcome = "Draw";
        draws++;
        resultElement.innerHTML = "It's a Draw!";
        resultElement.style.color = "grey";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        outcome = "Win";
        wins++;
        resultElement.innerHTML = "You Win!";
        resultElement.style.color = "green";
    } else {
        outcome = "Lose";
        losses++;
        resultElement.innerHTML = "You Lose!";
        resultElement.style.color = "red";
    }

    // Update scoreboard and results array
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;
    results.push(outcome);

    // Append new row to history table
    let roundNumber = results.length;
    let tableBody = document.getElementById("history").getElementsByTagName("tbody")[0];
    tableBody.innerHTML += "<tr><td>" + roundNumber + "</td><td>" + playerChoice + "</td><td>" + computerChoice + "</td><td>" + outcome + "</td></tr>";
}

// Counts wins with a for loop and calculates rounded win percentage
function showSummary() {
    let totalRounds = results.length;
    if (totalRounds === 0) {
        document.getElementById("summary").innerHTML = "No rounds played yet.";
        return;
    }

    let winCount = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            winCount++;
        }
    }

    let winPercentage = Math.round((winCount / totalRounds) * 100);
    document.getElementById("summary").innerHTML = "You played " + totalRounds + " rounds and won " + winPercentage + "%";
}

// Resets scores, history table, arrays, input field, and all messages
function resetGame() {
    // 1. Tetapkan semula pemboleh ubah (variables)
    gameStarted = false;
    wins = 0;
    losses = 0;
    draws = 0;
    results = [];

    // 2. Kosongkan kotak input nama menggunakan .value
    document.getElementById("playerName").value = "";

    // 3. Kosongkan mesej alu-aluan & masa mula menggunakan .innerHTML
    document.getElementById("welcomeMsg").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";

    // 4. Tetapkan semula papan skor, keputusan pusingan & ringkasan
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";

    // 5. Kosongkan semua baris dalam jadual sejarah (history table)
    document.getElementById("history").getElementsByTagName("tbody")[0].innerHTML = "";

    // 6. Kembalikan gambar asal kepada rock.png (pilihan)
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";
}

