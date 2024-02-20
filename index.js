let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


messageEl.innerText = "Want to play a round?"

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard
    if(sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        message = "You've got Blackjack!"
    } else if (sum > 21) {
        isAlive = false
        message = "You're out of the game!"
    }
    messageEl.innerText = message
}

function drawCard() {
    let newCard = 2
    sum += newCard
    renderGame()
}
