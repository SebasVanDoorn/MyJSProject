let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Seb",
    chips: 145
}
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard() {
    let randNum = Math.floor(Math.random() * 13) +1
    if (randNum === 1) {
        return 11
    } else if (randNum >= 11) {
        return 10
    } else {
        return randNum
    }
}

function startGame() {
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
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
    if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()}
    else return ""
}
