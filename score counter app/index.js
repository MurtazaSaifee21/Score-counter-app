let homeScoreEl = document.getElementById("home")
let homeScore = 0
let guestScoreEl = document.getElementById("guest")
let guestScore = 0

function homePlusOne() {
    console.log("button");
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function homePlusTwo() {
    console.log("button clicked");
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function homePlusThree() {
    console.log("button clicked");
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function homeReset() {
    console.log("button clicked")
    homeScore = 0;
    homeScoreEl.textContent = homeScore;

}

function guestPlusOne() {
    console.log("button clicked");
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function guestPlusTwo() {
    console.log("button clicked");
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function guestPlusThree() {
    console.log("button clicked");
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function guestReset() {
    console.log("button clicked")
    guestScore = 0;
    guestScoreEl.textContent = guestScore;

}