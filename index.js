countHome = 0
countGuest = 0
let homeScore = document.getElementById("home-el")
let guestScore = document.getElementById("guest-el")

function sum1Home() {
    homeScore.innerText = countHome += 1
}

function sum2Home() {
    homeScore.innerText = countHome += 2
}

function sum3Home() {
    homeScore.innerText = countHome += 3
}

function sum1Guest() {
    guestScore.innerText = countGuest += 1
}

function sum2Guest() {
    guestScore.innerText = countGuest += 2
}

function sum3Guest() {
    guestScore.innerText = countGuest += 3
}

function resetGame() {
    countHome = 0
    countGuest = 0
    homeScore.innerText = countHome
    guestScore.innerText = countGuest
}